import m from 'mithril'

const NavBar = {
	view: () =>
		m('nav.navbar', { role: 'navigation', 'aria-label': 'main navigation' }, [
			m(
				'.navbar-brand',
				m(
					'a.navbar-item',
					{ oncreate: m.route.link, href: '/home' },
					m('img.img', {
						src: 'https://images.pexels.com/photos/65938/wine-bottle-alcohol-beverage-65938.png',
						// width: '112',
						// height: '28',
					})
				)
			),
			m(
				'a.navbar-burger burger',
				{ role: 'button', 'aria-label': 'menu', 'aria-expanded': 'false', 'data-target': 'navbarBasicExample' },
				[ m('span', { 'aria-hidden': true }), m('span', { 'aria-hidden': true }), m('span', { 'aria-hidden': true }) ]
			),
			m('.navbar-menu', [
				m('.navbar-start', [
					m('a.navbar-item', { oncreate: m.route.link, href: '/wines' }, 'Wines'),
					m('a.navbar-item', 'Products'),
					m('a.navbar-item', 'About'),
					m('a.navbar-item', 'Contact'),
					m('.navbar-item has-dropdown is-hoverable', [
						m('a.navbar-link', 'More'),
						m('.navbar-dropdown', [ m('a.navbar-item', 'stuff') ]),
					]),
				]),
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
}

export default NavBar
