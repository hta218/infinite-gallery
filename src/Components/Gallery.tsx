import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import GalleryContainer from '../Stores/GalleryContainer'
import LazyImage from './LazyImage'
import AppContainer from '../Stores/AppContainer'

let fetching = false

const Gallery = ({ cols }: { cols: any }) => {
  const gallery = GalleryContainer.useContainer()
  const appCont = AppContainer.useContainer()
  // @ts-ignore
  window.gallery = gallery

  const handleScroll = () => {
    let bodyHeight = document.body.getBoundingClientRect().height
    if (window.scrollY + window.innerHeight >= bodyHeight - 100) {
      if (!fetching) {
        gallery.loadPage()
        fetching = true
        setTimeout(() => { fetching = false }, 300)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    if (gallery.pageLoad === 1) {
      gallery.loadPage()
    }
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleImageClick = (idx: number) => {
    appCont.setImageIndex(idx)
    appCont.setOpenLightbox(true)
  }

  return (
    <Grid columns={cols}>
      {
        gallery.images.map((img, idx) => {
          return <Grid.Column key={idx}>
            <LazyImage
              onClick={() => handleImageClick(idx)}
              src={img.thumbnail_url} />
          </Grid.Column>
        })
      }
    </Grid>
  )
}


export default Gallery