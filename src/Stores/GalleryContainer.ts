import { useState } from 'react'
import { createContainer } from 'unstated-next'
import fetchImages from '../APIs/images'
import { IMAGES_LIMIT } from '../Settings'

export interface IImage {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
  thumbnail_url: string
}

const GalleryContainer = createContainer(() => {
  const [images, setImages] = useState<IImage[]>([])
  const [pageLoad, setPageLoad] = useState(1)

  const loadMore = async () => {
    if (images.length < IMAGES_LIMIT) {
      const newImages: any[] = await fetchImages(pageLoad)
      // setPageLoad(pageLoad + 1)
      setImages([...images, ...newImages])
    }
  }

  return { images, loadMore, pageLoad, setPageLoad }
})

export default GalleryContainer

