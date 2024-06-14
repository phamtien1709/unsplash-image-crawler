require('dotenv').config()
const axios = require('axios')
const fs = require('fs')
const path = require('path')

const ACCESS_KEY = process.env.ACCESS_KEY // Access the key from .env

const downloadImage = async (url, imagePath) => {
  const writer = fs.createWriteStream(imagePath)
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

const getImages = async (query, count) => {
  const url = `https://api.unsplash.com/photos/random?query=${query}&count=${count}&client_id=${ACCESS_KEY}`
  const response = await axios.get(url)
  return response.data
}

const downloadImages = async (query, count) => {
  try {
    const images = await getImages(query, count)

    for (const image of images) {
      const imageUrl = image.urls.full
      const imageName = `${image.id}.jpg`
      const imagePath = path.resolve(__dirname, 'images', imageName)

      await downloadImage(imageUrl, imagePath)
      console.log(`Downloaded ${imageName}`)
    }

    console.log('All images downloaded')
  } catch (error) {
    console.error('Error downloading images:', error)
  }
}

const query = 'people' // Change to your preferred query
const count = 30 // Number of images to download

// Create the images directory if it doesn't exist
if (!fs.existsSync(path.resolve(__dirname, 'images'))) {
  fs.mkdirSync(path.resolve(__dirname, 'images'))
}

downloadImages(query, count)
