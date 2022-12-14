class QuoteBox extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({mode: "open"})
    }

    static get observedAttributes() {
        return ["author", "quote"]
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        if (prop === "author" || prop === "quote") {
            this.render()
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                div {
                    width: 250px;
                    height: 100px;
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    margin: 10px;
                    background: lightblue;
                }
            </style>
            
            <div>
                <h3>${this.author}</h3>
                <p>${this.quote}</p>
            </div>
        `
    }

    get author() {
        return this.getAttribute("author")
    }

    set author(author) {
        this.setAttribute("author", author)
    }

    get quote() {
        return this.getAttribute("quote")
    }

    set quote(quote) {
        this.setAttribute("quote", quote)
    }

}

window.customElements.define('quote-box', QuoteBox)