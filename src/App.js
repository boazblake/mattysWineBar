import m from 'mithril'
import { animateFadeIn, animateEntrance } from './animations'

const Header = {
	view: () =>
		m('section.card-header is-shadowless', [
			m('h1.card-header-title', 'Mattys Wine Bar'),
			m('h2.subtitle card-header-title is-centered', 'Lets Get Crunk'),
		]),
}

const contentLeft = m(
	'.content columns parallax',
	{ style: { 'background-image': 'url("https://images.pexels.com/photos/533257/pexels-photo-533257.png")' } },
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

const contentRight = m(
	'.content columns parallax',
	{ style: { 'background-image': 'url("https://images.pexels.com/photos/1638423/pexels-photo-1638423.jpeg")' } },
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
	view: () => m('section.section', [ contentLeft, contentRight, contentLeft, contentRight ]),
}

const Splash = {
	oncreate: animateEntrance,
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

export const App = {
	view: () => {
		return m('.container', { style: { border: 'none' } }, [ m(Header), m(Splash), m(Body) ])
	},
}

export default App
