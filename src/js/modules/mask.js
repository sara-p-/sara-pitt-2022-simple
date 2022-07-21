import { getTheCenter } from './helpers'

export default function maskMove() {
  const body = document.querySelector('body')
  const target = document.querySelector('.mask-target')
  const button = document.querySelector('#spot-on-off-button')

  // Getting the SVG mask to "follow" the cursor, by programatically updating the mask-position with the cursor coordinates
  body.addEventListener('mousemove', (e) => {
    const half = getTheCenter(target)
    target.setAttribute(
      'style',
      `-webkit-mask-position: ${e.pageX - half}px ${e.pageY - half}px`
    )
  })

  body.addEventListener('wheel', (e) => {
    const half = getTheCenter(target)
    target.setAttribute(
      'style',
      `-webkit-mask-position: ${e.pageX - half}px ${e.pageY - half}px`
    )
  })

  button.addEventListener('click', (e) => {
    const maskActive = target.dataset.active

    if (maskActive == 'true') {
      target.setAttribute('data-active', 'false')
      button.classList.replace('icon--circle-minus', 'icon--circle-plus')
    } else {
      target.setAttribute('data-active', 'true')
      button.classList.replace('icon--circle-plus', 'icon--circle-minus')
    }
  })
}
