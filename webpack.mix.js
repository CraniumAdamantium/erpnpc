const mix = require("laravel-mix");
require("laravel-mix-purgecss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
Sin purge
mix.js("resources/js/app.js", "public/js")
    .extract(["primevue"])
    .vue()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);
 */

mix.js("resources/js/app.js", "public/js")
    .vue()
    /* .extract(["vue"], "js/vue.js")
    .extract(["primevue"], "js/primevue.js") */
    .postCss("resources/css/app.css", "public/css")
    .options({
        postCss: [require("tailwindcss")],
    });

/* .purgeCss({
        extend: {
            safelist: { deep: [/p-/] },
        },
    }); */

mix.webpackConfig({
    output: {
        //filename: "[name].bundle.js",
        chunkFilename: "js/[name].js?id=[chunkhash]",
    },
});
