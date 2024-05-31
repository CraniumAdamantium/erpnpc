<template>
    <Navbar :userName="userData.name" :companyName="company.name" />
    <div class="px-2 mt-5">
        <div class="w-11/12 ml-auto mr-auto mt-2 transform">
            <h4 class="text-2xl text-white">
                Administracion de Tipo de Cambio
            </h4>
        </div>
    </div>
    <div class="px-2 mt-2">
        <div
            class="grid grid-cols-1 sm:grid-cols-3 text-center text-white content-center"
        >
            <div class="col-span-1 mt-4">
                <h4 class="text-base font-semibold">Moneda principal</h4>
                <input
                    disabled
                    class="text-center text-base font-medium border rounded w-8/12 h-9 mt-2 py-3 px-3 text-white"
                    :value="mainCoin"
                />
            </div>
            <div class="col-span-1 mt-4">
                <h4 class="text-base font-semibold">Moneda alternativa</h4>
                <select
                    id="alternativeCoin"
                    name="alternativeCoin"
                    class="text-center rounded w-8/12 mt-2 py-2 px-3 text-black"
                    v-model="selectedAlternativeCoin"
                >
                    <option value="0" hidden>Selecciona una moneda</option>
                    <option
                        v-for="(value, key) in coins"
                        :key="key"
                        :value="value.value"
                    >
                        {{ value.text }}
                    </option>
                </select>
            </div>
            <div class="col-span-1 mt-4">
                <div class="flex items-center justify-center">
                    <h4 class="text-base font-semibold">Cambio</h4>
                </div>
                <div class="flex items-center justify-center mt-2">
                    <input
                        class="text-center text-base font-medium border rounded-tl rounded-bl w-8/12 h-9 py-3 px-3 text-black"
                        onkeypress="return /[0-9 .]/i.test(event.key)"
                        placeholder="Introduce un cambio"
                        v-model="newExchange"
                        @input="restrictDecimal"
                    />
                    <button
                        class="bg-green-600 hover:bg-green-700 rounded-br rounded-tr"
                        @click="addExchange()"
                    >
                        <svg
                            class="w-9 h-9"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="px-2 mt-5">
        <div class="w-11/12 ml-auto mr-auto mt-2 transform">
            <h4 class="text-2xl text-white">Historial de cambios</h4>
            <DataTable
                class="p-datatable-lg"
                :value="coinCompanyData"
                dataKey="id_coincompany"
                :paginator="true"
                :rows="10"
                responsiveLayout="scroll"
                v-model:filters="filters"
            >
                <template #empty> Vacio </template>
                <Column field="created_at" header="Fecha" :sortable="true">
                    <template #body="slotProps">
                        <span>{{ formatDate(slotProps.data.created_at) }}</span>
                    </template>
                </Column>
                <Column
                    field="main_coin_data.name"
                    header="Moneda Principal"
                    :sortable="true"
                >
                    <template #body="slotProps">
                        <span>{{
                            slotProps.data.m_name +
                            " (" +
                            slotProps.data.m_initials +
                            ")"
                        }}</span>
                    </template>
                </Column>
                <Column
                    field="alternativeCoinData.name"
                    header="Moneda Alternativa"
                    :sortable="true"
                >
                    <template #body="slotProps">
                        <span>{{
                            slotProps.data.id_alternativecoin
                                ? slotProps.data.a_name +
                                  " (" +
                                  slotProps.data.a_initials +
                                  ")"
                                : "-"
                        }}</span>
                    </template>
                </Column>
                <Column
                    field="data.exchange"
                    header="Cambio"
                    :sortable="true"
                    bodyStyle="text-align: right"
                >
                    <template #body="slotProps">
                        <span>{{
                            slotProps.data.exchange == 0
                                ? "-"
                                : slotProps.data.exchange
                        }}</span>
                    </template>
                </Column>
                <Column
                    field="active"
                    header="Activo"
                    :sortable="true"
                    filterMatchMode="contains"
                >
                    <template #body="slotProps">
                        <span
                            :class="
                                'bg-' +
                                (slotProps.data.active == 1 ? 'green' : 'red') +
                                '-600 text-white p-1.5 rounded-lg'
                            "
                            >{{
                                slotProps.data.active == 1
                                    ? "ACTIVO"
                                    : "INACTIVO"
                            }}</span
                        >
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script>
import { Notify } from "notiflix/build/notiflix-notify-aio";
import axios from "axios";
import Navbar from "./SimpleTemplates/Navbar.vue";
import TableManagementDate from "./SimpleTemplates/Table-ManagementDate.vue";
import { FilterMatchMode } from "primevue/api";
import Tooltip from "primevue/tooltip";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import dayjs from "dayjs";

// cargado cool
import { Loading } from "notiflix/build/notiflix-loading-aio";

export default {
    directives: {
        tooltip: Tooltip,
    },
    components: {
        Column,
        DataTable,
        Navbar,
        TableManagementDate,
    },
    data() {
        return {
            company: [],
            loaded_company: false,
            userData: [],
            mainCoin: "",
            coinCompanyData: [],
            coins: [],
            selectedAlternativeCoin: 0,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            newExchange: "",
        };
    },
    mounted() {
        Loading.dots();
        this.setUser();
        this.setData();
    },
    methods: {
        restrictDecimal() {
            this.newExchange = this.newExchange.match(/^\d+\.?\d{0,2}/)[0];
        },
        addExchange() {
            if (this.newExchange == "" || this.newExchange == 0) {
                Notify.failure("Introduce un cambio");
                return;
            }
            if (this.selectedAlternativeCoin == 0) {
                Notify.failure("Selecciona una moneda alternativa");
                return;
            }
            /* Don't attempt an useless call */
            let coin = this.coinCompanyData.find((coin) => coin.active == 1);
            if (coin.id_alternativecoin == this.selectedAlternativeCoin) {
                if (coin.exchange == this.newExchange) {
                    Notify.failure("El cambio no puede ser igual al anterior");
                    return;
                }
            }
            Loading.dots();
            Notify.init({
                clickToClose: true,
            });
            axios
                .post(route("coincompany.api.create"), {
                    id_alternativecoin: this.selectedAlternativeCoin,
                    id_company: this.company.id_company,
                    exchange: this.newExchange,
                })
                .then((response) => {
                    this.setData();
                    this.newExchange = "";
                    this.selectedAlternativeCoin = 1;
                    Loading.remove();
                })
                .catch((error) => {
                    if (error.response.data?.errors) {
                        error.response.data.errors.forEach((error_message) => {
                            console.log(error_message);
                            Notify.failure(error_message);
                        });
                    }
                    Loading.remove();
                });
        },
        formatDate(date) {
            return dayjs(date).format("DD/MM/YYYY HH:mm");
        },
        setUser() {
            axios.get(route("user.data")).then((response) => {
                this.userData = response.data.userData;
                console.log("datos de usuario", this.userData);
            });
        },
        getCoins(id_maincoin) {
            axios.get(route("coins.api.read")).then((response) => {
                //Filter coins, get all except the main coin of this company
                this.coins = response.data.coins.filter(
                    (coin) => coin.id_coin != id_maincoin
                );
                //Then populate select with coins
                //First step, filter
                this.coins = this.coins.map((coin) => {
                    return {
                        value: coin.id_coin,
                        text: coin.name + " (" + coin.initials + ")",
                    };
                });
            });
        },
        getCoinCompanyData(id_company) {
            axios
                .post(route("coincompany.api.getByCompanyId", { id_company }))
                .then((response) => {
                    //Now we get active coin
                    let coin = response.data.coins.find(
                        (coin) => coin.active == 1
                    );
                    this.mainCoin = coin.m_name + " (" + coin.m_initials + ")";
                    this.coinCompanyData = response.data.coins;
                    //Now we know current coin, we can get the data and filter it
                    this.getCoins(coin.id_maincoin);
                    // now set the last selected coin on the select
                    this.newExchange = coin.exchange;
                    this.selectedAlternativeCoin = coin.id_alternativecoin;
                    Loading.remove();
                });
        },
        setData() {
            const company = window.location.pathname.split("/").pop();
            axios
                .get(route("managementdate.api.read", company))
                .then((response) => {
                    this.company = response.data.company;
                    this.getCoinCompanyData(this.company.id_company);
                });
            this.loaded_company = true;
        },
    },
};
</script>
