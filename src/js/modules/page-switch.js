import Data from '../json/data.json'
import { setColors, insertSpans, setSwitchClass } from './helpers'

export default function pageSwitch() {
  const switchInput = document.querySelector('#default-switch input')
  const itemArray = document.querySelectorAll('.ghost .list__item')

  // Grabbing all of the relevant elements, and surrounding each of their innerText characters with spans
  const elementArray = document.querySelectorAll('.letters')
  insertSpans(elementArray, 'letter')
  const spanArray = document.querySelectorAll('span.letter')

  // The default state is 'neutral', so let's go ahead and set everything up for that
  setSwitchClass('neutral')
  setColors(spanArray, 'colorsNeutral', 'color--')

  // Now let's put the logic in place to switch everything over on the switchInput change
  switchInput.addEventListener('change', (e) => {
    console.log(`input has changed to: ${switchInput.value}`)
    if (switchInput.value == 0) {
      setSwitchClass('neutral')
      setColors(spanArray, 'colorsNeutral', 'color--')
    } else if (switchInput.value == 1) {
      setSwitchClass('rainbow')
      setColors(spanArray, 'colorsRainbow', 'color--')
      setColors(itemArray, 'colorsRainbow', 'background-color--')
    }
  })
}
