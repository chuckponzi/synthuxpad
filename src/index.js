// index.js (src)

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
