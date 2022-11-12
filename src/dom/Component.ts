export class Component<P, K extends keyof HTMLElementTagNameMap = 'div'> {
    public element: HTMLElementTagNameMap[K]

    constructor(
        private readonly type: K,
        content?: (props?: P) => string,
        private readonly props?: P,
        private readonly onMount?: () => void
    ) {
        this.componentDidMount()
        this.render(content)
    }

    render(func?: (props?: P) => string) {
        const element = document.createElement(this.type)
        element.innerHTML = func?.(this.props) || ''
        this.element = element
    }

    private componentDidMount() {
        this.onMount?.()
    }
}
