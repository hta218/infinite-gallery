import { IMAGES_PER_FETCH } from "../Settings"
import { IImage } from "../Stores/GalleryContainer"
import { getDisplaySrc } from "../Settings/utils"

// Request to server
const fetchImages: (page: number) => Promise<any[]> = async (page) => {
  const imageAPI = `https://picsum.photos/v2/list?page=${page}?limit=${IMAGES_PER_FETCH}`
  let res: IImage[] = await (await fetch(imageAPI)).json()

  res = res.map((img: IImage) => {
    return {
      ...img,
      thumbnail_url: getDisplaySrc(img.download_url)
    }
  })

  return res
}

export default fetchImages