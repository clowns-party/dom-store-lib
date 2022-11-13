import { createStore } from './createStore'
import { counterReducer } from './reducers/counter.reducer'

export const store = createStore<Number>(counterReducer, 0)
