import React, { useState } from 'react';
import {useApplication, eventType, useListenerEffect} from '@ringcentral/web-apps-host-react';

function AngularApp() {
  const {error, Component, node, loading} = useApplication({
    id: '5', 
    
    type: 'script',
    
    url: 'http://localhost:3000/Main.js',
           
});

// Messages
const [setMessages] = useState([]);
const onMessage = event => setMessages(messages => [...messages, event.detail]);
useListenerEffect(node, eventType.message, onMessage);

// Popups
const [setPopup] = useState(false);
const onPopup = event => setPopup(popup => (popup !== event.detail ? event.detail : popup));
useListenerEffect(node, eventType.popup, onPopup);

if (error) return <div>App cannot be rendered: {error.toString()}</div>;
  return (
      <div>
        {loading && <div>App is mounting</div>}
        <Component/>
      </div>
    );
}

export default AngularApp;
