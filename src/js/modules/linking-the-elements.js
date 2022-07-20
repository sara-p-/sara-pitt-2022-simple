import { linkTheHoverEvent } from './helpers'

export default function linkingTheElements() {
  // *************** Linking the Switch Toggle input with the Ghost Switch Toggle input ************** //
  // const defaultHeaderSwitchInput = document.querySelector(
  //   '#default-header-switch input'
  // )
  // const ghostHeaderSwitchInput = document.querySelector(
  //   '#ghost-header-switch input'
  // )
  // const defaultFooterSwitchInput = document.querySelector(
  //   '#default-footer-switch input'
  // )
  // const ghostFooterSwitchInput = document.querySelector(
  //   '#ghost-footer-switch input'
  // )

  // defaultHeaderSwitchInput.addEventListener('change', (e) => {
  //   if (defaultHeaderSwitchInput.checked == false) {
  //     ghostHeaderSwitchInput.checked = false
  //     ghostFooterSwitchInput.checked = false
  //     defaultFooterSwitchInput.checked = false
  //   } else {
  //     ghostHeaderSwitchInput.checked = true
  //     ghostFooterSwitchInput.checked = true
  //     defaultFooterSwitchInput.checked = true
  //   }
  // })
  // defaultFooterSwitchInput.addEventListener('change', (e) => {
  //   if (defaultFooterSwitchInput.checked == false) {
  //     ghostFooterSwitchInput.checked = false
  //     ghostHeaderSwitchInput.checked = false
  //     defaultHeaderSwitchInput.checked = false
  //   } else {
  //     ghostFooterSwitchInput.checked = true
  //     ghostHeaderSwitchInput.checked = true
  //     defaultHeaderSwitchInput.checked = true
  //   }
  // })

  // *************** Linking the List Item Links with the Ghost List Item Links  ************** //
  const defaultListItemArray = document.querySelectorAll('.default .list__link')
  const ghostListItemArray = document.querySelectorAll('.ghost .list__item')

  linkTheHoverEvent(
    defaultListItemArray,
    ghostListItemArray,
    'hover',
    '.button--list-link'
  )

  // *************** Linking the List Item Links with the Ghost List Item Links  ************** //
  const defaultNavLinkArray = document.querySelectorAll('.default .nav__link')
  const ghostNavLinkArray = document.querySelectorAll('.ghost .nav__link')

  linkTheHoverEvent(defaultNavLinkArray, ghostNavLinkArray, 'hover', null)

  // *************** Linking the Contact Me Link with the Ghost Contact Me Link  ************** //
  const defaultBouncingLinkArray = document.querySelectorAll(
    '.default .animation--text-bounce'
  )
  const ghostBouncingLinkArray = document.querySelectorAll(
    '.ghost .animation--text-bounce'
  )

  linkTheHoverEvent(
    defaultBouncingLinkArray,
    ghostBouncingLinkArray,
    'hover',
    null
  )
}
