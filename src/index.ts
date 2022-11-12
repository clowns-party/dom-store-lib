import './style.css'
// @ts-ignore
import Icon from './icon.png'
import { Component } from './dom/Component'

type Props = {
    text: string
}

const App = new Component<Props>(
    'div',
    (props) => `<div class="app">${props?.text}</div>`,
    {
        text: 'hello app!',
    },
    () => {}
)

const image = new Component('img')
image.element.src = Icon

App.element.appendChild(image.element)

document.body.append(App.element)
