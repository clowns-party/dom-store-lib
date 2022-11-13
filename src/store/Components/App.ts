import { store } from '..'
import { Component } from '../../dom/Component'
import Icon from '../../icon.png'

type Props = {
    text: string
}

// Main

const renderComponent = (state) => {
    const AppComponent = new Component<Props>(
        'div',
        (props) => `<div class="app">${props?.text}
        </div>`,
        {
            text: `hello is counter: ${state}`,
        },
        () => {}
    )
    // Image
    const ImageComponent = new Component('img')
    ImageComponent.element.src = Icon
    AppComponent.element.appendChild(ImageComponent.element)
    // Button Increment
    const ButtonIncComponent = new Component('button')
    ButtonIncComponent.element.addEventListener('click', () => {
        store.dispatch({ type: 'INCREMENT' })
    })
    ButtonIncComponent.element.innerText = 'INCREMENT'
    // Button Decrement
    const ButtonDecrComponent = new Component('button')
    ButtonDecrComponent.element.addEventListener('click', () => {
        store.dispatch({ type: 'DECREMENT' })
    })
    ButtonDecrComponent.element.innerText = 'DECREMENT'

    AppComponent.element.appendChild(ButtonIncComponent.element)
    AppComponent.element.appendChild(ButtonDecrComponent.element)
    return AppComponent
}

const App = () => {
    const state = store.getState()
    return renderComponent(state)
}

const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    console.log('update work in app module')
})

export { App }
