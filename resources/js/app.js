import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";

import PrimeVue from "primevue/config";

createInertiaApp({
    resolve: (name) => import(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        /* Only load dependency like notiflix once and not multiple times */

        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue)
            .mount(el);
    },
});
/* createInertiaApp({
    resolve: async (name) => await import(`./Pages/${name}`),

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue)
            .mount(el);
    },
}); */
