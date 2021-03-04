// Title: index.js (src)
// Version 0.1.0
// Date: 27-January 2021
// Developers: Roey Tsemah & Jacob Liss, P.E.

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SYNTH <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//              Design custom synthesizers in React. Powered by Three.js             //
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SYNTH <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

//>>>>> NPM PACKAGES <<<<<//
import React from 'react';
import ReactDOM from 'react-dom';

//>>>>> LOCAL IMPORTS <<<<<//
import * as serviceWorker from './serviceWorker';
import App from './components/App';

//>>>>> DOM RENDER <<<<<//
ReactDOM.render(
        <App />,
    document.getElementById('root')
);
serviceWorker.unregister();
