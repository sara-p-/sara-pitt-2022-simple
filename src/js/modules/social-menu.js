import { toggleSocialMenu } from './animations'

export default function socialMenu() {
  // Alright, let's grab our elements
  const socialButtonOpen = document.querySelector('#social-button')
  const socialButtonClose = document.querySelector('#social-button-close')
  const socialNav = document.querySelector('.nav--social')

  console.log(socialButtonOpen)

  // Now let's work on changing the data-attributes of the relevant elements on click
  socialButtonOpen.addEventListener('click', (e) => {
    let expandedState = e.target.getAttribute('aria-expanded')

    if (expandedState == 'false') {
      e.target.setAttribute('aria-expanded', 'true')
      socialNav.setAttribute('aria-hidden', 'false')
      toggleSocialMenu(socialNav).play()
    } else {
      e.target.setAttribute('aria-expanded', 'false')
      // socialNav.setAttribute('aria-hidden', 'true') // I've moved this function inside the toggleSocialMenu function as a callback, so that the menu will still display until the animation is completed
      toggleSocialMenu(socialNav).reverse(0)
    }
  })
}
