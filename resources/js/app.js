import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import mitt from "mitt";
const emitter = mitt();

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob("./Pages/**/*.vue")
    ),
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
      .mixin({ methods: { route } })
      .use(plugin);
    // .component("Link", Link)
    // .mount(el);

    app.config.globalProperties.emitter = emitter;
    app.component("Link", Link);
    app.mount(el);
  },
  progress: {
    // The color of the progress bar.
    color: "yellowgreen",

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: true,
  },
});
