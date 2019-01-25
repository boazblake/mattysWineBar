import m from 'mithril'
import { animateChildrenEntrance } from './../animations'

const Heading = {
  oncreate: animateChildrenEntrance,
  view: () =>
    m(
      'section.level',
      {
        id: 'heading',
        name: 'heading',
        style: {
          color: '#ecf0f1',
          'margin-bottom': 0,
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
export default Heading
