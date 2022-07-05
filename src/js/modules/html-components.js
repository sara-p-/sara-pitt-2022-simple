// Creating the <span> tags to envelope each character in an array of characters
export function createSpan(character, classNameArray) {
  const span = document.createElement('span')
  if (character !== ' ') {
    classNameArray.forEach((className) => span.classList.add(className))
  }

  span.append(character)
  return span
}
