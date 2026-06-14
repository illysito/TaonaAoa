function githubToJsDelivr(permalink) {
  return permalink
    .replace('github.com', 'cdn.jsdelivr.net/gh')
    .replace('/blob/', '@')
}

export const ALPHA_MAP = githubToJsDelivr(
  'https://github.com/illysito/TaonaAoa/blob/10d8fa5e4ab089f1230d54e74403303b99ad42de/textures/Alpha%20Map%20Rounded%20Corners%202.png'
)

const commit = '49e59ae8d50465656c089ca4794bd4a0c1a2a001'
const base = `https://github.com/illysito/TaonaAoa/blob/${commit}/textures`

const makeImage = (filename) => githubToJsDelivr(`${base}/${filename}`)

const PROJECTS = [
  { id: 'ajodar_0', image: makeImage('a-01.webp') },
  { id: 'lilu_0', image: makeImage('a-02.webp') },
  { id: 'rafa_0', image: makeImage('a-03.webp') },
  { id: 'master_0', image: makeImage('a-04.webp') },
  { id: 'mambo_0', image: makeImage('a-05.webp') },
  { id: 'impulse_0', image: makeImage('a-06.webp') },
  { id: 'encable_0', image: makeImage('a-07.webp') },
  { id: 'jam_0', image: makeImage('a-08.webp') },
  { id: 'ventana_0', image: makeImage('a-09.webp') },
  { id: 'buzo_0', image: makeImage('a-10.webp') },
  { id: 'ana_0', image: makeImage('a-11.webp') },
  { id: 'amber_0', image: makeImage('a-12.webp') },
  { id: 'cofradia_0', image: makeImage('a-13.webp') },

  { id: 'ajodar_1', image: makeImage('a-01.webp') },
  { id: 'lilu_1', image: makeImage('a-02.webp') },
  { id: 'rafa_1', image: makeImage('a-03.webp') },
  { id: 'master_1', image: makeImage('a-04.webp') },
  { id: 'mambo_1', image: makeImage('a-05.webp') },
  { id: 'impulse_1', image: makeImage('a-06.webp') },
  { id: 'encable_1', image: makeImage('a-07.webp') },
  { id: 'jam_1', image: makeImage('a-08.webp') },
  { id: 'ventana_1', image: makeImage('a-09.webp') },
  { id: 'buzo_1', image: makeImage('a-10.webp') },
  { id: 'ana_1', image: makeImage('a-11.webp') },
  { id: 'amber_1', image: makeImage('a-12.webp') },
  { id: 'ajodar_2', image: makeImage('a-01.webp') },

  { id: 'lilu_2', image: makeImage('a-02.webp') },
  { id: 'rafa_2', image: makeImage('a-03.webp') },
  { id: 'master_2', image: makeImage('a-04.webp') },
  { id: 'mambo_2', image: makeImage('a-05.webp') },
  { id: 'impulse_2', image: makeImage('a-06.webp') },
  { id: 'encable_2', image: makeImage('a-07.webp') },
  { id: 'jam_2', image: makeImage('a-08.webp') },
  { id: 'ventana_2', image: makeImage('a-09.webp') },
  { id: 'buzo_2', image: makeImage('a-10.webp') },
  { id: 'ana_2', image: makeImage('a-11.webp') },
  { id: 'amber_2', image: makeImage('a-12.webp') },
  { id: 'cofradia_2', image: makeImage('a-13.webp') },
  { id: 'jam_2', image: makeImage('a-08.webp') },

  { id: 'ajodar_3', image: makeImage('a-01.webp') },
  { id: 'lilu_3', image: makeImage('a-02.webp') },
  { id: 'rafa_3', image: makeImage('a-03.webp') },
  { id: 'master_3', image: makeImage('a-04.webp') },
  { id: 'mambo_3', image: makeImage('a-05.webp') },
  { id: 'impulse_3', image: makeImage('a-06.webp') },
  { id: 'encable_3', image: makeImage('a-07.webp') },
  { id: 'jam_3', image: makeImage('a-08.webp') },
  { id: 'ventana_3', image: makeImage('a-09.webp') },
  { id: 'buzo_3', image: makeImage('a-10.webp') },
  { id: 'ana_3', image: makeImage('a-11.webp') },
  { id: 'amber_3', image: makeImage('a-12.webp') },
  { id: 'ajodar_4', image: makeImage('a-01.webp') },

  { id: 'lilu_4', image: makeImage('a-02.webp') },
  { id: 'rafa_4', image: makeImage('a-03.webp') },
  { id: 'master_4', image: makeImage('a-04.webp') },
  { id: 'mambo_4', image: makeImage('a-05.webp') },
  { id: 'impulse_4', image: makeImage('a-06.webp') },
  { id: 'encable_4', image: makeImage('a-07.webp') },
  { id: 'cofradia_3', image: makeImage('a-13.webp') },
  { id: 'amber_4', image: makeImage('a-12.webp') },
  { id: 'ana_4', image: makeImage('a-11.webp') },
  { id: 'buzo_4', image: makeImage('a-10.webp') },
  { id: 'ventana_4', image: makeImage('a-09.webp') },
]

export default PROJECTS
