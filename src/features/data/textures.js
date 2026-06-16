function githubToJsDelivr(permalink) {
  return permalink
    .replace('github.com', 'cdn.jsdelivr.net/gh')
    .replace('/blob/', '@')
}

export const ALPHA_MAP = githubToJsDelivr(
  'https://github.com/illysito/TaonaAoa/blob/10d8fa5e4ab089f1230d54e74403303b99ad42de/textures/Alpha%20Map%20Rounded%20Corners%202.png'
)

const commit = '90e25b1ba980dddb404a38f0d38261caef7eeafd'
const base = `https://github.com/illysito/TaonaAoa/blob/${commit}/textures`

const makeImage = (filename) => githubToJsDelivr(`${base}/${filename}`)

const PROJECTS = [
  { id: 'ajodar_0', image: makeImage('Shape-01.webp'), state: 1 },
  { id: 'lilu_0', image: makeImage('Shape-02.webp'), state: 2 },
  { id: 'rafa_0', image: makeImage('Shape-03.webp'), state: 1 },
  { id: 'master_0', image: makeImage('Shape-04.webp'), state: 2 },
  { id: 'mambo_0', image: makeImage('Shape-05.webp'), state: 3 },
  { id: 'impulse_0', image: makeImage('Shape-06.webp'), state: 1 },
  { id: 'encable_0', image: makeImage('Shape-07.webp'), state: 3 },
  { id: 'jam_0', image: makeImage('Shape-08.webp'), state: 1 },
  { id: 'ventana_0', image: makeImage('Shape-09.webp'), state: 1 },
  { id: 'buzo_0', image: makeImage('Shape-10.webp'), state: 3 },
  { id: 'ana_0', image: makeImage('Shape-11.webp'), state: 2 },
  { id: 'amber_0', image: makeImage('Shape-01.webp'), state: 2 },
  { id: 'cofradia_0', image: makeImage('Shape-02.webp'), state: 1 },

  { id: 'ajodar_1', image: makeImage('Shape-03.webp'), state: 1 },
  { id: 'lilu_1', image: makeImage('Shape-04.webp'), state: 1 },
  { id: 'rafa_1', image: makeImage('Shape-05.webp'), state: 2 },
  { id: 'master_1', image: makeImage('Shape-06.webp'), state: 3 },
  { id: 'mambo_1', image: makeImage('Shape-07.webp'), state: 1 },
  { id: 'impulse_1', image: makeImage('Shape-08.webp'), state: 2 },
  { id: 'encable_1', image: makeImage('Shape-09.webp'), state: 1 },
  { id: 'jam_1', image: makeImage('Shape-10.webp'), state: 3 },
  { id: 'ventana_1', image: makeImage('Shape-11.webp'), state: 1 },
  { id: 'buzo_1', image: makeImage('Shape-01.webp'), state: 2 },
  { id: 'ana_1', image: makeImage('Shape-02.webp'), state: 3 },
  { id: 'amber_1', image: makeImage('Shape-03.webp'), state: 2 },
  { id: 'ajodar_2', image: makeImage('Shape-04.webp'), state: 1 },

  { id: 'lilu_2', image: makeImage('Shape-05.webp'), state: 1 },
  { id: 'rafa_2', image: makeImage('Shape-06.webp'), state: 3 },
  { id: 'master_2', image: makeImage('Shape-07.webp'), state: 2 },
  { id: 'mambo_2', image: makeImage('Shape-08.webp'), state: 2 },
  { id: 'impulse_2', image: makeImage('Shape-09.webp'), state: 2 },
  { id: 'encable_2', image: makeImage('Shape-10.webp'), state: 3 },
  { id: 'jam_2', image: makeImage('Shape-11.webp'), state: 1 },
  { id: 'ventana_2', image: makeImage('Shape-01.webp'), state: 1 },
  { id: 'buzo_2', image: makeImage('Shape-02.webp'), state: 3 },
  { id: 'ana_2', image: makeImage('Shape-03.webp'), state: 1 },
  { id: 'amber_2', image: makeImage('Shape-04.webp'), state: 2 },
  { id: 'cofradia_2', image: makeImage('Shape-05.webp'), state: 3 },
  { id: 'jam_2', image: makeImage('Shape-06.webp'), state: 2 },

  { id: 'ajodar_3', image: makeImage('Shape-07.webp'), state: 1 },
  { id: 'lilu_3', image: makeImage('Shape-08.webp'), state: 3 },
  { id: 'rafa_3', image: makeImage('Shape-09.webp'), state: 2 },
  { id: 'master_3', image: makeImage('Shape-10.webp'), state: 3 },
  { id: 'mambo_3', image: makeImage('Shape-11.webp'), state: 1 },
  { id: 'impulse_3', image: makeImage('Shape-01.webp'), state: 2 },
  { id: 'encable_3', image: makeImage('Shape-02.webp'), state: 1 },
  { id: 'jam_3', image: makeImage('Shape-03.webp'), state: 3 },
  { id: 'ventana_3', image: makeImage('Shape-04.webp'), state: 1 },
  { id: 'buzo_3', image: makeImage('Shape-05.webp'), state: 3 },
  { id: 'ana_3', image: makeImage('Shape-06.webp'), state: 2 },
  { id: 'amber_3', image: makeImage('Shape-07.webp'), state: 2 },
  { id: 'ajodar_4', image: makeImage('Shape-08.webp'), state: 1 },

  { id: 'lilu_4', image: makeImage('Shape-09.webp'), state: 2 },
  { id: 'rafa_4', image: makeImage('Shape-10.webp'), state: 3 },
  { id: 'master_4', image: makeImage('Shape-11.webp'), state: 3 },
  { id: 'mambo_4', image: makeImage('Shape-01.webp'), state: 2 },
  { id: 'impulse_4', image: makeImage('Shape-02.webp'), state: 1 },
  { id: 'encable_4', image: makeImage('Shape-03.webp'), state: 2 },
  { id: 'cofradia_3', image: makeImage('Shape-04.webp'), state: 1 },
  { id: 'amber_4', image: makeImage('Shape-05.webp'), state: 3 },
  { id: 'ana_4', image: makeImage('Shape-06.webp'), state: 2 },
  { id: 'buzo_4', image: makeImage('Shape-07.webp'), state: 1 },
  { id: 'ventana_4', image: makeImage('Shape-08.webp'), state: 2 },
]

export default PROJECTS
