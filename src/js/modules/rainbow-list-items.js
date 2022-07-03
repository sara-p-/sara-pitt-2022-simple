import { setColors } from './helpers'

export default function setRainbowListItems() {
  // Work List Items
  const itemArray = document.querySelectorAll('.ghost .list__item')
  setColors(itemArray, 'background-color--')

  // Nav List Items
  const navArray = document.querySelectorAll('.ghost .logo, .ghost .nav__link')
  setColors(navArray, 'hover-color--')
}
