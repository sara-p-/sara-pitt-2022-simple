// Creating the <span> tags to envelope each character in an array of characters
export function createSpan(character, className) {
  const span = document.createElement('span')
  if (character !== ' ') {
    span.classList.add(className)
  }

  span.append(character)
  return span
}
