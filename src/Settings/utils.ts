import { MAX_WIDTH } from "."

export function getDisplaySrc(src: string) {
  const id = src.split("/")[4]
  return `https://picsum.photos/id/${id}/500`
}

export function getLightboxSrc(src: string) {
  const data = src.split("/")
  const width = parseInt(data[5])
  const height = parseInt(data[6])

  const lightboxWidth = MAX_WIDTH
  const lightboxHeight = Math.round(lightboxWidth * height / width)

  data[5] = MAX_WIDTH.toString()
  data[6] = lightboxHeight.toString()

  const lightboxSrc = data.join("/")

  return lightboxSrc
}