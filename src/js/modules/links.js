import Data from '../json/data.json'
import { setHoverColors } from './helpers'

export default function linkBackgrounds() {
  const hoverColors = Data['letter-colors']
  const workLinks = document.querySelectorAll('.list__link')
  const allLinks = document.querySelectorAll('a, button')

  setHoverColors(workLinks, hoverColors)
}
