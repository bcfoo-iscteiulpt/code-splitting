import React, { useState } from 'react';
import './App.css';
import Page1 from './components/Page1';

function App() {
  const [route, setRoute] = useState('page1')
  const [Component, setComponent] = useState()
  const handlePage = (p, r) => {
    setComponent(p)
    setRoute(r)
  }
  const onRouteChange = newRoute => {
    if (newRoute === 'page1') {
      setRoute(newRoute)
    } else if (newRoute === 'page2') {
      import('./components/Page2').then(Page2 => handlePage(Page2, newRoute))
    } else if (newRoute === 'page3') {
      import('./components/Page3').then(Page3 => handlePage(Page3, newRoute))
    }
  }
  const pagesConfig = {onRouteChange}
  switch (route) {
    case 'page1':
      return <Page1 {...pagesConfig} />
    default:
      return <Component.default {...pagesConfig} />;
  }
}

export default App;
