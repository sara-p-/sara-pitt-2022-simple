import gsap from 'gsap'

// Social Menu Open/Close Animation (used in './social-menu.js')
export function toggleSocialMenu(element) {
  const t1 = gsap.timeline({ paused: true })

  t1.fromTo(
    element,
    {
      rotate: '-180deg',
    },
    {
      rotate: '0deg',
      duration: 1,
      onReverseComplete: function (ele) {
        ele.setAttribute('aria-hidden', 'true')
      },
      onReverseCompleteParams: [element],
    }
  )

  return t1
}

// Nav Menu - Dark/Light Button rotating animation
export function toggleDarkLightButton(element) {
  const t1 = gsap.timeline({ paused: true })

  t1.to(element, {
    rotate: '180deg',
    duration: 0.3,
  })

  return t1
}

// Accordion - scroll the window to position the element right under the header
export function scrollTheWindow(element) {
  const windowScrollAmount = window.pageYOffset
  const pixelsToTop = element.getBoundingClientRect().top
  const headerHeight = document.querySelector('.header').offsetHeight
  const distance = pixelsToTop + windowScrollAmount - headerHeight
  window.scroll({ top: distance, left: 0 })
}

// Accordion - scrolling the accordion item to the top of the page on click
// export function toggleAccordionItem(element) {
//   const panel = element.querySelector('.accordion__panel')
//   const button = element.querySelector('.accordion__button')
//   const headerHeight = document.querySelector('.header').offsetHeight
//   const height =
//   const t1 = gsap.timeline({ paused: true })

//   t1.to(panel, {
//     height: 'auto',
//     duration: 1,
//     onStart: scrollTheWindow(element),
//     onStartParams: [element],
//   })
// }
