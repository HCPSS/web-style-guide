/*
 * Require the Fractal module
 */
var fractal = require('@frctl/fractal');

/*
 * Tell Fractal where to look for components.
 */
fractal.set('components.path', 'components');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.set('docs.path', 'docs');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.set('plugins.web.static.path', 'public');

/*
 * Give your project a title.
 */
fractal.set('project.title', 'HCPSS Style Guide');

/*
 * The default layout template to use when rendering component previews
 */
fractal.set('components.default.preview', '@preview');
