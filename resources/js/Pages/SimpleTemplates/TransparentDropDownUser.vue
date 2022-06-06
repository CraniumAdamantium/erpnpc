<template>
    <div id="app">
        <div class="aselect" :data-value="value" :data-list="list">
            <div
                class="cursor-pointer selector"
                v-on:mouseover="mouseover"
                v-on:mouseleave="mouseleave"
            >
                <div class="label">
                    <button class="button">
                        <p class="font-medium">
                            {{ value }}
                        </p>
                    </button>
                </div>
                <div :class="{ hidden: !visible, visible }">
                    <ul class="cursor-pointer">
                        <li
                            :class="{ current: item === value }"
                            :key="item"
                            v-for="item in list"
                            @click="takeMeTo(item[1], item[2])"
                        >
                            {{ item[0] }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";
export default {
    props: {
        value: {
            type: String,
            default: "Opciones",
        },
        list: {
            type: Array,
            /* Links means the route defined in web.php as name (method) from route */
            default: [
                ["Valor", "Enlace"],
                ["Valor", "Enlace"],
                ["Valor", "Enlace"],
            ],
        },
    },
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        mouseover() {
            this.visible = true;
        },
        mouseleave() {
            this.visible = false;
        },
        takeMeTo(myRoute, name) {
            if (myRoute == "logout") {
                history.pushState(null, document.title, location.href);
                window.addEventListener("popstate", function (event) {
                    console.log(event);
                    history.pushState(null, document.title, location.href);
                });
                window.location.href = route("logout");
            }
            Inertia.get(route(myRoute, name));
        },
    },
};
</script>
<style lang="scss" scoped>
body {
    background: STEELBLUE;
}
.aselect {
    width: 135px;
    margin: 20px auto;
    .selector {
        border: 2px gainsboro;
        border-radius: 4px;
        background: transparent;
        position: relative;
        //Removed this shit so the one in the below (in ul) works
        //z-index: 1;
        .label {
            display: block;
            padding: 12px;
            font-size: 16px;
            color: #171a21;
        }
        :hover {
            color: rgb(18, 165, 217);
        }
    }
    ul {
        width: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        font-size: 16px;
        border: 1px solid gainsboro;
        position: absolute;
        z-index: 10 !important;
        background: #fff;
    }
    li {
        padding: 12px;
        color: black;
        &:hover {
            color: white !important;
            background: #66c0f4;
        }
    }
    .current {
        background: #eaeaea;
    }
    .hidden {
        visibility: hidden;
    }
    .visible {
        visibility: visible;
    }
}
</style>
