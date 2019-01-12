import m from 'mithril'
import { animateFadeIn, animateChildrenEntrance } from './animations'

const Header = {
	oncreate: animateChildrenEntrance,
	view: () =>
		m(
			'section.level',
			{
				id: 'home',
				name: 'home',
				style: {
					color: '#ecf0f1',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100%',
					backgroundPosition: '0%80%',
					'background-image': 'url("https://images.pexels.com/photos/21393/pexels-photo.jpg")',
				},
			},
			[
				m('aside.level-left', { style: { 'padding-left': '36px' } }, [ m('h1.level-item', 'Mattys Wine Bar') ]),
				m('aside.level-right', { style: { 'padding-right': '36px' } }, [ m('h1.level-item', 'Lets Get Crunk') ]),
			]
		),
}

const Wines = m(
	'.content columns parallax',
	{
		id: 'wines',
		name: 'wines',
		style: { 'background-image': 'url("https://images.pexels.com/photos/533257/pexels-photo-533257.png")' },
	},
	[
		m('.column', [
			m('img.img', {
				style: { display: 'inline-block', width: '750', height: '750' },
				src: 'https://images.pexels.com/photos/66636/pexels-photo-66636.jpeg',
			}),
		]),
		m('.column', { style: { 'background-color': 'rgba(236, 240, 241,0.1)', width: '750', height: '750' } }, [
			m('h2.h2', 'Lots of cool wines.'),
			m('h2.h2', 'We have the best ones.'),
		]),
	]
)

const Products = m(
	'.content columns parallax',
	{
		id: 'products',
		name: 'products',
		style: { 'background-image': 'url("https://images.pexels.com/photos/1638423/pexels-photo-1638423.jpeg")' },
	},
	[
		m('.column', { style: { 'background-color': 'rgba(236, 240, 241,0.1)', width: '750', height: '750' } }, [
			m('h2.h2', 'Check out our other stuff.'),
			m('h2.h2', 'You will love it.'),
		]),
		m('.column', [
			m('img.img', {
				style: { display: 'inline-block', width: '750', height: '750' },
				src: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg',
			}),
		]),
	]
)

const About = m(
	'.content columns parallax',
	{
		id: 'about',
		name: 'about',
		style: { 'background-image': 'url("https://images.pexels.com/photos/533257/pexels-photo-533257.png")' },
	},
	[
		m('.column', [
			m('img.img', {
				style: { display: 'inline-block', width: '750', height: '750' },
				src: 'https://images.pexels.com/photos/66636/pexels-photo-66636.jpeg',
			}),
		]),
		m('.column', { style: { 'background-color': 'rgba(236, 240, 241,0.1)', width: '750', height: '750' } }, [
			m('h2.h2', 'Lots of cool wines.'),
			m('h2.h2', 'We have the best ones.'),
		]),
	]
)

const Contact = m(
	'.content columns parallax',
	{
		id: 'contact',
		name: 'contact',
		style: { 'background-image': 'url("https://images.pexels.com/photos/1638423/pexels-photo-1638423.jpeg")' },
	},
	[
		m('.column', { style: { 'background-color': 'rgba(236, 240, 241,0.1)', width: '750', height: '750' } }, [
			m('h2.h2', 'Check out our other stuff.'),
			m('h2.h2', 'You will love it.'),
		]),
		m('.column', [
			m('img.img', {
				style: { display: 'inline-block', width: '750', height: '750' },
				src: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg',
			}),
		]),
	]
)

const Body = {
	view: () => m('section.section', [ Wines, Products, About, Contact ]),
}

const Splash = {
	oncreate: animateFadeIn,
	view: () =>
		m(
			'section.section',
			{
				style: {
					'background-image': 'url("https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg")',
					height: '80vh',
				},
			},
			[]
		),
}

const Footer = {
	view: () =>
		m('footer.footer', { style: { backgroundColor: '#2c3e50', color: '#ecf0f1' } }, [
			m('.level', [ m('.level-left', 'INFO'), m('.level-rightt', 'MORE INFO') ]),
		]),
}

const Menu = {
	view: () =>
		m(
			'aside.menu',
			{ style: { position: 'fixed', left: '0', 'background-color': 'rgba(44, 62, 80,0.2)', height: 'fit-content' } },
			[
				m('ul.menu-list', [
					m('li.menu-item', m('a', { href: '#home' }, 'Home')),
					m('li.menu-item', m('a', { href: '#wines' }, 'Wines')),
					m('li.menu-item', m('a', { href: '#about' }, 'About')),
					m('li.menu-item', m('a', { href: '#products' }, 'Products')),
					m('li.menu-item', m('a', { href: '#contact' }, 'Contact')),
				]),
			]
		),
}

export const App = {
	view: () => {
		return m('.', { style: { border: 'none' } }, m(Header), [
			m('.container', [ m(Menu), m('section.section', [ m(Splash), m(Body), m(Footer) ]) ]),
		])
	},
}

export default App
