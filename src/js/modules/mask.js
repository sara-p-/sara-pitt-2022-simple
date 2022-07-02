export default function maskMove() {
  const body = document.querySelector('body')
  const target = document.querySelector('.mask-target')

  // console.log(target.style)

  body.addEventListener('mousemove', (e) => {
    target.setAttribute(
      'style',
      `-webkit-mask-position: ${e.pageX - 100}px ${e.pageY - 100}px`
    )
  })
}
