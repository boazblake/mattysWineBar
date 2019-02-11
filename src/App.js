import m from 'mithril'
import Home from './pages/Home.js'
import Wines from './pages/Wines.js'
import Layout from './Layout.js'
import _wines from './pages/data.js'

const routes = {
  '/home': {
    onmatch: () => {},
    render: () => m(Layout, m(Home)),
  },
  '/wines': {
    onmatch: () => {},
    render: () => m(Layout, m(Wines, { model: _wines })),
  },
}

export const App = {
  oncreate: ({ dom }) => m.route(dom, '/home', routes),
  view: ({ children }) => {
    return m('.', [ m('.', [ children ]) ])
  },
}

export default App
