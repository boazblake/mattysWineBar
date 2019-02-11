import m from 'mithril'
import logo from '../assets/logo.png'

const NavState = { active: false }

const NavBar = {
  view: () =>
    m('.level', { role: 'navigation', 'aria-label': 'main navigation' }, [
      m(
        '.level-left',
        m(
          'a.level-item',
          { style: { display: 'inline-block' }, oncreate: m.route.link, href: '/home' },
          m('img.img', {
            src: logo,
            style: {
              maxWidth: '100px',
            },
          })
        )
      ),
      m(`.level-right ${NavState.active ? 'is-active' : ''}`, [
        m('a.navbar-item', { oncreate: m.route.link, href: '/wines' }, 'Wines'),
        m('a.navbar-item', 'Products'),
        m('a.navbar-item', 'About'),
        m('a.navbar-item', 'Contact'),
        m('.navbar-item has-dropdown is-hoverable', [
          m('a.navbar-link', 'are'),
          m('.navbar-dropdown', [ m('a.navbar-item', 'stuff') ]),
        ]),
        m(
          '.navbar-end',
          m(
            '.navbar-item',
            m('.buttons', [
              m('a.button is-primary', m('strong', 'Sign Up')),
              m('a.button is-light', m('strong', 'Login')),
            ])
          )
        ),
      ]),
    ]),
}

export default NavBar
