export class DOM {
    constructor() {}
    render(node: Node) {
        document.body.innerHTML = ''
        document.body.append(node)
    }
}
