import m from 'mithril'

const Footer = {
	view: () =>
		m('footer.footer', { style: { backgroundColor: '#2c3e50', color: '#ecf0f1' } }, [
			m('.level', [ m('.level-left', 'INFO'), m('.level-rightt', 'MORE INFO') ]),
		]),
}
export default Footer
