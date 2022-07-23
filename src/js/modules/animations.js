import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { scrollAmount, arrayOfUnclickedItems } from './helpers'

gsap.registerPlugin(ScrollToPlugin)

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

// ****************** Accordion - Shrink and move on click of button ***************** //

// Accordion - shrink the buttons
export function shrinkAccordionButtons(element) {
  // The 'element' is the general accordion, so let's get all of the child items
  const buttons = element.querySelectorAll('.accordion__button')
  const t1 = gsap.timeline()

  t1.to(buttons, {
    fontSize: 24,
    padding: 16,
    stagger: 0.03,
    duration: 0.1,
  })

  return t1
}

// Accordion - move the window
export function moveTheWindow(element, clickedIndex) {
  // The 'element' is the general accordion, so let's get all of the child items
  const buttons = element.querySelectorAll('.accordion__button')
  // First let's move the clicked button to the top of the screen. To do this while maintaining the flow/order of the page, we need to:
  // Get the number of pixels between the clicked button and the top of the screen, subtract the height of the header from that number (because we want the top of the button to sit right under the header), and finally scroll the entire window to that number.
  const windowScrollAmount = scrollAmount(buttons[clickedIndex])

  const t1 = gsap.timeline()
  // Now that we know how far to scroll, let's do it:
  t1.to(window, {
    scrollTo: windowScrollAmount,
    duration: 0.5,
  })

  return t1
}

// Accordion - stack the accordion items
export function stackTheItems(element, clickedIndex) {
  // The 'element' is the general accordion, so let's get all of the child items
  const items = element.querySelectorAll('.accordion__item')
  const t1 = gsap.timeline()

  // Also, before we start animating, we need an array of all the items, excluding the clicked item, and the item beneath it. Since we want to push the clicked button to the top of the window, we don't want its margin-top to animate. Additionally, we don't want the margin-top of the next item to animate, because we don't want it to 'stack' on top of the clicked button
  const unclickedItems = arrayOfUnclickedItems(items, clickedIndex)

  t1.to(
    unclickedItems,
    {
      marginTop: '-32px',
      stagger: 0.03,
      duration: 0.3,
    },
    '<'
  )

  return t1
}

export function openThePanel(element, clickedIndex) {
  // The 'element' is the general accordion, so let's get all of the child items
  const panels = element.querySelectorAll('.panel')
  const t1 = gsap.timeline()

  // Now we can open the panel beneath the clicked button
  t1.to(panels[clickedIndex], {
    height: 'auto',
    duration: 1,
  })

  return t1
}

// Accordion - the Master Timeline
export function accordionOpen(element, clickedIndex) {
  const t1 = gsap.timeline({ paused: true })

  t1.add(moveTheWindow(element, clickedIndex))
  t1.add(shrinkAccordionButtons(element))
  t1.add(stackTheItems(element, clickedIndex), '<')
  t1.add(openThePanel(element, clickedIndex))

  return t1
}

// This is the all the separate timelines as one giant one. I don't think it's ideal because I need more granular control
// // Accordion - animate the individual accordion items so that they are smaller and stack on top of each other
// export function shrinkTheAccordion(element, clickedIndex) {
//   // The 'element' is the general accordion, so let's get all of the child items
//   const items = element.querySelectorAll('.accordion__item')
//   const buttons = element.querySelectorAll('.accordion__button')
//   const panels = element.querySelectorAll('.panel')
//   const t1 = gsap.timeline({ paused: true })

//   // First let's move the clicked button to the top of the screen. To do this while maintaining the flow/order of the page, we need to:
//   // Get the number of pixels between the clicked button and the top of the screen, subtract the height of the header from that number (because we want the top of the button to sit right under the header), and finally scroll the entire window to that number.
//   const windowScrollAmount = scrollAmount(buttons[clickedIndex])

//   // Also, before we start animating, we need an array of all the items, excluding the clicked item, and the item beneath it. Since we want to push the clicked button to the top of the window, we don't want its margin-top to animate. Additionally, we don't want the margin-top of the next item to animate, because we don't want it to 'stack' on top of the clicked button
//   const unclickedItems = arrayOfUnclickedItems(items, clickedIndex)

//   // But before we scroll, let's animate the button font-size and padding so they get "smaller"
//   t1.to(buttons, {
//     fontSize: 24,
//     padding: 16,
//     stagger: 0.03,
//     duration: 0.1,
//   })
//   // Now that we know how far to scroll, let's do it:
//   t1.to(window, {
//     scrollTo: windowScrollAmount,
//     duration: 0.5,
//   })
//   // Then we'll 'stack' all the items, EXCEPT for the one BELOW the one that was clicked
//   t1.to(
//     unclickedItems,
//     {
//       marginTop: '-32px',
//       stagger: 0.03,
//       duration: 0.3,
//     },
//     '<'
//   )
//   // Now we can open the panel beneath the clicked button
//   t1.to(panels[clickedIndex], {
//     height: '100%',
//     duration: 1,
//   })

//   return t1
// }
