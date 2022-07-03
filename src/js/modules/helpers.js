import Data from '../json/data.json'
import { createSpan } from './html-components'

// Loop through the given array of elements, and assign them specific color classes
export function setColors(elementArray, colorType, className) {
  const colorArray = Data[colorType]

  if (colorType == 'colorsNeutral') {
    elementArray.forEach((element, index) => {
      element.classList = ''
      element.classList.add('letter', `${className}neutral`)
    })
  } else {
    for (
      let elementIndex = 0;
      elementIndex < elementArray.length;
      elementIndex++
    ) {
      let count = elementIndex % colorArray.length
      const element = elementArray[elementIndex]
      element.classList.remove(`${className}neutral`)
      element.classList.add(`${className}${colorArray[count]}`)
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

// // Loop through the given array of elements, split each character into its own span element, assign a color class to the span
// export function rainbowLetters() {
//   // Alright, let's grab all of the elements that have the relavent class, and stuff them into an array
//   const elementArray = document.querySelectorAll('.rainbow-letters')

//   insertSpans(elementArray)

//   // Just to recap, we have just replaced the innerText of all the elements (with the class 'rainbow-letters') with a span around each character. The spans that surround characters with letters/punctuation get a class called 'rainbow-letter'.
//   // Now we can create a new array of all of every span.rainbow-letter, and assign them a color class!
//   const spanArray = document.querySelectorAll('span.rainbow-letter')

//   // Oh shit, here we go. Last part! Let's loop through our array of spans, and add the color classes with this nifty % operator (which I only mildy understand. because math.)
//   setColors(spanArray, 'color--')
// }
