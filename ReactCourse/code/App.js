import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement('div', {
    'id': 'heading'
},
 React.createElement('h1', {}, 'h1 inside div'))
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(header)