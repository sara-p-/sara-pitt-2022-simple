import Data from '../json/data.json'
import { setColorClasses, insertSpans } from './helpers'

export default function pageSwitch() {
  const defaultSwitchInput = document.querySelector(
    '#default-header-switch input'
  )
  const itemArray = document.querySelectorAll('.list__item')
  const navLinkArray = document.querySelectorAll('.nav__link')
  const letterArray = document.querySelectorAll('.letters')

  // *************** Setting all of the class changes *************** //
  // Grabbing all of the relevant elements, and surrounding each of their innerText characters with spans
  insertSpans(letterArray, ['letter'])

  let spanArray = document.querySelectorAll('span.letter')

  // Adding the color classes
  setColorClasses(spanArray, 'color--')
  setColorClasses(navLinkArray, 'color--')
  setColorClasses(itemArray, 'background-color--')

  // Now let's put the logic in place to switch everything over on the defaultSwitchInput change
  defaultSwitchInput.addEventListener('change', (e) => {
    // Okay, if the header switch changes, we need to switch the [data-theme] attribute value
    const fakeBodyArray = document.querySelectorAll('.fake-body')
    fakeBodyArray.forEach((item) => {
      const theme = item.dataset.theme

      if (theme == 'default') {
        item.setAttribute('data-theme', 'alt')
      } else {
        item.setAttribute('data-theme', 'default')
      }
    })
  })
}
