import gsap from 'gsap'
import { moveToTop } from './animations'

export default function accordion() {
  const items = document.querySelectorAll('.accordion__item')
  const itemButtons = document.querySelectorAll('.accordion__button')

  itemButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      const pixelsToTop = items[index].getBoundingClientRect().top
      console.log(pixelsToTop)
      moveToTop(items[index], pixelsToTop).play()
    })
  })
}
