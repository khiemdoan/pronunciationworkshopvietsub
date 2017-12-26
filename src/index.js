import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './containers/Home'
import './styles.css'
import registerServiceWorker from './registerServiceWorker'

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
renderMethod(<Home />, document.getElementById('root'))
registerServiceWorker();
