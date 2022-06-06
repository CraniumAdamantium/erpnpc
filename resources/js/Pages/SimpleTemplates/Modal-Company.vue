<template>
    <!--
        We make a button to display the modal, we can pass certain props to this button like class and value
        There's no way of making v-tooltip.side work with a dynamic call, so we just define it, update this when primevue module is ok
    -->
    <button 
        v-tooltip.bottom="{
            value: tooltipText,
            class: 'text-center',
        }"
        v-bind:class="btnClass"
        type="button"
        @click="showModal = true"
        @close="showModal = false"
        class="ml-2"
    >
        <slot />
    </button>
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
                            {{ modalTitle }} {{ name }}
                        </h3>
                    </div>
                    <div class="p-6 space-y-6">
                        <form>
                            <div class="relative z-0 mb-6 w-full group">
                                <input
                                    v-focus
                                    autocomplete="off"
                                    type="text"
                                    name="name"
                                    id="name"
                                    :class="inputClass"
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    onkeypress="return /[A-Z 0-9´]/i.test(event.key)"
                                    maxlength="50"
                                    placeholder=" "
                                    v-model="name"
                                    required
                                />
                                <label
                                    for="name"
                                    class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                                    >Nombre Empresa *
                                </label>
                                <label
                                    v-if="errorName"
                                    class="absolute text-sm text-red-500 duration-300 transform"
                                    >{{ messageErrorName }}
                                </label>
                            </div>
                            <div class="grid xl:grid-cols-2 xl:gap-6">
                                <div class="relative z-0 mb-6 w-full group">
                                    <input
                                        autocomplete="off"
                                        type="text"
                                        name="nit"
                                        id="nit"
                                        :class="inputClass"
                                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                        onkeypress="return /[0-9]/i.test(event.key)"
                                        maxlength="20"
                                        placeholder=" "
                                        v-model="nit"
                                        required
                                    />
                                    <label
                                        for="nit"
                                        class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >NIT *</label
                                    >
                                    <label
                                        v-if="errorNit"
                                        class="absolute text-sm text-red-500 duration-300 transform"
                                        >{{ messageErrorNit }}
                                    </label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input
                                        autocomplete="off"
                                        type="text"
                                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                        onkeypress="return /[A-Z 0-9]/i.test(event.key)"
                                        maxlength="15"
                                        :class="inputClass"
                                        placeholder=" "
                                        v-model="initials"
                                        required
                                    />
                                    <label
                                        class="absolute text-base text-grey-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Sigla *</label
                                    >
                                    <label
                                        v-if="errorInitials"
                                        class="absolute text-sm text-red-500 duration-300 transform"
                                        >{{ messageErrorInitials }}
                                    </label>
                                </div>
                            </div>
                            <div class="grid xl:grid-cols-2 xl:gap-6">
                                <div class="relative z-0 mb-6 w-full group">
                                    <input
                                        autocomplete="off"
                                        type="email"
                                        name="email"
                                        :class="inputClass"
                                        placeholder=" "
                                        v-model="email"
                                    />
                                    <label
                                        for="email"
                                        class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Correo</label
                                    >
                                    <label
                                        v-if="errorEmail"
                                        class="absolute text-sm text-red-500 duration-300 transform"
                                        >{{ messageErrorEmail }}
                                    </label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <select
                                        id="selectCoin"
                                        name="selectCoin"
                                        :disabled="disabledCoin"
                                        :class="inputClass"
                                        v-model="selectedCoin"
                                    >
                                        <option
                                            v-for="(value, key) in coins"
                                            :key="key"
                                            :value="value.value"
                                        >
                                            {{ value.text }}
                                        </option>
                                    </select>

                                    <label
                                        for="selectCoin"
                                        class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Moneda *</label
                                    >
                                </div>
                            </div>
                            <div class="grid xl:grid-cols-2 xl:gap-6">
                                <div class="relative z-0 mb-6 w-full group">
                                    <input
                                        autocomplete="off"
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                        onkeypress="return /[0-9]/i.test(event.key)"
                                        maxlength="8"
                                        :class="inputClass"
                                        v-model="phone"
                                        placeholder=" "
                                    />
                                    <label
                                        for="phone"
                                        class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Teléfono</label
                                    >
                                    <label
                                        v-if="errorPhone"
                                        class="absolute text-sm text-red-500 duration-300 transform"
                                        >{{ messageErrorPhone }}
                                    </label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <select
                                        name="levelSelect"
                                        :class="inputClass"
                                        v-model="level"
                                    >
                                        <option
                                            v-for="(value, key) in 5"
                                            :key="key"
                                            :value="value + 2"
                                            :selected="level == value + 2"
                                        >
                                            {{ value + 2 }}
                                        </option>
                                    </select>
                                    <label
                                        for="levelSelect"
                                        class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Nivel *</label
                                    >
                                </div>
                            </div>
                            <div class="relative z-0 w-full group">
                                <label
                                    for="address"
                                    class="block mt-3 mb-2 text-base font-medium text-gray-900 dark:text-gray-400"
                                    >Dirección</label
                                >
                                <textarea
                                    v-model="address"
                                    id="address"
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    maxlength="250"
                                    rows="3"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none"
                                    placeholder="Ingresa una dirección (Opcional)"
                                ></textarea>
                                <label
                                    v-if="errorAddress"
                                    class="absolute text-sm text-red-500 duration-300 transform"
                                    >{{ messageErrorAddress }}
                                </label>
                            </div>
                        </form>
                    </div>
                    <div
                        class="flex items-center p-3 space-x-2 rounded-b border-t"
                    >
                        <button
                            @click="
                                [
                                    modalButtons == 'register'
                                        ? cancelCreate()
                                        : cancelEdit(),
                                ]
                            "
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
import "primevue/resources/themes/vela-blue/theme.css";
import "primevue/resources/primevue.css";
import "primeicons/primeicons.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import Tooltip from "primevue/tooltip";

export default {
    directives: {
        tooltip: Tooltip,
        focus,
    },

    emits: {
        "update-data": "updateData",
    },
    props: {
        side: {
            type: String,
            default: "bottom",
        },
        tooltipText: {
            type: String,
            default: "A tooltip",
        },
        btnClass: {
            type: String,
            default:
                "text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2",
        },
        btnContent: {
            type: String,
            default: "Agregar",
        },
        inputClass: {
            type: String,
            default:
                "block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
        },
        modalTitle: String,
        modalButtons: String,
        companyData: {
            type: Object,
            default: {
                id_company: "",
                name: "",
                nit: "",
                initials: "",
                email: "",
                phone: "",
                level: 3,
                address: "",
            },
        },
    },
    data() {
        return {
            id_company: this.companyData.id_company,
            name: this.companyData.name,
            nit: this.companyData.nit,
            initials: this.companyData.initials,
            email: this.companyData.email,
            phone: this.companyData.phone,
            level: this.companyData.level,
            address: this.companyData.address,
            success: false,
            errorInitials: false,
            errorEmail: false,
            errorPhone: false,
            errorName: false,
            errorNit: false,
            errorAddress: false,
            messageErrorName: "",
            messageErrorNit: "",
            messageErrorInitials: "",
            messageErrorEmail: "",
            messageErrorPhone: "",
            messageErrorAddress: "",
            showModal: false,
            coins: [],
            selectedCoin: 2,
            disabledCoin: false,
        };
    },
    watch: {
        showModal: {
            handler(value) {
                if (value) {
                    this.getCoins();
                    this.setCoinOnUpdate();
                }
            },
        },
        companyData: {
            handler() {
                this.id_company = this.companyData.id_company;
                this.name = this.companyData.name;
                this.nit = this.companyData.nit;
                this.initials = this.companyData.initials;
                this.email = this.companyData.email;
                this.phone = this.companyData.phone;
                this.level = this.companyData.level;
                this.address = this.companyData.address;
                this.errorInitials = false;
                this.errorEmail = false;
                this.errorPhone = false;
                this.errorName = false;
                this.errorNit = false;
                this.errorAddress = false;
                this.messageErrorName = "";
                this.messageErrorNit = "";
                this.messageErrorInitials = "";
                this.messageErrorEmail = "";
                this.messageErrorPhone = "";
                this.messageErrorAddress = "";
            },
        },
    },
    methods: {
        setCoinOnUpdate() {
            if (this.companyData.id_company != "") {
                axios
                    .post(route("coincompany.api.getByCompanyId"), {
                        id_company: this.companyData.id_company,
                    })
                    .then((response) => {
                        if (response?.data.coins.length > 1) {
                            //Disable select id there's more than one coin registered
                            this.disabledCoin = true;
                        }
                        //Supposing that a coin is always available
                        let selectCoin = document.getElementById("selectCoin");
                        //Get first where active = 1
                        let coins = response.data.coins.find(
                            (coin) => coin.active == 1
                        );
                        selectCoin.value = coins.id_maincoin;
                        this.selectedCoin = coins.id_maincoin;
                    });
            }
        },
        getCoins() {
            axios
                .get(route("coins.api.read"))
                .then((response) => {
                    this.coins = response.data.coins;
                    //Then process coins

                    this.coins = this.coins.map((coin) => {
                        return {
                            value: coin.id_coin,
                            text: coin.name,
                        };
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        flushErrors() {
            this.errorName = false;
            this.messageErrorName = "";
            this.errorNit = false;
            this.messageErrorNit = "";
            this.errorInitials = false;
            this.messageErrorInitials = "";
            this.errorEmail = false;
            this.messageErrorEmail = "";
            this.errorPhone = false;
            this.messageErrorPhone = "";
            this.errorAddress = false;
            this.messageErrorAddress = "";
        },
        cancelCreate() {
            this.blankErrors();
            this.blankFields();
        },
        cancelEdit() {
            this.disabledCoin = false;
            this.blankErrors();
            this.id_company = this.companyData.id_company;
            this.name = this.companyData.name;
            this.nit = this.companyData.nit;
            this.initials = this.companyData.initials;
            this.email = this.companyData.email;
            this.phone = this.companyData.phone;
            this.level = this.companyData.level;
            this.address = this.companyData.address;
            /* Better to make a ajax call than  checking which value didn't changez */
        },
        blankFields() {
            this.id_company = "";
            this.name = "";
            this.nit = "";
            this.initials = "";
            this.email = "";
            this.phone = "";
            this.level = "3";
            this.address = "";
        },
        blankErrors() {
            /* If we are editing, don't clean this shit */
            this.showModal = false;
            this.errorName = false;
            this.errorNit = false;
            this.errorInitials = false;
            this.errorEmail = false;
            this.errorAddress = false;
            this.errorPhone = false;
        },
        removeEmptyValues(data) {
            let array = data;
            for (let key in array) {
                if (array[key] == "" || array[key] == null) {
                    delete array[key];
                }
            }
            return array;
        },
        setErrors(errors) {
            for (let key in errors) {
                if (key == "name") {
                    this.errorName = true;
                    this.messageErrorName = errors[key][0];
                }
                if (key == "nit") {
                    this.errorNit = true;
                    this.messageErrorNit = errors[key][0];
                }
                if (key == "initials") {
                    this.errorInitials = true;
                    this.messageErrorInitials = errors[key][0];
                }
                if (key == "email") {
                    this.errorEmail = true;
                    this.messageErrorEmail = errors[key][0];
                }
                if (key == "phone") {
                    this.errorPhone = true;
                    this.messageErrorPhone = errors[key][0];
                }
                if (key == "address") {
                    this.errorAddress = true;
                    this.messageErrorAddress = errors[key][0];
                }
            }
        },
        create() {
            let dataToSet = {
                name: this.name,
                nit: this.nit ? this.nit.toString() : null,
                initials: this.initials,
                email: this.email,
                phone: this.phone ? this.phone.toString() : null,
                level: this.level,
                address: this.address,
                id_coin: this.selectedCoin,
            };
            /* We remove empty keys, the backend verifies the values if the key is present, so we just remove them. */
            dataToSet = this.removeEmptyValues(dataToSet);
            axios
                .post(route("companies.api.create"), dataToSet)
                .catch((error) => {
                    this.flushErrors();
                    /* Check every response key to assign it to the modal in the specific field*/
                    this.setErrors(error.response.data.errors);
                    //Notify.failure("Error al crear");
                })
                .then((response) => {
                    if (response?.data?.success) {
                        Notify.success("Empresa creada con éxito");
                        this.showModal = false;
                        this.$emit("update-data");
                        /*
                Empty values
            */
                        this.cancelCreate();
                        this.level = "3";
                    }
                });
        },
        update() {
            let dataToRefresh = {
                id_company: this.id_company,
                name: this.name,
                nit: this.nit ? this.nit.toString() : null,
                initials: this.initials,
                email: this.email,
                phone: this.phone ? this.phone.toString() : null,
                level: this.level,
                address: this.address,
                id_coin: this.selectedCoin,
            };
            /* We remove empty keys, the backend verifies the values if the key is present, so we just remove them. */
            dataToRefresh = this.removeEmptyValues(dataToRefresh);
            axios
                .post(route("companies.api.update"), dataToRefresh)
                .catch((error) => {
                    this.flushErrors();
                    /* Check every response key to assign it to the modal in the specific field*/
                    this.setErrors(error.response.data.errors);
                    //Notify.failure("Error al actualizar");
                })
                .then((response) => {
                    try {
                        if (response.data.success) {
                            Notify.success("Se ha actualizado la empresa");
                            this.$emit(
                                "update-data",
                                this.name,
                                this.id_company
                            );
                            this.showModal = false;
                        }
                    } catch (error) {
                        console.log("No se pudo completar la petición");
                    }
                });
        },
    },
};
</script>
