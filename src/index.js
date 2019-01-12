// index.jsx
import $ from 'jquery'
import m from 'mithril'
const root = document.getElementById('app')

// Styles
import 'bulma/css/bulma.css'
import './normalize.css'
import './index.css'
import './styles.scss'

//SMOOTH SCROLLING EFFECT
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash)
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top,
					},
					1500,
					'swing'
				)
				return false
			}
		}
	})
})

import App from './App.js'

m.mount(root, App)
