export function getDisplaySrc(src: string) {
  const id = src.split("/")[4]
  return `https://picsum.photos/id/${id}/500`
}