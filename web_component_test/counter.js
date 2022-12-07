class MyCounter extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"})
    }

    static get observedAttributes() {
        return ["count"]
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        if (prop === "count") {
            this.render()
            let btn = this.shadow.querySelector("#btn")
            btn.addEventListener("click", this.increment.bind(this))
        }
    }

    connectedCallback() {
        this.render()
        let btn = this.shadow.querySelector("#btn")
        btn.addEventListener("click", this.increment.bind(this))
    }

    get count() {
        return this.getAttribute("count")
    }

    set count(value) {
        this.setAttribute("count", value)
    }

    increment() {
        this.count++
    }

    render() {
        this.shadow.innerHTML = `
            <h1>Counter</h1>
            ${this.count}
            <button id="btn">Increment</button>
        `
    }
}

customElements.define("my-counter", MyCounter)