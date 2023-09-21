function addContact() {
    const contactSection = document.getElementById('section-list')

    const h3 = document.createElement('h3')
    h3.innerText = "Contato"
    
    const newUl = document.createElement('ul')
    newUl.name = 'section-ul'

    const newNameLi = document.createElement('li')
    newNameLi.name = 'li-from-lu-Name'
    newNameLi.innerText = 'Nome :'
    const inputNameLi = document.createElement('input')
    inputNameLi.type = 'text'
    inputNameLi.name = 'fullName'
    newNameLi.appendChild(inputNameLi)
    newUl.appendChild(newNameLi)

    const newContactLi = document.createElement('li')
    newContactLi.name = 'li-from-lu-Contact'
    newContactLi.innerText = 'Telefone :'
    const inputContactLi = document.createElement('input')
    inputContactLi.type = 'text'
    inputContactLi.name = 'fullName'
    newContactLi.appendChild(inputContactLi)
    newUl.appendChild(newContactLi)

    const newAdressLi = document.createElement('li')
    newAdressLi.name = 'li-from-lu-Adress'
    newAdressLi.innerText = 'Endereço :'
    const inputAdressLi = document.createElement('input')
    inputAdressLi.type = 'text'
    inputAdressLi.name = 'fullName'
    newAdressLi.appendChild(inputAdressLi)
    newUl.appendChild(newAdressLi)
    
    contactSection.append(h3, newUl)
}

function removeContact() {
    const contactSection = document.getElementById('section-list')

    const title = document.getElementsByTagName('h3')
    const contact = document.getElementsByTagName('ul')

    contactSection.removeChild(title[title.length - 1])
    contactSection.removeChild(contact[contact.length - 1])
}