import { linkTheHoverEvent } from './helpers'

export default function linkingTheElements() {
  // *************** Linking the Switch Toggle input with the Ghost Switch Toggle input ************** //
  const defaultSwitchInput = document.querySelector('#default-switch input')
  const ghostSwitchInput = document.querySelector('#ghost-switch input')

  defaultSwitchInput.addEventListener('change', (e) => {
    if (defaultSwitchInput.checked == false) {
      ghostSwitchInput.checked = false
    } else {
      ghostSwitchInput.checked = true
    }
  })

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

  // // *************** Linking the Switch Inputs  ************** //
  // const defaultSwitchInputArray = document.querySelectorAll(
  //   '.default .switch__input'
  // )
  // const ghostSwitchInputArray = document.querySelectorAll(
  //   '.ghost .switch__input'
  // )

  // linkTheHoverEvent(
  //   defaultSwitchInputArray,
  //   ghostSwitchInputArray,
  //   'hover',
  //   null
  // )
}
