import m from 'mithril'
import ldBar from '@loadingio/loading-bar'

const Loader = () => {
  const animate = ({ dom }) => {
    let res = new ldBar(dom, {
      // viewBox: '100 100 100 100',
      // height: '100%',
      // width: '100%',
      preset: 'bubble',
      'pattern-size': 200,
      // 'img-size': 200,
      'stroke-width': 1,
      type: 'fill',
      'fill-dir': 'btt',
      path:
				'M400.293,318.242c-2.062-6.182-8.767-9.598-14.937-7.492l-32.844,10.92l-20.655-62.125 c16.965-8.326,30.872-21.584,39.487-38.789c10.414-20.783,12.104-44.377,4.399-67.404L321.782,28.627L178.297,76.369l9.583,39.001 L65.249,88.859l-40.438,130.82c-4.909,22.729-0.681,46.003,11.919,65.537c10.414,16.165,25.674,27.84,43.438,34.271 l-13.842,63.992l-33.78-7.289c-6.354-1.279-12.661,2.674-14.04,9.061c-1.38,6.381,2.67,12.658,9.057,14.041l45.221,9.77 c0.033,0,0.05,0.029,0.073,0.029c0.051,0.016,0.111,0,0.163,0.016l45.235,9.77c0.846,0.184,1.676,0.264,2.509,0.264 c5.442,0,10.336-3.783,11.533-9.322c1.37-6.385-2.675-12.66-9.062-14.045l-33.804-7.309l13.792-63.729 c2.264,0.184,4.524,0.371,6.789,0.371c40.604,0,76.323-28.859,85.071-69.562l9.588-71.867l6.295,25.597 c11.844,35.626,45.011,59.562,82.521,59.562c5.387,0,10.719-0.648,15.999-1.646l20.6,61.945l-32.78,10.895 c-6.201,2.058-9.555,8.75-7.497,14.932c1.651,4.955,6.264,8.094,11.215,8.094c1.232,0,2.496-0.186,3.729-0.604l88.043-29.271 C399.001,331.117,402.355,324.424,400.293,318.242z M171.83,251.496c-7.193,33.396-41.61,55.811-75.339,48.516l0,0h-0.019 c-16.553-3.568-30.718-13.365-39.887-27.594c-9.166-14.23-12.259-31.182-8.938-46.748l33.776-109.138l105.328,22.772 L171.83,251.496z M233.655,202.727L206.444,91.906l102.265-34.021l44.978,103.889c5.352,16.074,4.102,33.264-3.461,48.4 c-7.587,15.135-20.61,26.42-36.692,31.757c-6.5,2.185-13.255,3.276-20.041,3.276C266.171,245.207,242.025,227.777,233.655,202.727 z',
      fill: 'data:ldbar/res,bubble(#96281b,#fff,50,1)',
      value: '100',
      'ldbar-label': '',
    })
    console.log('res', res)
    return res
  }

  return {
    oncreate: animate,
    view: () => m('svg.', { style: { width: '250px', height: '250px' } }),
  }
}

export default Loader

// "M372.063,179.128c-35.495,0-45.494,0.31-57.188,1.844c-28.009,3.675-50.946,11.199-58.968,19.375    c-5.411,5.515-15.493,31.586-20.625,53.344c-11.332,48.039-15.505,82.286-14.406,117.938c0.581,18.85,0.948,21.99,4.625,39    c3.626,16.775,4.705,20.039,11.5,35c8.904,19.605,8.972,19.69,23.5,37.219c9.333,11.261,14.174,16.027,26.875,26.375    c22.98,18.723,25.276,20.383,40,28.657c15.814,8.885,17.347,10.172,23.844,20.125c8.606,13.184,8.259,8.223,7.938,110.969    l1.344,91.75c-1.749,1.416-7.949,1.902-12.5,1.906c-9.602,0.006-30.731,4.561-46.625,10.063    c-19.803,6.855-30.665,13.029-41.906,23.813c-10.134,9.932-13.843,18.568-9.563,32.875c0.27,1.234,3.109,5.285,6.313,9    c8.381,9.721,19.341,15.521,41.875,22.219c25.325,6.844,47.516,13.926,73.968,12.438c26.452,1.488,48.645-5.594,73.969-12.438    c22.533-6.697,33.463-12.498,41.844-22.219c3.203-3.715,6.043-7.766,6.313-9c4.279-14.307,0.57-22.943-9.563-32.875    c-11.242-10.783-22.072-16.957-41.875-23.813c-15.893-5.502-37.055-10.057-46.656-10.063c-4.551-0.004-10.75-0.49-12.5-1.906    l1.375-91.75c-0.32-102.746-0.699-97.785,7.906-110.969c6.498-9.953,8.029-11.24,23.844-20.125    c14.725-8.273,17.02-9.934,40-28.657c12.701-10.348,17.574-15.114,26.906-26.375c14.527-17.528,14.564-17.613,23.469-37.219    c6.795-14.961,7.873-18.225,11.5-35c3.678-17.01,4.043-20.15,4.625-39c1.1-35.652-3.074-69.898-14.406-117.938    c-5.133-21.758-15.215-47.829-20.625-53.344c-8.023-8.176-30.928-15.7-58.938-19.375    C417.557,179.438,407.559,179.128,372.063,179.128z"
