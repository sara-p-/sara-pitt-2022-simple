// Creating the <span> tags to envelope each character in an array of characters
export function createSpan(character) {
  const span = document.createElement('span')
  if (character !== ' ') {
    span.classList.add(`rainbow-letter`)
  }

  span.append(character)
  return span
}
