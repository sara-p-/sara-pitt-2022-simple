import Data from '../json/data.json'
import { createSpan } from './html-components'

// Loop through the given array and add or remove the rainbow color classes
export function setColorClasses(elementArray, className) {
  const colorArray = Data['colorsRainbow']
  for (
    let elementIndex = 0;
    elementIndex < elementArray.length;
    elementIndex++
  ) {
    let count = elementIndex % colorArray.length
    const element = elementArray[elementIndex]
    element.classList.add(`${className}${colorArray[count]}`)
  }
}

// Loop through the given array of elements, and replace each character with a span element containing the character and the specified class
export function insertSpans(elementArray, classNameArray) {
  elementArray.forEach((element) => {
    // 1. Grab all of the characters in the element
    let theInnerText = element.innerText
    // 1. Create a mini-array from all of the characters
    let characterArray = theInnerText.split('')
    // 2. Empty the original innerText of the Element (because we will be replacing it with each character wrapped in its own span)
    element.innerText = ''
    // 3. Loop through the characterArray, and replace each character with a span tag. We also need to deal with the spaces in the array (because we don't want the spaces to claim a color), so each span should have a class that declares whether it's a character or a space.
    characterArray.forEach((character) => {
      element.append(createSpan(character, classNameArray))
    })
  })
}

// Linking the default item/link mouse events to the ghost item/link
export function linkTheHoverEvent(
  defaultArray,
  ghostArray,
  className,
  targetItem
) {
  defaultArray.forEach((item, index) => {
    let ghostItem = ghostArray[index]
    let ghostLink
    if (targetItem !== null) {
      ghostLink = ghostItem.querySelector(targetItem)
    } else {
      ghostLink = ghostItem
    }
    item.addEventListener('mouseenter', (e) => {
      ghostLink.classList.add(className)
    })
    item.addEventListener('mouseleave', (e) => {
      ghostLink.classList.remove(className)
    })
  })
}

// Getting the computed style webkitMaskSize of the mask, and dividing it by 2
export function getTheCenter(target) {
  const targetStyle = getComputedStyle(target)
  const targetSize = parseFloat(targetStyle.webkitMaskSize)

  const center = targetSize / 2

  return center
}

// Accordion - loop through the array and set all but the current item attribute to the desired state
export function setAriaClosed(array, i, attr, val) {
  array.forEach((item, index) => {
    if (index !== i) {
      item.setAttribute(attr, val)
    }
  })
}

// Accordion - loop through the array and set all but the current item attribute to the desired state
export function setTheAttributes(array, attr, val) {
  array.forEach((item, index) => {
    item.setAttribute(attr, val)
  })
}

// Accordion - figure out how far to scroll the window to get the passed element to stop right under the header
export function scrollAmount(element) {
  const windowScrollAmount = window.pageYOffset
  const pixelsToTop = element.getBoundingClientRect().top
  const headerHeight = document.querySelector('.header').offsetHeight
  const distance = pixelsToTop + windowScrollAmount - headerHeight
  return distance
}

// Accordion - return an array of all the items EXCEPT for the clicked item, and the next item after it
export function arrayOfUnclickedItems(array, clickedItemIndex) {
  const newArray = [...array].filter((item, index) => {
    if (index !== clickedItemIndex && index !== clickedItemIndex + 1) {
      return item
    }
  })
  return newArray
}

// Accordion - function that grabs all the accordion items BELOW the current item, grabs the height (minus the top-margin), and returns the number of pixels that should be subtracted from the total height of the page (to get the panel to be full screen-ish)
export function heightOfOtherElements(currentItem) {
  // First let's grab the header height and let's throw all of the accordion elements into an array
  const headerHeight = document.querySelector('.header').offsetHeight
  const allAccordionItems = document.querySelectorAll('.accordion__item')

  const allItemHeights = [...allAccordionItems].map((item, index) => {
    // const itemStyle = item.style.marginTop
    const itemMargin = item.style.marginTop.replace(/\D/g, '')
    console.log(itemMargin)
    // return item.offsetHeight - Math.abs(itemStyle.marginTop)
  })

  // console.log(allItemHeights)

  // Now we need a small function to grab the height and margin of each accordion and put them in an array

  // Then let's split that array into 2: one with all the items ABOVE the current item, and one with those BELOW.

  // Next, for each array, get the sum of the heights (minus the top margin)

  // Panel Height (100vh - ?) = Header + Top + Bottom  + Current Item height

  // Top array + header height = height the window needs to scroll to AND the 'top' property for the current item
}
