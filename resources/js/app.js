import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";

import PrimeVue from "primevue/config";

/*
CSS Primevue
*/
import "primevue/resources/themes/vela-blue/theme.css";
import "primevue/resources/primevue.css";
import "primeicons/primeicons.css";


createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue)
            .mount(el);
    },
});
