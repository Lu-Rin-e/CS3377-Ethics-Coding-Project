# CS3377 Ethics Coding Project Assignment - Accessibility Analyzer

Our project is a web application that allows users to upload an image and receive feedback from OpenAI about various graphic design elements. 

The purpose of the feedback isn't to be a set of hard and fast rules for the user to follow, but to be a bunch of suggestions and guiding points. Art is subjective, after all. 

### Contributions:
- Front-end/Firebase: Ashley Sturm
- Back-end/AI Integration: Rin Lu
- README: Rin Lu

## Set-up

### 1. Change Execution Policy
Open two terminals in Windows Powershell and in both terminals type 'Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process', then type 'Y'
- The policy only changes for the current session. Closing the terminal resets the policies
- This will let us run our scripts

Each terminal corresponds with front end and back end. 

### 2. Navigate to the project's file location
On both terminals, type 'cd' and the file path

### 3. npm install
In the front-end terminal, type 'npm install'

### 4. Install OpenAI
In the front-end terminal, type 'setx OPENAI_API_KEY "your_api_key_here"'
- Insert an API key

### 5. Start
In the back-end terminal, type 'npm run start:server'
- You should get a message that reads 'Server listening on port 3001'
In the front-end terminal, type 'npm run dev', then type o
- This will open the web app in the terminal
