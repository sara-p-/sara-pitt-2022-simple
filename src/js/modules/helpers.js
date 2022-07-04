import Data from '../json/data.json'
import { createSpan } from './html-components'

// Loop through the given array of elements, and assign them specific color classes
export function setColors(elementArray, colorType, className, itemName) {
  const colorArray = Data['colorsRainbow']
  for (
    let elementIndex = 0;
    elementIndex < elementArray.length;
    elementIndex++
  ) {
    let count = elementIndex % colorArray.length
    const element = elementArray[elementIndex]
    if (colorType == 'colorsNeutral') {
      element.classList.remove(
        `${className}${colorArray[count]}`,
        `${itemName}${elementIndex}`
      )
      element.classList.add(`${className}neutral`, `${itemName}${elementIndex}`)
    } else {
      element.classList.remove(
        `${className}neutral`,
        `${itemName}${elementIndex}`
      )
      element.classList.add(
        `${className}${colorArray[count]}`,
        `${itemName}${elementIndex}`
      )
    }
  }
}

// Loop through the given array of elements, and replace each character with a span element containing the character and the specified class
export function insertSpans(elementArray, className) {
  elementArray.forEach((element) => {
    // 1. Grab all of the characters in the element
    let theInnerText = element.innerText
    // 1. Create a mini-array from all of the characters
    let characterArray = theInnerText.split('')
    // 2. Empty the original innerText of the Element (because we will be replacing it with each character wrapped in its own span)
    element.innerText = ''
    // 3. Loop through the characterArray, and replace each character with a span tag. We also need to deal with the spaces in the array (because we don't want the spaces to claim a color), so each span should have a class that declares whether it's a character or a space.
    characterArray.forEach((character) => {
      element.append(createSpan(character, className))
    })
  })
}

// Setting the Default and Ghost classes
export function setSwitchClass(switchSetting) {
  const defaultWrapper = document.querySelector('.default')
  const ghostWrapper = document.querySelector('.ghost')

  if (switchSetting == 'neutral') {
    defaultWrapper.classList.remove('default--rainbow')
    defaultWrapper.classList.add('default--neutral')
    ghostWrapper.classList.remove('ghost--rainbow')
    ghostWrapper.classList.add('ghost--neutral')
  } else {
    defaultWrapper.classList.remove('default--neutral')
    defaultWrapper.classList.add('default--rainbow')
    ghostWrapper.classList.remove('ghost--neutral')
    ghostWrapper.classList.add('ghost--rainbow')
  }
}
