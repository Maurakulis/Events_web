import { data } from './data.js'

const cardRender = () => {
  const eventCardsDiv = document.querySelector('#eventCards')

  for (const element of data) {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.setAttribute('src', element.image_src)

    const title = document.createElement('p')
    const titleText = element.title

    console.log(titleText.length)
    title.innerHTML = titleText

    const dateContainer = document.createElement('div')
    dateContainer.classList.add('date')
    const date = document.createElement('span')
    date.innerHTML = element.date
    dateContainer.appendChild(date)

    card.append(img, title, dateContainer)
    eventCardsDiv.append(card)
  }

}
cardRender()