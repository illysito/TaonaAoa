function githubToJsDelivr(permalink) {
  return permalink
    .replace('github.com', 'cdn.jsdelivr.net/gh')
    .replace('/blob/', '@')
}

export const ALPHA_MAP = githubToJsDelivr(
  'https://github.com/illysito/TaonaAoa/blob/10d8fa5e4ab089f1230d54e74403303b99ad42de/textures/Alpha%20Map%20Rounded%20Corners%202.png'
)

// const commit = '90e25b1ba980dddb404a38f0d38261caef7eeafd'
// const base = `https://github.com/illysito/TaonaAoa/blob/${commit}/textures`

// const makeImage = (filename) => githubToJsDelivr(`${base}/${filename}`)

const TAONA_TEXTURES = [
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Frame%2036.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Capa_1.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/fcaa5027789d09cf36c0c1f00aa71fab0c8fdbfa/textures/taona-logo.png'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/FLEET%202%20copia%202.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/fcaa5027789d09cf36c0c1f00aa71fab0c8fdbfa/textures/taona-cross.png'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/fcaa5027789d09cf36c0c1f00aa71fab0c8fdbfa/textures/taona-circle.png'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/5c585ad850898ea11395f0ca64616b95b94fb756/textures/taona-28.png'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/5c585ad850898ea11395f0ca64616b95b94fb756/textures/taona-sate.png'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/5c585ad850898ea11395f0ca64616b95b94fb756/textures/taona-satellite.png'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Frame%2037.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Frame%2038.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Frame%2039.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Frame%2040.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Frame%2041.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Frame%2042.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Frame%2044.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Frame%2045.webp'
  ),
  githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/0a9e56e965d8c1c849e2269c4a1bccf1962d74a2/textures/Frame%2046.webp'
  ),
]

const PROJECTS = [
  { id: 'ajodar_0', image: TAONA_TEXTURES[0], state: 1 },
  { id: 'lilu_0', image: TAONA_TEXTURES[1], state: 2 },
  { id: 'rafa_0', image: TAONA_TEXTURES[2], state: 3 },
  { id: 'master_0', image: TAONA_TEXTURES[3], state: 4 },
  { id: 'mambo_0', image: TAONA_TEXTURES[4], state: 5 },
  { id: 'impulse_0', image: TAONA_TEXTURES[5], state: 6 },
  { id: 'encable_0', image: TAONA_TEXTURES[6], state: 1 },
  { id: 'jam_0', image: TAONA_TEXTURES[7], state: 2 },
  { id: 'ventana_0', image: TAONA_TEXTURES[8], state: 3 },
  { id: 'buzo_0', image: TAONA_TEXTURES[9], state: 4 },
  { id: 'ana_0', image: TAONA_TEXTURES[10], state: 5 },
  { id: 'amber_0', image: TAONA_TEXTURES[11], state: 6 },
  {
    id: 'cofradia_0',
    image: TAONA_TEXTURES[12],
    state: 1,
  },

  { id: 'ajodar_1', image: TAONA_TEXTURES[13], state: 1 },
  { id: 'lilu_1', image: TAONA_TEXTURES[14], state: 2 },
  { id: 'rafa_1', image: TAONA_TEXTURES[15], state: 3 },
  { id: 'master_1', image: TAONA_TEXTURES[16], state: 4 },
  { id: 'mambo_1', image: TAONA_TEXTURES[17], state: 5 },
  { id: 'impulse_1', image: TAONA_TEXTURES[0], state: 6 },
  { id: 'encable_1', image: TAONA_TEXTURES[1], state: 1 },
  { id: 'jam_1', image: TAONA_TEXTURES[2], state: 2 },
  { id: 'ventana_1', image: TAONA_TEXTURES[3], state: 3 },
  { id: 'buzo_1', image: TAONA_TEXTURES[4], state: 4 },
  { id: 'ana_1', image: TAONA_TEXTURES[5], state: 5 },
  { id: 'amber_1', image: TAONA_TEXTURES[6], state: 6 },
  { id: 'ajodar_2', image: TAONA_TEXTURES[7], state: 1 },

  { id: 'lilu_2', image: TAONA_TEXTURES[8], state: 2 },
  { id: 'rafa_2', image: TAONA_TEXTURES[9], state: 3 },
  { id: 'master_2', image: TAONA_TEXTURES[10], state: 4 },
  { id: 'mambo_2', image: TAONA_TEXTURES[11], state: 5 },
  { id: 'impulse_2', image: TAONA_TEXTURES[12], state: 6 },
  { id: 'encable_2', image: TAONA_TEXTURES[13], state: 1 },
  { id: 'jam_2', image: TAONA_TEXTURES[14], state: 2 },
  { id: 'ventana_2', image: TAONA_TEXTURES[15], state: 3 },
  { id: 'buzo_2', image: TAONA_TEXTURES[16], state: 4 },
  { id: 'ana_2', image: TAONA_TEXTURES[17], state: 5 },
  { id: 'amber_2', image: TAONA_TEXTURES[0], state: 6 },
  { id: 'cofradia_2', image: TAONA_TEXTURES[1], state: 1 },
  { id: 'jam_2', image: TAONA_TEXTURES[2], state: 2 },

  { id: 'ajodar_3', image: TAONA_TEXTURES[3], state: 3 },
  { id: 'lilu_3', image: TAONA_TEXTURES[4], state: 4 },
  { id: 'rafa_3', image: TAONA_TEXTURES[5], state: 5 },
  { id: 'master_3', image: TAONA_TEXTURES[6], state: 6 },
  { id: 'mambo_3', image: TAONA_TEXTURES[7], state: 1 },
  { id: 'impulse_3', image: TAONA_TEXTURES[8], state: 2 },
  { id: 'encable_3', image: TAONA_TEXTURES[9], state: 3 },
  { id: 'jam_3', image: TAONA_TEXTURES[10], state: 4 },
  { id: 'ventana_3', image: TAONA_TEXTURES[11], state: 5 },
  { id: 'buzo_3', image: TAONA_TEXTURES[12], state: 6 },
  { id: 'ana_3', image: TAONA_TEXTURES[13], state: 1 },
  { id: 'amber_3', image: TAONA_TEXTURES[14], state: 2 },
  { id: 'ajodar_4', image: TAONA_TEXTURES[15], state: 3 },

  { id: 'lilu_4', image: TAONA_TEXTURES[16], state: 4 },
  { id: 'rafa_4', image: TAONA_TEXTURES[17], state: 5 },
  { id: 'master_4', image: TAONA_TEXTURES[0], state: 6 },
  { id: 'mambo_4', image: TAONA_TEXTURES[1], state: 1 },
  { id: 'impulse_4', image: TAONA_TEXTURES[2], state: 2 },
  { id: 'encable_4', image: TAONA_TEXTURES[3], state: 3 },
  { id: 'cofradia_3', image: TAONA_TEXTURES[4], state: 4 },
  { id: 'amber_4', image: TAONA_TEXTURES[5], state: 5 },
  { id: 'ana_4', image: TAONA_TEXTURES[6], state: 6 },
  { id: 'buzo_4', image: TAONA_TEXTURES[7], state: 1 },
  { id: 'ventana_4', image: TAONA_TEXTURES[8], state: 2 },
]

export default PROJECTS
