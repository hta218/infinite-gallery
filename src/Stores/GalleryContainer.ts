import { useState } from 'react'
import { createContainer } from 'unstated-next'
import fetchImages from '../APIs/images'
import { IMAGES_LIMIT } from '../Configs'

const GalleryContainer = createContainer(() => {
  const initialImages = fetchImages()
  const [images, setImages] = useState(initialImages)

  const loadMore = () => {
    if (images.length < IMAGES_LIMIT) {
      const newImages = fetchImages()
      setImages([...images, ...newImages])
    }
  }

  return { images, loadMore }
})

export default GalleryContainer

