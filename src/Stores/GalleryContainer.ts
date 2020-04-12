import { useState } from 'react'
import { createContainer } from 'unstated-next'
import fetchImages from '../APIs/images'
import { INITIAL_PAGE, PAGE_LIMIT } from '../Settings'

export interface IImage {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
  thumbnail_url: string
  lightbox_url: string
}

const GalleryContainer = createContainer(() => {
  const [pageLoad, setPageLoad] = useState(INITIAL_PAGE)
  const [images, setImages] = useState<IImage[]>([])

  const loadPage = () => {
    if (pageLoad < PAGE_LIMIT + INITIAL_PAGE) {
      fetchImages(pageLoad).then(newImages => {
        setPageLoad(pageLoad + 1)
        setImages([...images, ...newImages])
      })
    }
  }

  return { images, loadPage, pageLoad, setPageLoad }
})

export default GalleryContainer

