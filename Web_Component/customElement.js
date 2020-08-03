class CustomElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<h1>I am a custom element developed using Web Component.</h1>`;
    }
}

window.customElements.define('custom-element',CustomElement);