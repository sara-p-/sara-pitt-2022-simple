import Data from '../json/data.json'
import { createSpan } from './html-components'

// Loop through the given array of elements, and assign them specific color classes
export function setColors(elementArray, className) {
  const colorArray = Data.colors
  for (let linkIndex = 0; linkIndex < elementArray.length; linkIndex++) {
    let count = linkIndex % colorArray.length
    const element = elementArray[linkIndex]
    element.classList.add(`${className}${colorArray[count]}`)
  }
}

// Loop through the given array of elements, and replace each character with a span element containing the character and the specified class
export function insertSpans(elementArray) {
  elementArray.forEach((element) => {
    // 1. Grab all of the characters in the element
    let theInnerText = element.innerText
    // 1. Create a mini-array from all of the characters
    let characterArray = theInnerText.split('')
    // 2. Empty the original innerText of the Element (because we will be replacing it with each character wrapped in its own span)
    element.innerText = ''
    // 3. Loop through the characterArray, and replace each character with a span tag. We also need to deal with the spaces in the array (because we don't want the spaces to claim a color), so each span should have a class that declares whether it's a character or a space.
    characterArray.forEach((character) => {
      element.append(createSpan(character))
    })
  })
}
