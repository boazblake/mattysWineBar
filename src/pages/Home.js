import m from 'mithril'
import { animateFadeIn } from './../animations'

const Menu = {
  view: () =>
    m(
      'aside.menu',
      {
        style: {
          position: 'fixed',
          left: '0',
          'background-color': 'rgba(44, 62, 80,0.2)',
          height: 'fit-content',
          'z-index': 10000,
        },
      },
      [
        m('ul.menu-list', [
          m('li.menu-item', m('a', { href: '#heading' }, 'Home')),
          m('li.menu-item', m('a', { href: '#wines' }, 'Wines')),
          m('li.menu-item', m('a', { href: '#about' }, 'About')),
          m('li.menu-item', m('a', { href: '#products' }, 'Products')),
          m('li.menu-item', m('a', { href: '#contact' }, 'Contact')),
        ]),
      ]
    ),
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
      m('.columns is-mobile', [
        m('.column ', [
          m('h2.h2', 'Lorem ipsum dolor sit amet.'),
          m('h3.h3', 'consectetur adipiscing elit, sed do eiusmod.'),
        ]),
        m(
          'button.button column is-1 box',
          { style: { height: '350px', 'border-left': 'none' }, oncreate: m.route.link, href: '/wines' },
          m('i.fa fa-chevron-right')
        ),
      ]),
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
      m('.columns is-mobile', [
        m('.column ', [
          m('h2.h2', 'Lorem ipsum dolor sit amet.'),
          m('h3.h3', 'consectetur adipiscing elit, sed do eiusmod.'),
        ]),
        m('button.button column is-1 box', { style: { height: '350px' } }, m('i.fa fa-chevron-right')),
      ]),
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
      m('.columns is-mobile', [
        m('button.button column is-1 box', { style: { height: '350px' } }, m('i.fa fa-chevron-left')),
        m('.column ', [
          m('h2.h2', 'Lorem ipsum dolor sit amet.'),
          m('h3.h3', 'consectetur adipiscing elit, sed do eiusmod.'),
        ]),
      ]),
    ]),
    m('.column', [
      m('img.img', {
        style: { display: 'inline-block', width: '750', height: '750' },
        src: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg',
      }),
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
      m('.columns is-mobile', [
        m('button.button column is-1 box', { style: { height: '350px' } }, m('i.fa fa-chevron-left')),
        m('.column ', [
          m('h2.h2', 'Lorem ipsum dolor sit amet.'),
          m('h3.h3', 'consectetur adipiscing elit, sed do eiusmod.'),
        ]),
      ]),
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
  view: () => [ Wines, Products, About, Contact ],
}

const Home = { view: () => [ m(Menu), m(Splash), m(Body) ] }

export default Home
