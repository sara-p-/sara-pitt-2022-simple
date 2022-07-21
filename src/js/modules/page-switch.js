import Data from '../json/data.json'
import { setColorClasses, insertSpans } from './helpers'
import { toggleDarkLightButton } from './animations'

export default function pageSwitch() {
  const defaultSwitchInput = document.querySelector(
    '#default-header-switch input'
  )
  const switchButton = document.querySelector('#dark-light-button')
  const itemArray = document.querySelectorAll('.list__item')
  const navLinkArray = document.querySelectorAll('.nav__link')
  const letterArray = document.querySelectorAll('.letters')

  // *************** Setting all of the class changes *************** //
  // Grabbing all of the relevant elements, and surrounding each of their innerText characters with spans
  insertSpans(letterArray, ['letter'])

  let spanArray = document.querySelectorAll('span.letter')

  // Adding the color classes
  setColorClasses(spanArray, 'color--')
  // setColorClasses(navLinkArray, 'color--')
  setColorClasses(itemArray, 'background-color--')

  // Now let's put the logic in place to switch everything over on the defaultSwitchInput change
  switchButton.addEventListener('click', (e) => {
    // Okay, lets animate the button so that it rotates when it's clicked
    const buttonState = e.target.dataset.buttonState

    console.log(buttonState)
    if (buttonState == 'light') {
      toggleDarkLightButton(switchButton).play()
      e.target.setAttribute('data-button-state', 'dark')
    } else {
      toggleDarkLightButton(switchButton).reverse()
      e.target.setAttribute('data-button-state', 'light')
    }

    // Stellar. Now let's switch out the data-theme attribute values
    const fakeBodyArray = document.querySelectorAll('.mask-section, body')
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
