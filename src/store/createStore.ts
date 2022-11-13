type Listener<S> = (state: S) => void

export const createStore = <S>(reducer, initialState: S) => {
    const currentReducer = reducer
    let currentState = initialState
    const listeneres = new Map<Listener<S>, Listener<S>>()

    return {
        getState() {
            return currentState
        },
        dispatch(action) {
            currentState = currentReducer(currentState, action)
            listeneres.forEach((callback) => callback(currentState))

            return action
        },
        subscribe(newListener: Listener<S>) {
            listeneres.set(newListener, newListener)
            return () => {
                listeneres.delete(newListener)
            }
        },
    }
}
