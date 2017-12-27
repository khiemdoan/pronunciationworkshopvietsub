import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import { Home } from './containers/Home'


const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
renderMethod(<Home />, document.getElementById('root'))
registerServiceWorker();
