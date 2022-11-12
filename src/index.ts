import './style.css'
// @ts-ignore
import { Component } from './dom/Component'
import Icon from './icon.png'
import { store } from './store'

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

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })
