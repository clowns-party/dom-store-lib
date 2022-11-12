import { createStore } from './store'
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

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

let store = createStore(counter)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })




