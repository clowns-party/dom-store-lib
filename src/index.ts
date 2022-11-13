import './style.css'
// @ts-ignore
import { DOM } from './dom/DOM'
import { store } from './store'
import { App } from './store/Components/App'

const dom = new DOM()
dom.render(App().element)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
    console.log('update work in main module')
    dom.render(App().element)
})
