// index.jsx
import m from 'mithril'
const root = document.getElementById('app')

if (module.hot) {
  module.hot.accept()
}

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

// Styles
import 'bulma/css/bulma.css'
import './normalize.css'
import './index.css'
import './styles.scss'

import App from './App.js'

m.mount(root, App)
