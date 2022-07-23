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

// Accordion - get the header height
export function theHeaderHeight() {
  return document.querySelector('.header').offsetHeight
}

// Accordion - scrolling the accordion item to the top of the page on click
export function moveToTop(element, amount) {
  const headerHeight = theHeaderHeight()
  console.log(headerHeight)
  console.log(`amount:${amount} - headerHeight:${headerHeight}`)
  const distance = (amount - headerHeight) * -1
  const t1 = gsap.timeline({ paused: true })

  t1.to(element, {
    y: distance,
    duration: 0.5,
    onStart: function (ele) {
      ele.setAttribute('style', `top: ${headerHeight}px`)
      ele.setAttribute('data-position', 'sticky')
    },
    onStartParams: [element],
  })

  return t1
}
