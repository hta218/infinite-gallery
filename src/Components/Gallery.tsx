import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { Grid, Image } from 'semantic-ui-react'
import GalleryContainer from '../Stores/GalleryContainer'

let fetching = false

const Gallery = () => {
  const gallery = GalleryContainer.useContainer()

  const handleScroll = () => {
    let bodyHeight = document.body.getBoundingClientRect().height;
    if (window.scrollY + window.innerHeight >= bodyHeight) {
      if (!fetching) {
        gallery.loadMore();
        fetching = true
        setTimeout(() => { fetching = false }, 300)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const cols = isMobile ? 1 : 5

  return (
    <Grid columns={cols}>
      {
        gallery.images.map((src, i) => {
          return <Grid.Column key={i}>
            <Image src={src} />
          </Grid.Column>
        })
      }
    </Grid>
  )
}


export default Gallery