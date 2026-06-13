function githubToJsDelivr(permalink) {
  return permalink
    .replace('github.com', 'cdn.jsdelivr.net/gh')
    .replace('/blob/', '@')
}

const URLS = {
  a: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Captura%20de%20pantalla%202026-03-22%20a%20las%200.09.54.webp'
  ),
  b: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Omy4.webp'
  ),
  c: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/cloudsmoke.webp'
  ),
  d: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/lol%20(1).webp'
  ),
  e: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/pescaos.webp'
  ),
  f: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/terrero.webp'
  ),
  g: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi.webp'
  ),
  h: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi2.webp'
  ),
  i: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi3.webp'
  ),
  j: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Captura%20de%20pantalla%202026-03-22%20a%20las%200.09.54.webp'
  ),
  k: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Omy4.webp'
  ),
  l: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/cloudsmoke.webp'
  ),
  m: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/lol%20(1).webp'
  ),
  n: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/pescaos.webp'
  ),
  o: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/terrero.webp'
  ),
  p: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi.webp'
  ),
  q: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi2.webp'
  ),
  r: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi3.webp'
  ),
  s: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Captura%20de%20pantalla%202026-03-22%20a%20las%200.09.54.webp'
  ),
  t: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Omy4.webp'
  ),
  u: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/cloudsmoke.webp'
  ),
  v: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/lol%20(1).webp'
  ),
  w: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/pescaos.webp'
  ),
  x: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/terrero.webp'
  ),
  y: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi.webp'
  ),
  z: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi2.webp'
  ),
  aa: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi3.webp'
  ),
  bb: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Captura%20de%20pantalla%202026-03-22%20a%20las%200.09.54.webp'
  ),
  cc: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Omy4.webp'
  ),
  dd: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/cloudsmoke.webp'
  ),
  ee: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/lol%20(1).webp'
  ),
  ff: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/pescaos.webp'
  ),
  gg: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/terrero.webp'
  ),
  hh: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi.webp'
  ),
  ii: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi2.webp'
  ),
  jj: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi3.webp'
  ),
  kk: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Captura%20de%20pantalla%202026-03-22%20a%20las%200.09.54.webp'
  ),
  ll: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Omy4.webp'
  ),
  mm: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/cloudsmoke.webp'
  ),
  nn: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/lol%20(1).webp'
  ),
  oo: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/pescaos.webp'
  ),
  pp: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/terrero.webp'
  ),
  qq: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi.webp'
  ),
  rr: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi2.webp'
  ),
  ss: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi3.webp'
  ),
  tt: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Captura%20de%20pantalla%202026-03-22%20a%20las%200.09.54.webp'
  ),
  uu: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Omy4.webp'
  ),
  vv: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/cloudsmoke.webp'
  ),
  ww: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/lol%20(1).webp'
  ),
  xx: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/pescaos.webp'
  ),
  yy: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/terrero.webp'
  ),
  zz: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi.webp'
  ),
  aaa: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi2.webp'
  ),
  bbb: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi3.webp'
  ),
  ccc: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Captura%20de%20pantalla%202026-03-22%20a%20las%200.09.54.webp'
  ),
  ddd: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/Omy4.webp'
  ),
  eee: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/cloudsmoke.webp'
  ),
  fff: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/lol%20(1).webp'
  ),
  ggg: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/pescaos.webp'
  ),
  hhh: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/terrero.webp'
  ),
  iii: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi.webp'
  ),
  jjj: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi2.webp'
  ),
  kkk: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/e843e6b3f21a80b777c35bde3bef4d87f5d952dc/textures/vivi3.webp'
  ),
}

export default URLS
