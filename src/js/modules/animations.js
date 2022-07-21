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
