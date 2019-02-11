import m from 'mithril'
import { slideIn } from '../animations'

const Wines = () => {
  const state = { status: 'loading' }

  const load = v => {
    console.log(v)
    slideIn(dom)
  }

  return {
    // oninit: ({ attrs: { model } }) => (state.wines = model._wines),
    onupdate: load,
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

export default Wines
