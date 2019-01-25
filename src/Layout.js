import m from 'mithril'
import Heading from './components/Heading.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'

const Layout = {
  view: ({ children }) => [ m(Heading), m(NavBar), children, m(Footer) ],
}

export default Layout
