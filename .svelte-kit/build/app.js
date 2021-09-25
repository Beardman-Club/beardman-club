import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<link rel='stylesheet' href='/global.css'>\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-653e7e1f.js",
			css: [assets + "/_app/assets/start-61d1577b.css"],
			js: [assets + "/_app/start-653e7e1f.js",assets + "/_app/chunks/vendor-c9c02e4a.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"assets/images/10_founders.png","size":124123,"type":"image/png"},{"file":"assets/images/discord-logo-transparent.png","size":233662,"type":"image/png"},{"file":"assets/images/pixil-frame-0.png","size":20668,"type":"image/png"},{"file":"assets/images/pixil-frame-0_1.png","size":38996,"type":"image/png"},{"file":"assets/images/pixil-frame-0_19.png","size":29590,"type":"image/png"},{"file":"assets/images/pixil-frame-0_2.png","size":26245,"type":"image/png"},{"file":"assets/images/pixil-frame-0_3.png","size":25622,"type":"image/png"},{"file":"assets/images/pixil-frame-0_4.png","size":25844,"type":"image/png"},{"file":"assets/images/pixil-frame-0_5.png","size":25710,"type":"image/png"},{"file":"assets/images/pixil-frame-0_6.png","size":25580,"type":"image/png"},{"file":"assets/images/pixil-frame-0_7.png","size":26454,"type":"image/png"},{"file":"assets/images/pixil-frame-0_8.png","size":26001,"type":"image/png"},{"file":"assets/images/pixil-frame-0_9.png","size":25721,"type":"image/png"},{"file":"assets/images/twitter.png","size":80587,"type":"image/png"},{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"global.css","size":714,"type":"text/css"},{"file":"reset.css","size":1131,"type":"text/css"}],
	layout: "src/routes/__layout.svelte",
	error: "src/routes/__error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: ["src/routes/__error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),"src/routes/__error.svelte": () => import("../../src/routes/__error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-8871a355.js","css":["assets/pages/__layout.svelte-ce669f43.css"],"js":["pages/__layout.svelte-8871a355.js","chunks/vendor-c9c02e4a.js"],"styles":[]},"src/routes/__error.svelte":{"entry":"pages/__error.svelte-08fcb8d2.js","css":["assets/pages/__error.svelte-3e42bd60.css"],"js":["pages/__error.svelte-08fcb8d2.js","chunks/vendor-c9c02e4a.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-d082a56c.js","css":["assets/pages/index.svelte-99eadaa1.css"],"js":["pages/index.svelte-d082a56c.js","chunks/vendor-c9c02e4a.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}