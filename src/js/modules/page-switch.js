import Data from '../json/data.json'
import { setColors, insertSpans, setSwitchClass } from './helpers'

export default function pageSwitch() {
  const defaultSwitchInput = document.querySelector(
    '#default-header-switch input'
  )
  const defaultItemArray = document.querySelectorAll('.default .list__item')
  const ghostItemArray = document.querySelectorAll('.ghost .list__item')

  // *************** Setting all of the class changes *************** //
  // Grabbing all of the relevant elements, and surrounding each of their innerText characters with spans
  const elementArray = document.querySelectorAll('.letters')
  insertSpans(elementArray, ['letter'])
  const spanArray = document.querySelectorAll('span.letter')

  // The default state is 'neutral', so let's go ahead and set everything up for that
  setSwitchClass('neutral')
  setColors(spanArray, 'colorsNeutral', 'color--', 'span--')
  setColors(
    defaultItemArray,
    'colorsNeutral',
    'background-color--',
    'list__item--'
  )
  setColors(
    ghostItemArray,
    'colorsNeutral',
    'background-color--',
    'list__item--'
  )

  // Now let's put the logic in place to switch everything over on the defaultSwitchInput change
  // defaultSwitchInput.addEventListener('change', (e) => {
  //   // If the Header switch gets clicked, all the other switches should follow
  //   if (defaultSwitchInput.checked == false) {
  //     setSwitchClass('neutral')
  //     setColors(spanArray, 'colorsNeutral', 'color--', 'span--')
  //     setColors(
  //       defaultItemArray,
  //       'colorsNeutral',
  //       'hover-color--',
  //       'list__item--'
  //     )
  //     setColors(
  //       ghostItemArray,
  //       'colorsNeutral',
  //       'background-color--',
  //       'list__item--'
  //     )
  //   } else if (defaultSwitchInput.checked == true) {
  //     setSwitchClass('rainbow')
  //     setColors(spanArray, 'colorsRainbow', 'color--', 'span--')
  //     setColors(
  //       defaultItemArray,
  //       'colorsRainbow',
  //       'hover-color--',
  //       'list__item--'
  //     )
  //     setColors(
  //       ghostItemArray,
  //       'colorsRainbow',
  //       'hover-color--',
  //       'list__item--'
  //     )
  //   }
  // })
}
