import { ColorPicker } from './InteropDemo.js';

window.addEventListener('DOMContentLoaded', async () => {

    customElements.define('color-picker', ColorPicker);
    function handleCountryChange(context) {
        console.log('fdc3.country');
        console.log('context', context);
        document.getElementById('country').innerText = context.id.ISOALPHA3;
    }

    function handleInstrumentChange(context) {
        console.log('fdc3.instrument');
        console.log('context', context);
        document.getElementById('ticker').innerText = context.id.ticker;
    }


    fdc3.addContextListener('fdc3.instrument', handleInstrumentChange);
    fdc3.addContextListener('fdc3.country', handleCountryChange);
});

