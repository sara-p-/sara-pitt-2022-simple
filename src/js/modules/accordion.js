import gsap from 'gsap'
import {
  accordionOpen,
  scrollTheWindow,
  shrinkTheAccordion,
} from './animations'
import { setAriaClosed, setTheAttributes } from './helpers'

export default function accordion() {
  const items = document.querySelectorAll('.accordion__item')
  const itemButtons = document.querySelectorAll('.accordion__button')
  const itemPanels = document.querySelectorAll('.accordion .panel')
  const theAccordion = document.querySelector('.accordion')

  itemButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      // Okay, first lets store the various data states in variables
      const accordionElementState = theAccordion.getAttribute(
        'data-accordion-active'
      )
      const accordionButtonState = button.getAttribute('aria-expanded')
      const accordionPanelState = itemPanels[index].getAttribute('aria-hidden')

      // So, when I user clicks a button, I want the following to happen in this sequence:
      // 1. All of the individual items get smaller, and stack on top of each other
      // 2. The clicked button moves to the top of the screen
      // 3. The active panel expands. I'm not sure if I want the panel to be full screen or not

      // So, let's do it! On click:
      // 1. Check to see if the general accordion section is 'active'
      if (accordionElementState == 'false') {
        // If it's not active, let's make it active
        theAccordion.setAttribute('data-accordion-active', 'true')
        // Then let's 'shrink' the accordion items so they stack
        accordionOpen(theAccordion, index).play()
        // shrinkTheAccordion(theAccordion, index).play()
      }

      // // So, when a user clicks a button:
      // // If it's closed:
      // if (accordionButtonState !== 'true') {
      //   // 1. 'Open' it (by setting the aria attributes)
      //   button.setAttribute('aria-expanded', 'true')
      //   itemPanels[index].setAttribute('aria-hidden', 'false')
      //   // 2. 'Close' all of the other buttons/panels/items by using a function that loops through the button/panel/item arrays
      //   setAriaClosed(itemButtons, index, 'aria-expanded', 'false')
      //   setAriaClosed(itemPanels, index, 'aria-hidden', 'true')
      //   setTheAttributes(items, 'data-item-sticky', 'false')
      //   // 3. If the general accordion state is 'false', set it to 'true'
      //   if (accordionElementState == 'false') {
      //     theAccordion.setAttribute('data-accordion-active', 'true')
      //   }
      //   // 4. Set the accordion item to be 'sticky'
      //   items[index].setAttribute('data-item-sticky', 'true')
      //   // 5. Scroll the window to the item
      //   scrollTheWindow(items[index])

      //   // Else, if the button is open:
      // } else {
      //   // 1. Close the button/panel
      //   button.setAttribute('aria-expanded', 'false')
      //   itemPanels[index].setAttribute('aria-hidden', 'true')
      //   // 2. Remove the 'sticky' state from the accordion item
      //   items[index].setAttribute('data-item-sticky', 'false')
      //   // 3. Set the general accordion state to 'false'
      //   theAccordion.setAttribute('data-accordion-active', 'false')
      // }
    })
  })
}
