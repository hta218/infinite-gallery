import React, { useEffect, useState } from 'react'
import { Image } from 'semantic-ui-react'

const LazyImage = ({ src, onClick }: { src: string, onClick: () => void }) => {

  const [loaded, setLoaded] = useState(false)
  const lazyImgSrc = "https://mazipan.github.io/vue-tiny-lazyload-img/assets/placeholder.png"

  useEffect(() => {
    const img = document.createElement("img")
    img.src = src
    img.onload = () => { setLoaded(true) }
    // eslint-disable-next-line
  }, [])

  return <Image
    onClick={onClick}
    src={loaded ? src : lazyImgSrc}
  />
}

export default LazyImage