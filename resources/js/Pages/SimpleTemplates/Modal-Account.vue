<template>
    <div
        v-if="showModal"
        class="transition-opacity top-0 left-0 min-h-full min-w-full z-auto bg-black bg-opacity-40 absolute overflow-y-scroll"
    >
        <div class="flex items-center justify-center min-h-screen">
            <div class="relative px-4 w-full max-w-2xl">
                <div class="relative bg-white rounded-lg shadow">
                    <div
                        class="flex justify-between items-start p-3 rounded-t border-b"
                    >
                        <h3
                            class="text-xl font-semibold text-gray-900 lg:text-2xl"
                        >
                            {{
                                modalButtons == "edit"
                                    ? "Editando cuenta "
                                    : "Añadiendo a "
                            }}

                            {{
                                selectedAccount.name
                                    ? selectedAccount.label
                                    : "Raiz"
                            }}
                        </h3>
                    </div>
                    <div class="relative z-0 left-20 mt-2 mb-5 w-full group">
                        <input
                            v-focus
                            v-model="name"
                            autocomplete="off"
                            type="text"
                            class="block py-2.5 px-0 text-xl w-3/4 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="20"
                            onkeypress="return /[A-Z 0-9]/i.test(event.key)"
                            placeholder=" "
                            required
                        />
                        <label
                            for="name"
                            class="absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                            >Nombre de la cuenta *</label
                        >
                    </div>
                    <div
                        class="flex items-center p-3 space-x-2 rounded-b border-t"
                    >
                        <button
                            @click="cancel"
                            type="button"
                            class="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Cancelar
                        </button>
                        <button
                            @click="create"
                            v-if="modalButtons == 'register'"
                            type="button"
                            class="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Registrar
                        </button>
                        <button
                            @click="update"
                            v-if="modalButtons == 'edit'"
                            type="button"
                            class="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
const focus = {
    mounted: (el) => el.focus(),
};
export default {
    directives: {
        focus,
    },
    props: {
        modalButtons: {
            type: String,
            default: "register",
        },
        showModal: {
            type: Boolean,
            default: false,
        },
        selectedAccount: {
            type: Object,
            default: null,
        },
        id_company: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            name: "",
        };
    },
    watch: {
        selectedAccount() {
            this.name = this.selectedAccount?.name;
        },
    },
    methods: {
        cancel() {
            this.$emit("cancel");
        },

        update() {
            Notify.init({
                clickToClose: true,
            });
            let data = {
                id_account: this.selectedAccount.id_account,
                name: this.name,
                id_company: this.id_company,
            };
            axios
                .post(route("accounts.api.update", data))
                .catch((error) => {
                    for (let i in error?.response?.data?.errors) {
                        console.log(error.response.data.errors);
                        if (
                            error.response.data.errors[i][0] !=
                            error.response.data.message
                        ) {
                            Notify.failure(error.response.data.errors[i][0]);
                        } else {
                            Notify.failure(error.response.data.message);
                        }
                    }
                })
                .then((response) => {
                    if (response?.data?.success) {
                        Notify.success("Cuenta actualizada con éxito");
                        this.$emit("created");
                        this.cancel();
                    }
                });
        },
        create() {
            Notify.init({
                clickToClose: true,
            });
            let data = {
                id_company: this.id_company,
                name: this.name,
            };
            if (this.selectedAccount != {}) {
                data.id_parent = this.selectedAccount.id_account;
            }
            if (this.name == "") {
                Notify.failure("El nombre no puede estar vacio");
                return;
            }
            axios
                .post(route("accounts.api.create", data))
                .catch((error) => {
                    for (let i in error?.response?.data?.errors) {
                        console.log(error.response.data.errors);
                        if (
                            error.response.data.errors[i][0] !=
                            error.response.data.message
                        ) {
                            Notify.failure(error.response.data.errors[i][0]);
                        } else {
                            Notify.failure(error.response.data.message);
                        }
                    }
                })
                .then((response) => {
                    if (response?.data?.success) {
                        this.$emit("created");
                        this.name = "";
                        this.cancel();
                        Notify.success("Cuenta creada con éxito");
                    }
                });
        },
    },
};
</script>
