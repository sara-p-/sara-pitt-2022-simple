import Data from '../json/data.json'
import { setLetterColors } from './helpers'
import { createSpan } from './html-components'

export default function rainbowLetters() {
  // Alright, let's set up a variable to hold all of the color classes stored in the JSON file
  const letterColors = Data['letter-colors']

  // Now that we have our color classes, let's grab all of the elements that have the relavent class, and stuff them into an array
  const elementArray = document.querySelectorAll('.rainbow-letters')

  // Now we need to do a few things with each element in the array:
  // For each Element:

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

  // Just to recap, we have just replaced the innerText of all the elements (with the class 'rainbow-letters') with a span around each character. The spans that surround characters with letters/punctuation get a class called 'rainbow-letter'.
  // Now we can create a new array of all of every span.rainbow-letter, and assign them a color class!
  const spanArray = document.querySelectorAll('span.rainbow-letter')

  // Oh shit, here we go. Last part! Let's loop through our array of spans, and add the color classes with this nifty % operator (which I only mildy understand. because math.)
  setLetterColors(spanArray, letterColors)

  // // Okay, we have our first element. Now we need to grab the innerText
  // const theInnerText = element.innerText

  // // Now lets take our innerText string and turn it into an array of characters
  // const characterArray = theInnerText.split('')

  // // And let's empty the innerText of the original element (because we will be filling that element with spans in a second)
  // element.innerText = ''

  // // We now need to
  // characterArray.forEach((character) => {
  //   element.append(createSpan(character))
  // })

  // // Alright, Progress! Now we have our spans with classes that seperate the letters from the spaces.
  // // Lets grab those spans (with letters)
  // const spanArray = document.querySelectorAll('span.letter')

  // // Now we can loop through that array, and add the color classes with this nifty % operator (which I only mildy understand. because math.)
  // setLetterColors(spanArray, letterColors)
}
