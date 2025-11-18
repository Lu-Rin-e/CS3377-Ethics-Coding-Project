// Copilot was used to help write the code for this file. Comments by Rin Lu
// Import these packages
import express from "express"; // Helps with building the website
import multer from "multer"; // Helps to handle file uploads
import dotenv from "dotenv"; // Loads variables from an environment file, key keeping

dotenv.config(); 

const app = express();
const upload = multer({
    /* Limit file size of the image. Through this project, I learned that 
    processing requests through OpenAI costs tokens, which translates to
    real money. Respectfully, I did not want to spend more than $5 on this. */
    storage: multer.memoryStorage(), limits: {
            fileSize: 8 * 1024 * 1024
        }
    });

// POST /api/analyze
// Accepts multipart/form-data with a field named `image`.
// Forwards the image to OpenAI (Responses API) and returns a text summary.
app.post("/api/analyze", upload.single("image"), async (req, res) => {
    if (!req.file) return res.status(400).json({
        error: "No image uploaded"
    });
    // If you didn't enter an API key, throw an error
    if (!process.env.OPENAI_API_KEY) return res.status(500).json({
        error: "OPENAI_API_KEY not set on server"
    });

    try {
        // Convert to base64 so we can include it in the request body
        const b64 = req.file.buffer.toString("base64");
        const mimeType = req.file.mimetype || "image/jpeg";

        // Use the standard Chat Completions API with vision support
        const body = {
            // Select the specific OpenAI model we're gonna use
            model: "gpt-4o-mini",
            // Send this message to OpenAI
            messages: [ {
                role: "user",
                content: [ {
                    // THE PROMPT
                    type: "text",
                    text: "Please analyze the image in the context of graphic design and provide feedback on its readability and clarity. Remove syntax formatting from your response."
                },
                {
                    // The image the user uploads
                    type: "image_url",
                    image_url: {
                        url: `data:${mimeType};base64,${b64}`
                    }
                }]
            }]
        };
        const resp = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${
                    process.env.OPENAI_API_KEY
                }`,
            },
            body: JSON.stringify(body),
        });

        // If the request fails, throw an error
        if (!resp.ok) {
            const errText = await resp.text();
            console.error("OpenAI error", resp.status, errText);
            return res.status(502).json({
                error: "OpenAI request failed", details: errText
            });
        }
        const data = await resp.json();

        // Extract text from the standard Chat Completions response
        let analysis = null;
        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            analysis = data.choices[0].message.content;
        } else {
            analysis = JSON.stringify(data);
        }
        res.json({ analysis, raw: data });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Server error", details: String(err)
            /* If a server error occurs, it's likely because the back-end
               isn't active */
        });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
