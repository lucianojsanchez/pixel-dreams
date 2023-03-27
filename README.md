# Pixel Dreams

Pixel Dreams is a MERN stack web application created for learning purposes. It uses the DALL-E API to generate unique images based on user prompts.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- DALL-E API
- Cloudinary
- Mongoose
- File-Saver
- Tailwind CSS
- Typescript

**Deploy:** Render + Vercel

## Features

- Users can create posts by entering a name, prompt, and an image
- Posts are stored in a MongoDB database
- Images are generated using the DALL-E API
- Users can view a list of all the posts
- Post are deletable

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/lucianojsanchez/pixel-dreams.git
cd pixel-dreams
npm install`
```

Next, create a `.env` file in the root of the project with the following contents:

```
MONGODB_URL=<your-mongodb-url>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
DALLE_API_KEY=<your-dalle-api-key>
DALLE_API_SECRET=<your-dalle-api-secret>
```

Finally, start the server:

```
npn start
```

## Contributing

Contributions are always welcome! If you find a bug or want to add a new feature, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
