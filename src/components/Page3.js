import React from 'react';
import logo from '../logo.svg';

const getPageRoute = url => `${url.toLowerCase()}`
const Page3 = ({ onRouteChange, pageName="Page3", pages=[{ name: 'Page1' },{ name: 'Page2' }] }) => (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-link">{pageName}</h1>
        </header>
        {pages.map(({name})=><button key={name} onClick={()=>onRouteChange(getPageRoute(name))}>{name}</button>)}
    </div>
)

export default Page3
