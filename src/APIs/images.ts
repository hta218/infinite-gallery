import { IMAGES_PER_FETCH } from "../Configs"

const fetchImages: () => string[] = () => {
  let images: string[] = []
  const timeStamp = new Date().getTime()
  for (let i = 0; i < IMAGES_PER_FETCH; i++) {
    const url = `https://picsum.photos/500?random=${timeStamp + i}`
    images.push(url)
  }
  return images
}

export default fetchImages