import m from 'mithril'
import { animateChildrenFadeIn } from '../animations'

const Wines = () => {
	const state = { status: 'loading' }

	const load = () => {
		setTimeout(() => {
			state.status = 'loaded'
			state.wines = _wines
			m.redraw()
		}, 2000)
	}

	return {
		oninit: load,
		oncreate: animateChildrenFadeIn,
		onupdate: animateChildrenFadeIn,
		view: () =>
			state.status == 'loaded'
				? m(
						'ul.tile columns is-multiline',
						state.wines.map((wine, idx) =>
							m('.column is-4', { key: idx }, [
								m('img.img', { style: { width: '250px', height: '250px' }, src: wine.img }),
								m('h2.h2', wine.title),
								m('p.p', wine.description),
							])
						)
					)
				: m('LOADING'),
	}
}

const _wines = [
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
	{
		img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
		title: 'Best Wine',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
	},
]

export default Wines
