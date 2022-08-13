import gsap from 'gsap'
import {
  accordionClose,
  accordionOpen,
  accordionSwitch,
  closeThePanel,
  openThePanel,
  scrollTheWindow,
  shrinkTheAccordion,
  openFixedPanel,
} from './animations'
import {
  heightOfOtherElements,
  setAriaClosed,
  setTheAttributes,
} from './helpers'

export default function accordion() {
  // First let's grab the accordion items/buttons
  const itemButtons = document.querySelectorAll('.accordion__button')

  // On the click of a button, set the panel height to 100%
  itemButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      button.nextElementSibling.setAttribute('data-state', 'active')
      openFixedPanel(button.nextElementSibling).play()
    })
  })
}
