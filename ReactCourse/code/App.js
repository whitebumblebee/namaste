import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1',
    {id: 'heading'},
    'Shishir is here from React create Element'
)
const jsxHeading = <h1 id='heading'>Shishir is here from React create Element</h1>
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(jsxHeading)