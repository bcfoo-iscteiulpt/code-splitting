import React, { useState, useCallback } from 'react';
import './App.css';
import Page1 from './components/Page1';
import AsyncComponent from './components/AsyncComponent';

function App() {
  const [route, setRoute] = useState('page1')
  const onRouteChange = useCallback(newRoute => setRoute(newRoute), [])
  const path2 = useCallback(()=>import('./components/Page2'), [])
  const path3 = useCallback(()=>import('./components/Page3'), [])
  const pagesConfig = {onRouteChange, fallback: <div>Loading...</div>}
  switch (route) {
    case 'page1':
      return <Page1 {...pagesConfig} />
    case 'page2':
      return AsyncComponent({
        pathCall: path2,
        ...pagesConfig
      })
    case 'page3':
      return AsyncComponent({
        pathCall: path3,
        ...pagesConfig
      })
    default:
      return null
  }
}

export default App;
