<template>
    <div class="flex items-center justify-center" style="min-height: 90vh">
        <div class="p-12 bg-white mx-auto rounded-2xl w-100">
            <div class="mb-4">
                <h3 class="font-semibold text-2xl text-gray-800">Login ERP</h3>
            </div>
            <div class="space-y-5">
                <div class="space-y-2">
                    <label
                        class="text-sm font-medium text-gray-700 tracking-wide"
                        >Usuario</label
                    >
                    <input
                        required
                        class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                        type=""
                        placeholder="Ingrese su usuario"
                        v-model="user"
                    />
                </div>
                <div class="space-y-2">
                    <label
                        class="mb-5 text-sm font-medium text-gray-700 tracking-wide"
                    >
                        Contraseña
                    </label>
                    <input
                        required
                        class="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        v-model="password"
                    />
                </div>
                <div class="flex items-center justify-between" v-if="error">
                    <div role="alert">
                        <div
                            class="bg-red-500 text-white font-bold rounded-t px-4 py-2"
                        >
                            Error
                        </div>
                        <div
                            class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                        >
                            <p>
                                {{ error }}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        class="w-full flex justify-center bg-red-400 hover:bg-red-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                        @click="login"
                    >
                        Ingresar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";

export default {
    props: ["error"],
    data() {
        return {
            user: "",
            password: "",
        };
    },

    methods: {
        login() {
            Inertia.post(
                route("login"),
                {
                    user: this.user,
                    password: this.password,
                },
                {
                    preserveScroll: true,
                }
            );
        },
    },
};
</script>
