# Narrative Nest

A modern, full-stack blogging platform where users can create, edit, delete, and view blogs. Includes rich text editing, likes, comments, profile management, search, filtering, and an admin dashboard.

## Features
- Create, edit, delete blogs with rich text editor (Quill.js)
- User authentication (JWT-based)
- Comments and likes system
- User profile with authored blogs
- Search and category filtering
- Admin dashboard to manage posts and users
- Image upload via Cloudinary

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS, React Quill
- **Backend:** Node.js, Express.js, MongoDB
- **Other:** Cloudinary (image upload), Postman (API testing)

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or accessible via URI

### Backend Setup
1. Navigate to the `server` folder:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file based on `.env.example` and set your environment variables (MongoDB URI, JWT secret, Cloudinary keys).
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `client` folder:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend React app:
   ```sh
   npm start
   ```

### Usage
- Access the app at `http://localhost:3000` (frontend)
- Backend runs at `http://localhost:5000`

## References
- [Clever Programmer YouTube](https://www.youtube.com/c/CleverProgrammer)
- [Codevolution YouTube](https://www.youtube.com/c/Codevolution)
- Sample app: [Medium](https://medium.com)

## License
MIT
