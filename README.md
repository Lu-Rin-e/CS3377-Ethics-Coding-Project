# CS3377 Ethics & Coding Project - Accessibility Analyzer

This project allows users to upload an image and receive feedback from OpenAI about various graphic design elements. 

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the project root with your OpenAI API key:

```
OPENAI_API_KEY=sk-YOUR_KEY_HERE
```

Don't commit `.env` to version control. The file is already listed in `.gitignore`.

To get an API key:
- Go to [OpenAI Platform](https://platform.openai.com)
- Sign up or log in
- Create an API key under "API Keys"
- Paste it into your `.env` file

### 3. Run the Project

Open two terminals:

**Terminal 1 — Backend Server** (processes image uploads)
```bash
npm run start:server
```
Expected output: `Server listening on port 3001`

**Terminal 2 — Frontend Dev Server** (React + Vite)
```bash
npm run dev
```
Expected output: `Local: http://localhost:5173` (or similar)

### 4. Use the App

1. Navigate to `http://localhost:5173`
2. Log in or create a new account
3. Go to the **AI Analysis** page
4. Upload an image
5. Click **Run Analysis**
6. OpenAI analyzes the image and returns feedback

## How It Works

1. **Frontend** (`src/pages/AIPage.jsx`): User selects an image and clicks "Run Analysis". The image is sent to the backend via `POST /api/analyze`.

2. **Backend** (`server/index.js`): The server receives the image, converts it to base64, and forwards it to OpenAI's API with a prompt asking for constructive feedback on composition, lighting, clarity, and ethical concerns.

3. **Response**: OpenAI returns text analysis, which the frontend displays to the user.

## Security Notes

- **API Key**: Stored on the server only via `.env`. Never exposed to the frontend.
- **Image Privacy**: Images are sent to OpenAI for analysis. Review OpenAI's privacy policy if handling sensitive data.
- **Rate Limiting**: For production, add rate limiting and user authentication checks before calling OpenAI.
- **Moderation**: Consider adding OpenAI's moderation endpoint to check for harmful content.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes | Your OpenAI API key (begins with `sk-`) |
| `PORT` | No | Server port (default: 3001) |

## Troubleshooting

### "ECONNREFUSED" error in Vite
- Make sure the backend server is running on port 3001 (`npm run start:server`)

### "Cannot find package 'dotenv'"
- Run `npm install dotenv`

### "OPENAI_API_KEY not set on server"
- Check that `.env` exists in the project root
- Verify the key starts with `sk-`
- Restart the server after adding/updating `.env`

### "Error during analysis: Server error"
- Check the backend console for the full error message
- Verify your OpenAI API key is valid
- Ensure you have access to the `gpt-4o-mini` model

## Model Information

The backend currently uses `gpt-4o-mini` for image analysis. To use a different model:
1. Edit `server/index.js` line 25: change the `model` field
2. Restart the server

Supported multimodal models (as of Nov 2025):
- `gpt-4o` (latest, most capable)
- `gpt-4o-mini` (smaller, cheaper)
- `gpt-4-turbo` (older)

## Project Structure

```
.
├── src/
│   ├── pages/
│   │   └── AIPage.jsx           # Frontend UI & image upload logic
│   ├── firebase.js              # Firebase config
│   └── ...
├── server/
│   └── index.js                 # Express backend for OpenAI integration
├── .env                         # Local config (not in git)
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite config (includes /api proxy)
└── README.md                   # This file
```

## Production Deployment

For production:
1. Host the backend on a service like Vercel, Firebase Functions, or Heroku
2. Update the frontend proxy or API endpoint to point to the production server
3. Use environment variables for sensitive keys (not hardcoded)
4. Add authentication and rate limiting
5. Consider using Firebase Cloud Functions to replace `server/index.js`

## License

[Your license here]
