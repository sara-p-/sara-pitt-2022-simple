import Data from '../json/data.json'
import { setColors, insertSpans } from './helpers'

export function rainbowLetters() {
  // Alright, let's grab all of the elements that have the relavent class, and stuff them into an array
  const elementArray = document.querySelectorAll('.letters')

  // Now we need to do a few things with each element in the array:
  // 1. Grab all of the characters in the element
  // 2. Create a mini-array from all of the characters
  // 3. Empty the original innerText of the Element (because we will be replacing it with each character wrapped in its own span)
  // 4. Loop through the characterArray, and replace each character with a span tag. We also need to deal with the spaces in the array (because we don't want the spaces to claim a color), so each span should have a class that declares whether it's a character or a space.
  // All of these things are done in the following function (found in helpers.js)
  insertSpans(elementArray)

  // Just to recap, we have just replaced the innerText of all the elements (with the class 'rainbow-letters') with a span around each character. The spans that surround characters with letters/punctuation get a class called 'rainbow-letter'.
  // Now we can create a new array of all of every span.rainbow-letter, and assign them a color class!
  const spanArray = document.querySelectorAll('span.letter')

  // Oh shit, here we go. Last part! Let's loop through our array of spans, and add the color classes with this nifty % operator (which I only mildy understand. because math.)
  setColors(spanArray, 'color--', 'colorsNuetral')
}
