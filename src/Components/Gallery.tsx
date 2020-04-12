import React, { useEffect } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import GalleryContainer from '../Stores/GalleryContainer'
import AppContainer from '../Stores/AppContainer'

let fetching = false

const Gallery = ({ cols }: { cols: any }) => {
  const appCont = AppContainer.useContainer()
  const gallery = GalleryContainer.useContainer()

  useEffect(() => {
    const handleScroll = async () => {
      let bodyHeight = document.body.getBoundingClientRect().height;
      if (window.scrollY + window.innerHeight >= bodyHeight) {
        if (!fetching) {
          await gallery.loadMore()
          gallery.setPageLoad(gallery.pageLoad + 1)
          fetching = true
          setTimeout(() => { fetching = false }, 300)
        }
      }
    }

    gallery.loadMore().then(() => {
    })
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [gallery])

  const handleImageClick = (idx: number) => {
    appCont.setImageIndex(idx)
    appCont.setOpenLightbox(true)
  }

  return (
    <Grid columns={cols}>
      {
        gallery.images.map((img, idx) => {
          return <Grid.Column key={idx}>
            <Image
              src={img.thumbnail_url}
              onClick={() => handleImageClick(idx)}
            />
          </Grid.Column>
        })
      }
    </Grid>
  )
}


export default Gallery