<template>
    <div id="app">
        <div class="aselect" :data-value="value" :data-list="list">
            <div class="cursor-pointer selector" @click="toggle()">
                <div class="label">
                    <button>
                        <span>{{ value }}</span>
                    </button>
                </div>
                <div class="arrow" :class="{ expanded: visible }"></div>
                <div :class="{ hidden: !visible, visible }">
                    <ul class="cursor-pointer">
                        <li
                            :class="{ current: item === value }"
                            :key="item"
                            v-for="item in list"
                            @click="takeMeTo(item[1])"
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
        toggle() {
            this.visible = !this.visible;
        },
        takeMeTo(myRoute) {
            if (myRoute == "logout") {
                history.pushState(null, document.title, location.href);
                window.addEventListener("popstate", function (event) {
                    console.log(event);
                    history.pushState(null, document.title, location.href);
                });
                window.location.href = route("logout");
            }
            Inertia.get(route(myRoute));
        },
    },
};
</script>
<style lang="scss" scoped>
body {
    background: STEELBLUE;
}
.aselect {
    width: 180px;
    margin: 20px auto;
    .selector {
        border: 2px gainsboro;
        border-radius: 4px;
        background: #171a21;
        position: relative;
        z-index: 1;
        .arrow {
            position: absolute;
            right: 10px;
            top: 40%;
            width: 0;
            height: 0;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 10px solid #888;
            transform: rotateZ(0deg) translateY(0px);
            transition-duration: 0.3s;
            transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
        }
        .expanded {
            transform: rotateZ(180deg) translateY(2px);
        }
        .label {
            display: block;
            padding: 12px;
            font-size: 16px;
            color: rgb(255, 255, 255);
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
        z-index: 1;
        background: #fff;
    }
    li {
        padding: 12px;
        color: black;
        &:hover {
            color: white;
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
