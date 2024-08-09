import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App.js';
import {BrowserRouter} from 'react-router-dom';

import posthog from 'posthog-js';
import {PostHogProvider} from 'posthog-js/react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



posthog.init('phc_gtJOLCKhcpP8ecxTwkaEDolfSTVPLfFyMQ1AnaxH7H',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

root.render(
    
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>

    </PostHogProvider>
  </React.StrictMode>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
