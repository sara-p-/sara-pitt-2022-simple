import gsap from 'gsap'
import { insertSpans } from './helpers'

export default function hoverAnimations() {
  // *************** Jumping Animation *************** //
  const defaultContactMeArray = document.querySelectorAll(
    '.default .animation--text-bounce'
  )
  const ghostContactMeArray = document.querySelectorAll(
    '.ghost .animation--text-bounce'
  )

  insertSpans(defaultContactMeArray, [
    'bounce-letter',
    'bounce-letter--default',
  ])
  insertSpans(ghostContactMeArray, ['bounce-letter', 'bounce-letter--ghost'])

  defaultContactMeArray.forEach((link, index) => {
    const ghostCharacters =
      ghostContactMeArray[index].querySelectorAll('.bounce-letter')
    const defaultCharacters = link.querySelectorAll('.bounce-letter')
    const bounceTimeline = gsap.timeline({ paused: true })

    bounceTimeline.to(ghostCharacters, {
      y: '-10%',
      duration: 0.2,
      stagger: {
        repeat: 1,
        yoyo: true,
        each: 0.05,
      },
    })
    bounceTimeline.to(
      defaultCharacters,
      {
        y: '-10%',
        duration: 0.2,
        stagger: {
          repeat: 1,
          yoyo: true,
          each: 0.05,
        },
      },
      '<'
    )

    link.addEventListener('mouseenter', (e) => {
      bounceTimeline.restart()
    })
    // link.addEventListener('mouseleave', (e) => {
    //   bounceTimeline.pause()
    // })
  })
}
