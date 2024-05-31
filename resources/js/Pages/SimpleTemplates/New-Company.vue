<template>
    <div
        id="modaltrucho"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    >
        <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow">
                <div
                    class="flex justify-between items-start p-3 rounded-t border-b"
                >
                    <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl">
                        Registro Empresa
                    </h3>
                </div>

                <div class="p-6 space-y-6">
                    <div class="relative z-0 mb-6 w-full group">
                        <input
                            v-model="name"
                            autocomplete="off"
                            type="text"
                            name="name"
                            id="name"
                            class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            onkeypress="return /[A-Z 0-9]/i.test(event.key)"
                            maxlength="15"
                            placeholder=" "
                            required
                        />
                        <label
                            for="name"
                            class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                            >Nombre Empresa *</label
                        >
                    </div>
                    <div class="grid xl:grid-cols-2 xl:gap-6">
                        <div class="relative z-0 mb-6 w-full group">
                            <input
                                v-model="nit"
                                autocomplete="off"
                                type="text"
                                name="nit"
                                id="nit"
                                class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                onkeypress="return /[0-9]/i.test(event.key)"
                                maxlength="15"
                                placeholder=" "
                                required
                            />
                            <label
                                for="nit"
                                class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >NIT *</label
                            >
                        </div>
                        <div class="relative z-0 mb-6 w-full group">
                            <input
                                v-model="initials"
                                autocomplete="off"
                                type="text"
                                name="initial"
                                id="initial"
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                onkeypress="return /[A-Z 0-9]/i.test(event.key)"
                                maxlength="10"
                                class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                for="initial"
                                class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >Sigla *</label
                            >
                        </div>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input
                            v-model="email"
                            autocomplete="off"
                            type="email"
                            name="email"
                            class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            for="email"
                            class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >Correo</label
                        >
                    </div>

                    <div class="grid xl:grid-cols-2 xl:gap-6">
                        <div class="relative z-0 mb-6 w-full group">
                            <input
                                v-model="phone"
                                autocomplete="off"
                                type="text"
                                name="phone"
                                id="phone"
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                onkeypress="return /[0-9]/i.test(event.key)"
                                maxlength="8"
                                class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                for="phone"
                                class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >Teléfono
                            </label>
                        </div>
                        <div class="relative z-0 mb-6 w-full group">
                            <select
                                v-model="level"
                                name="select"
                                class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            >
                                <option disabled selected value="">
                                    Selecciona un nivel *
                                </option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                    </div>
                    <div class="relative z-0 w-full group">
                        <label
                            for="address"
                            class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400"
                            >Dirección</label
                        >
                        <textarea
                            v-model="address"
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="250"
                            rows="3"
                            class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ingresa una dirección"
                        ></textarea>
                    </div>
                </div>
                <div
                    class="flex items-center p-3 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
                >
                    <button
                        @click="register"
                        data-modal-toggle="modaltrucho"
                        type="button"
                        id="register"
                        class="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Registrar
                    </button>
                    <button
                        data-modal-toggle="modaltrucho"
                        type="button"
                        class="text-white bg-rose-600 hover:bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    setup() {
        return {
            name: "",
            nit: "",
            initials: "",
            email: "",
            phone: "",
            level: "",
            address: "",
        };
    },
    methods: {
        register() {
            axios
                .post(route("companies.api.create"), this.setup)
                .then((response) => {
                    console.log(this.setup);
                    if (response.data.success) {
                        //Do something
                        console.log("OK");
                    }
                });
        },
    },
};
</script>
