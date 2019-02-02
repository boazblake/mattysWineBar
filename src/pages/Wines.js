import m from 'mithril'
import { slideIn } from '../animations'
import { _wines } from './data.js'

console.log(_wines.length)

const Wines = () => {
  const state = { status: 'loading' }

  const load = ({ dom }) => {
    // return setTimeout(() => {
    state.status = 'loaded'
    state.wines = _wines.slice(0, 10)
    return slideIn(dom)
    // m.redraw()
    // }, 2000)
  }

  return {
    oncreate: load,
    onupdate: slideIn,
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
