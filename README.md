# AI Image Enhancer

AI Image Enhancer is a React-based web application that allows users to enhance the quality of their images using AI-powered image processing. The application provides a simple interface to upload an image, processes it using an external API, and displays the enhanced version of the image.

## Features

- **Image Upload**: Users can upload an image file from their local system.
- **AI-Powered Enhancement**: The application uses an external API to enhance the quality of the uploaded image.
- **Real-Time Preview**: Displays both the original and enhanced images side by side for comparison.
- **Responsive Design**: The application is designed to work seamlessly on different screen sizes.

## How It Works

1. **Upload an Image**: Users can upload an image file using the drag-and-drop interface or by selecting a file manually.
2. **Processing**: The uploaded image is sent to an external API for enhancement. The application polls the API to check the status of the enhancement process.
3. **Enhanced Image Display**: Once the enhancement is complete, the enhanced image is displayed alongside the original image.

## Requirements

To run this project locally, you need the following:

- **Node.js**: Version 16 or higher.
- **npm**: Comes with Node.js or use an alternative like Yarn.
- **API Key**: The application uses an external API for image enhancement. You need to obtain an API key from the service provider.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ai-image-enhancer.git


Install dependencies:
npm install

**Set up the API key:
Open the file src/utils/ImgEnhancer.js.
Replace the placeholder API_Key with your actual API key.

Start the development server:
npm run dev

**Open the application in your browser:
Navigate to http://localhost:5173.

**Project Structure : 
src/Components: Contains React components like UploadImage, ImgPreview, and Home.
src/utils: Contains utility functions like imgEnhancer for interacting with the external API.
src/index.css: Contains global styles using Tailwind CSS.
vite.config.js: Configuration file for Vite.

**Technologies Used : 
React: For building the user interface.
Tailwind CSS: For styling the application.
Axios: For making API requests.
Vite: For fast development and build tooling.

**External API : 
The application uses an external API to enhance images. The API processes the uploaded image and returns the enhanced version. The API key is required to authenticate requests.

**Notes : 
Ensure that the API key is kept secure and not exposed in public repositories.
The application is designed for educational purposes and may require additional optimizations for production use.

**License :
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms. ```