# Unsplash Image Crawler

This repository contains a Node.js script used to crawl and download images from Unsplash based on specified search queries and count options. The script leverages the Unsplash API to fetch images and saves them locally to your machine.

## Features

- Download images from Unsplash based on search queries.
- Specify the number of images to download.
- Efficiently handles image downloading and caching.
- Uses the Intersection Observer API for lazy loading.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- An Unsplash API access key. You can get one by registering an application on the [Unsplash Developer](https://unsplash.com/developers) website.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/phamtien1709/unsplash-image-crawler.git
   cd unsplash-image-crawler

2. Install the necessary dependencies:

   ```bash
   npm install

3. Create a `.env` file in the root directory and add your Unsplash access key:

   ```bash
   UNSPLASH_ACCESS_KEY=your_unsplash_access_key

## Usage

1. Modify the query and count variables in downloadImages.js to your desired search query and the number of images you want to download.

   ```bash
   const query = 'nature'; // Change to your preferred query
   const count = 10; // Number of images to download

2. Run the script:

    ```bash
    node index.js

This will download the specified number of images based on the query and save them to the **`images`** directory.

## Script Details

- **index.js**: Main script to fetch and download images from Unsplash.
- **dotenv**: Used to manage environment variables.
- **axios**: HTTP client for making API requests.
- **fs**: File system module to handle file operations.

### **Example**

To download 5 images of mountains, update the script as follows:

```javascript
const query = 'mountains';
const count = 5;
```

Run the script:

```bash
node index.js
```

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## **Contributing**

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## **Acknowledgements**

- [**Unsplash API**](https://unsplash.com/developers) for providing access to a vast collection of high-quality images.
- [**dotenv**](https://www.npmjs.com/package/dotenv) for managing environment variables.
- [**axios**](https://www.npmjs.com/package/axios) for HTTP requests.
- [**Node.js**](https://nodejs.org/) for providing the runtime environment.

---
