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

  defaultListItemArray.forEach((defaultItem, defaultIndex) => {
    let ghostItem = ghostListItemArray[defaultIndex]
    let ghostLink = ghostItem.querySelector('.button--list-link')
    defaultItem.addEventListener('mouseenter', (e) => {
      ghostLink.classList.add('hover')
    })
    defaultItem.addEventListener('mouseleave', (e) => {
      ghostLink.classList.remove('hover')
    })
  })
}
