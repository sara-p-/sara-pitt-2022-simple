import gsap from 'gsap'
import {
  accordionClose,
  accordionOpen,
  accordionSwitch,
  closeThePanel,
  openThePanel,
  scrollTheWindow,
  shrinkTheAccordion,
} from './animations'
import {
  heightOfOtherElements,
  setAriaClosed,
  setTheAttributes,
} from './helpers'

export default function accordion() {
  const items = document.querySelectorAll('.accordion__item')
  const itemButtons = document.querySelectorAll('.accordion__button')
  const itemPanels = document.querySelectorAll('.panel')
  const theAccordion = document.querySelector('.accordion')

  itemButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      // Okay, first lets store the various data states in variables
      const accordionElementState = theAccordion.getAttribute(
        'data-accordion-active'
      )
      const accordionButtonState = button.getAttribute('aria-expanded')
      // const accordionPanelState = itemPanels[index].getAttribute('aria-hidden')

      // So, let's do it! On click:
      // 1. If the accordion element is not 'active':
      if (accordionElementState !== 'true') {
        //1a. Make it active
        theAccordion.setAttribute('data-accordion-active', 'true')
        //1b. Animate the opening of the accordion panel
        accordionOpen(theAccordion, index).play()

        //1c. Switch out all of the aria properties of the button and panel
        button.setAttribute('aria-expanded', 'true')
        itemPanels[index].setAttribute('aria-hidden', 'false')
        // 1d. Set the accordion item to be 'sticky'
        items[index].setAttribute('data-item-sticky', 'true')

        heightOfOtherElements(button.parentElement)

        // 2. If the accordion element is 'active', that means that another button is still open. So:
      } else {
        // If the user is clicking on the same button, close everything and deactivate the accordion
        if (accordionButtonState == 'true') {
          // a. Use the index to set the aria attributes of the panel and the button to the 'inactive' state
          itemButtons[index].setAttribute('aria-expanded', 'false')
          itemPanels[index].setAttribute('aria-hidden', 'true')
          // b. Set the 'sticky' state of the accordion item to 'false
          items[index].setAttribute('data-item-sticky', 'false')
          // c. Use the same index to target the right item for the closing animation
          accordionClose(theAccordion, index).restart()
          // d. Set the Accordion Element 'active' state to 'false'
          theAccordion.setAttribute('data-accordion-active', 'false')
        } else {
          // Else if the user is clicking on a new button, close the old one and open the new one
          // 2a. Create variable that loops over all the other items, and pulls out the index of the 'active' item
          const activeButtonIndex = [...itemButtons]
            .map((button) => button.getAttribute('aria-expanded'))
            .indexOf('true')
          // 2b. Use that index to set the aria attributes of the panel and the button to the 'inactive' state
          itemButtons[activeButtonIndex].setAttribute('aria-expanded', 'false')
          itemPanels[activeButtonIndex].setAttribute('aria-hidden', 'true')
          // 2c. Set the 'sticky' state of the accordion item to 'false
          items[activeButtonIndex].setAttribute('data-item-sticky', 'false')
          items[index].setAttribute('data-item-sticky', 'true')
          // 2d. Close the old panel and open the other
          accordionSwitch(theAccordion, activeButtonIndex, index).restart()

          button.setAttribute('aria-expanded', 'true')
          itemPanels[index].setAttribute('aria-hidden', 'false')
        }
      }
    })
  })
}
