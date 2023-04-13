import { data } from './data.js'

const cardRender = () => {
  const eventCardsDiv = document.querySelector('#eventCards')

  for (const element of data) {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.setAttribute('src', element.image_src)

    const title = document.createElement('p')
    // const titleText = document.createTextNode(element.title)
    title.innerHTML = element.title
    // title.appendChild(titleText)

    card.append(img, title)
    eventCardsDiv.append(card)
  }

}
cardRender()