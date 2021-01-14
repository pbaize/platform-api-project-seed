import { ColorPicker } from './InteropDemo.js';

window.addEventListener('DOMContentLoaded', async () => {

    customElements.define('color-picker', ColorPicker);

    function handleInteropChange(context) {
        console.log('received context ', context)
        const {type } = context;
        switch (type) {
            case 'fdc3.instrument':
                console.log('fdc3.instrument');
                console.log('context', context);
                document.getElementById('ticker').innerText = context.id.ticker
                break;
            case 'fdc3.country':
                console.log('fdc3.country');
                console.log('context', context);
                document.getElementById('country').innerText = context.id.ISOALPHA3
                break;

            default:
                console.log('non-supported context: ', type)
                break;
        }
    }

    fdc3.addContextListener(handleInteropChange);
});
