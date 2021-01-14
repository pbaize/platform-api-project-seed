import { html, render } from 'https://unpkg.com/lit-html@1.0.0/lit-html.js';

export class ColorPicker extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render = () => {
        const content = html`
        <fieldset>
            <p>
                TICKER
            </p>
            <p id="ticker">
                I am context-sensitive
            </p>
            <p>
                COUNTRY
            </p>
            <p id="country">
                I am context-sensitive
            </p>
            <form @submit=${this.broadcastInstrumentContext}>
                <input id="ticker-input" type="text" placeholder="Enter ticker" autofocus>
                <button action="submit">Broadcast Intrument Context</button>
            </form>
            <form @submit=${this.broadcastCountryContext}>
                <input id="country-input" type="text" placeholder="Enter country code" autofocus>
                <button action="submit">Broadcast Country Context</button>
            </form>
            <button @click=${() => fin.me.showDeveloperTools()}>
                Show dev tools
            </button>
        </fieldset>`;
        return render(content, this);
    }

   broadcastInstrumentContext = async (event) => {
        event.preventDefault();
       const ticker = document.getElementById('ticker-input').value;
        fdc3.broadcast( {type: 'fdc3.instrument',id: {ticker}})
    }
   broadcastCountryContext = async (event) => {
        event.preventDefault();
       const ISOALPHA3 = document.getElementById('country-input').value;
        fdc3.broadcast( {type: 'fdc3.country',id: {ISOALPHA3}})
    }
}

