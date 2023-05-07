import {Component} from 'react'

import './index.css'

export default class Greetings extends Component {
  state = {
    activeButtonText: 'English',
  }

  changeActiveButtonText = buttonText => {
    this.setState({
      activeButtonText: buttonText,
    })
  }

  englishMethod = languageGreetingsList => (
    <div>
      <img
        className="image"
        alt={languageGreetingsList[0].imageAltText}
        src={languageGreetingsList[0].imageUrl}
      />
    </div>
  )

  tamilMethod = languageGreetingsList => (
    <div>
      <img
        className="image"
        alt={languageGreetingsList[1].imageAltText}
        src={languageGreetingsList[1].imageUrl}
      />
    </div>
  )

  teluguMethod = languageGreetingsList => (
    <div>
      <img
        className="image"
        alt={languageGreetingsList[2].imageAltText}
        src={languageGreetingsList[2].imageUrl}
      />
    </div>
  )

  switchMethod = languageGreetingsList => {
    const {activeButtonText} = this.state
    switch (activeButtonText) {
      case languageGreetingsList[0].buttonText:
        return this.englishMethod(languageGreetingsList)
      case languageGreetingsList[1].buttonText:
        return this.tamilMethod(languageGreetingsList)
      case languageGreetingsList[2].buttonText:
        return this.teluguMethod(languageGreetingsList)
      default:
        return null
    }
  }

  render() {
    const {languageGreetingsList} = this.props

    const {activeButtonText} = this.state

    console.log(activeButtonText)
    return (
      <div className="bg-container">
        <h1>Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(o => {
            const style =
              activeButtonText === o.buttonText ? 'additional-style' : ''

            return (
              <li key={o.id}>
                <button
                  onClick={() => {
                    this.changeActiveButtonText(o.buttonText)
                  }}
                  className={`button-style ${style}`}
                  type="button"
                >
                  {o.buttonText}
                </button>
              </li>
            )
          })}
        </ul>
        {this.switchMethod(languageGreetingsList)}
      </div>
    )
  }
}
