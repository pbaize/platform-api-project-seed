import { CONTAINER_ID } from './CONTAINER_ID.js';

window.addEventListener('DOMContentLoaded', () => {
    // fin.me.showDeveloperTools().then(() => console.log('Showing dev tools')).catch(err => console.error(err));

    // Before .50 AI version this may throw...
    fin.Platform.Layout.init({containerId: CONTAINER_ID});


});
