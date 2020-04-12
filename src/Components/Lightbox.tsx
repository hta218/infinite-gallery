import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import AppContainer from '../Stores/AppContainer'
import GalleryContainer from '../Stores/GalleryContainer'

const ImageLightbox = () => {
  const appCont = AppContainer.useContainer()
  const galleryCont = GalleryContainer.useContainer()

  const { openLightbox, imageIndex, setImageIndex, setOpenLightbox } = appCont

  const { images } = galleryCont
  const srcs = images.map(img => img.lightbox_url)
  const currImg = images[imageIndex]

  if (!openLightbox) { return null }

  return <Lightbox
    mainSrc={srcs[imageIndex]}
    nextSrc={srcs[(imageIndex + 1) % srcs.length]}
    prevSrc={srcs[(imageIndex + srcs.length - 1) % srcs.length]}
    onCloseRequest={() => setOpenLightbox(false)}
    onMovePrevRequest={() => setImageIndex((imageIndex + srcs.length - 1) % srcs.length)}
    onMoveNextRequest={() => setImageIndex((imageIndex + 1) % srcs.length)}
    animationOnKeyInput={true}
    imageTitle={`Image by ${currImg.author}`}
  />
}

export default ImageLightbox
