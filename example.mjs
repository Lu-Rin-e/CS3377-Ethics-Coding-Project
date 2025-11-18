/* I created this file while following the step-by-step process of OpenAI's
   developer Quickstart on their website so I could figure out how it worked.
   It doesn't serve any direct purpose for the rest of the project. */
import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-5-nano",
    input: "Explain the elements of an accessible graphic design."
});

console.log(response.output_text);