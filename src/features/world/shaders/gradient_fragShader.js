const typographyFragment = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform float u_seed;
uniform vec2 u_resolution;

varying vec2 v_texcoord;
varying vec3 vPosition;
varying vec3 vColor;

float PI = 3.14159265358979323846;

float rand2(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float rand1(float n){return fract(sin(n) * 43758.5453123);}

void main()
{
  vec2 uv = v_texcoord;

  float random = rand2(uv);

  float u_zoom = 2. - 0.05 * u_seed;

  vec4 white = vec4(0.98, 0.96, 0.94, 1.0);
  vec4 black = vec4(0.02, 0.02, 0.02, 1.0);
  vec4 blue = vec4(0.0, 0.0, 0.4 + 0.16 * sin(2. * u_time), 1.0);
  vec4 green = vec4(0.0, 0.7 + 0.16 * sin(2. * u_time), 0.15, 1.0);
  vec4 red = vec4(0.7 + 0.16 * sin(2. * u_time), 0.15, 0.15, 1.0);
  float horizontalMixer = smoothstep(0.1, 0.35, u_zoom * uv.x * uv.y) - smoothstep(0.55, 0.85, uv.x);
  vec4 color = mix(blue, black, horizontalMixer);

  color *= 1.0 + 0.1 * random;

  gl_FragColor = color;

}
`
export default typographyFragment
