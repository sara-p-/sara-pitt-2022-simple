import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin.js'

gsap.registerPlugin(MorphSVGPlugin)

export default function maskMove() {
  const body = document.querySelector('body')
  const target = document.querySelector('.mask-target')

  // Getting the SVG mask to "follow" the cursor, by programatically updating the mask-position with the cursor coordinates
  body.addEventListener('mousemove', (e) => {
    target.setAttribute(
      'style',
      `-webkit-mask-position: ${e.pageX - 150}px ${e.pageY - 150}px`
    )
  })

  body.addEventListener('wheel', (e) => {
    target.setAttribute(
      'style',
      `-webkit-mask-position: ${e.pageX - 150}px ${e.pageY - 150}px`
    )
  })

  // // Morphing the SVG Mask
  // const path0 = document.querySelector('#path--0')
  // const path1 = document.querySelector('#path--1')
  // const path2 = document.querySelector('#path--2')

  // console.log(path0)

  // const t1 = gsap.timeline({ repeat: -1, yoyo: true })

  // t1.to(path0, {
  //   morphSVG: path1,
  //   duration: 1,
  // })
  // t1.to(path0, {
  //   morphSVG: path2,
  //   duration: 1,
  // })
}
