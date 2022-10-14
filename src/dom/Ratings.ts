import { Service } from './../http/Service'

export default class Ratings {
  static render (hash: string): Element {
    const mainDiv = document.createElement('div')
    mainDiv.style.display = 'flex'
    mainDiv.style.marginBottom = '1em'
    mainDiv.style.maxWidth = '400px'
    mainDiv.style.height = '36px'
    mainDiv.style.lineHeight = '36px'
    mainDiv.classList.add(hash)

    // SensCritique
    const senscritiqueElement = document.createElement('div')
    senscritiqueElement.style.padding = '0 .5em 0 .5em'
    senscritiqueElement.style.position = 'relative'
    senscritiqueElement.classList.add(`${Service.SENSCRITIQUE}_${hash}`)
    mainDiv.appendChild(senscritiqueElement)

    return mainDiv
  }
}
