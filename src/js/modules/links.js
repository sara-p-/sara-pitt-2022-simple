import { setColors } from './helpers'

export default function linkBackgrounds() {
  const workLinks = document.querySelectorAll('.list__link')

  setColors(workLinks, hoverColors, 'hover-color--')
}
