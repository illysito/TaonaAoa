function githubToJsDelivr(permalink) {
  return permalink
    .replace('github.com', 'cdn.jsdelivr.net/gh')
    .replace('/blob/', '@')
}

const URLS = {
  alphaMap: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/10d8fa5e4ab089f1230d54e74403303b99ad42de/textures/Alpha%20Map%20Rounded%20Corners%202.png'
  ),
  a: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-01.webp'
  ),
  b: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-02.webp'
  ),
  c: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-03.webp'
  ),
  d: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-04.webp'
  ),
  e: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-05.webp'
  ),
  f: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-06.webp'
  ),
  g: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-07.webp'
  ),
  h: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-08.webp'
  ),
  i: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-09.webp'
  ),
  j: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-10.webp'
  ),
  k: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-11.webp'
  ),
  l: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-12.webp'
  ),
  m: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-13.webp'
  ),
  n: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-01.webp'
  ),
  o: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-02.webp'
  ),
  p: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-03.webp'
  ),
  q: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-04.webp'
  ),
  r: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-05.webp'
  ),
  s: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-06.webp'
  ),
  t: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-07.webp'
  ),
  u: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-08.webp'
  ),
  v: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-09.webp'
  ),
  w: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-10.webp'
  ),
  x: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-11.webp'
  ),
  y: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-12.webp'
  ),
  z: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-01.webp'
  ),
  aa: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-02.webp'
  ),
  bb: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-03.webp'
  ),
  cc: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-04.webp'
  ),
  dd: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-05.webp'
  ),
  ee: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-06.webp'
  ),
  ff: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-07.webp'
  ),
  gg: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-08.webp'
  ),
  hh: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-09.webp'
  ),
  ii: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-10.webp'
  ),
  jj: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-11.webp'
  ),
  kk: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-12.webp'
  ),
  ll: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-13.webp'
  ),
  mm: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-08.webp'
  ),
  nn: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-01.webp'
  ),
  oo: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-02.webp'
  ),
  pp: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-03.webp'
  ),
  qq: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-04.webp'
  ),
  rr: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-05.webp'
  ),
  ss: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-06.webp'
  ),
  tt: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-07.webp'
  ),
  uu: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-08.webp'
  ),
  vv: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-09.webp'
  ),
  ww: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-10.webp'
  ),
  xx: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-11.webp'
  ),
  yy: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-12.webp'
  ),
  zz: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-01.webp'
  ),
  aaa: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-02.webp'
  ),
  bbb: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-03.webp'
  ),
  ccc: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-04.webp'
  ),
  ddd: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-05.webp'
  ),
  eee: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-06.webp'
  ),
  fff: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-07.webp'
  ),
  ggg: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-13.webp'
  ),
  hhh: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-12.webp'
  ),
  iii: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-11.webp'
  ),
  jjj: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-10.webp'
  ),
  kkk: githubToJsDelivr(
    'https://github.com/illysito/TaonaAoa/blob/49e59ae8d50465656c089ca4794bd4a0c1a2a001/textures/a-09.webp'
  ),
}
export default URLS
