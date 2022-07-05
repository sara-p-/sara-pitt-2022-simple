import { getTheCenter } from './helpers'

export default function maskMove() {
  const body = document.querySelector('body')
  const target = document.querySelector('.mask-target')

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
}
