// Loop through the given links, and assign them a background color class
export function setHoverColors(linkArray, colorArray) {
  for (let linkIndex = 0; linkIndex < linkArray.length; linkIndex++) {
    let count = linkIndex % colorArray.length
    const element = linkArray[linkIndex]
    element.classList.add(`hover--${colorArray[count]}`)
  }
}

// Loop through the given letters, and assign them a color class
export function setLetterColors(letterArray, colorArray) {
  for (let letterIndex = 0; letterIndex < letterArray.length; letterIndex++) {
    let count = letterIndex % colorArray.length
    const element = letterArray[letterIndex]
    element.classList.add(`color--${colorArray[count]}`)
  }
}
