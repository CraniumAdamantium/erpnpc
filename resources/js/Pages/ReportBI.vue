<template>
    <Navbar :userName="userData.name" :companyName="company.name" />
    <div class="px-2 mt-5">
        <div class="w-11/12 ml-auto mr-auto mt-2 transform">
            <div class="flex">
                <h4 class="text-2xl text-white mb-2">
                    Reporte de Balance Inicial
                </h4>
                <div class="flex ml-auto items-center">
                    <button
                        @click="goReport"
                        v-tooltip.bottom="{
                            value: 'Generar reporte',
                            class: 'text-center',
                        }"
                        class="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <p class="text-sm text-white">
                ▮ Para generar el reporte selecciona una gestión y una moneda
            </p>
        </div>
    </div>
    <div class="w-11/12 ml-auto mr-auto px-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 text-white">
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Fecha</h4>
                <select
                    class="font-medium border rounded w-100 h-9 px-3 text-black"
                    v-model="selectedManagement"
                >
                    <option
                        v-for="(value, i) in vmanagement_dates"
                        :key="i"
                        :value="value.value"
                    >
                        {{ value.text }}
                    </option>
                </select>
            </div>
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Moneda</h4>
                <select
                    class="font-medium border rounded w-100 h-9 px-3 text-black"
                    v-model="selectedCoin"
                >
                    <option
                        v-for="(value, i) in coins"
                        :key="i"
                        :value="value.value"
                    >
                        {{ value.text }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import DropDownUser from "./SimpleTemplates/DropDownUser.vue";
import Navbar from "./SimpleTemplates/Navbar.vue";
import Tooltip from "primevue/tooltip";
import { FilterMatchMode } from "primevue/api";
import Calendar from "primevue/calendar";
import { Loading } from "notiflix/build/notiflix-loading-aio";

export default {
    directives: {
        tooltip: Tooltip,
    },
    components: {
        DropDownUser,
        Navbar,
        Calendar,
    },
    data() {
        return {
            selectedCoin: 0,
            selectedManagement: 0,
            company: [],
            loaded_company: false,
            userData: [],
            coins: [],
            vmanagement_dates: [],
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            date: "",
        };
    },
    mounted() {
        this.setUser();
        this.setData();
    },
    methods: {
        goReport() {
            window.open(
                `http://queeserp.tk:8080/ERPNPC/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports&reportUnit=%2Freports%2FReporteCuenta&standAlone=true&id_user=${this.userData.id_user}&id_company=${this.company.id_company}&j_username=joeuser&j_password=123&sessionDecorator=no`
            );
        },
        setUser() {
            axios
                .get(route("user.data"))
                .catch((error) => {
                    console.log(error);
                })
                .then((response) => {
                    this.userData = response.data.userData;
                });
        },
        setData() {
            const company = window.location.pathname.split("/").pop();
            axios
                .get(route("managementdate.api.read", company))
                .then((response) => {
                    this.company = response.data.company;
                    this.getSelectedCoinsByCompany(this.company.id_company);
                    this.getManagement_dates();
                    let today = new Date();
                    this.date = today;
                });
            this.loaded_company = true;
        },
        getSelectedCoinsByCompany(id_company) {
            axios
                .post(
                    route("coincompany.api.getByCompanyId", {
                        id_company,
                    })
                )
                .then((response) => {
                    let active = response.data.coins.find((trash) => {
                        return trash.active == 1;
                    });
                    // console.log("Active", active);
                    // console.log("response: ", active.id_maincoin);
                    this.selectedCoin = active.id_maincoin;
                    this.coins = [
                        {
                            value: active.id_maincoin,
                            text: `${active.m_name} (${active.m_initials})`,
                        },
                        {
                            value: active.id_alternativecoin,
                            text: `${active.a_name} (${active.a_initials})`,
                        },
                    ];
                });
        },
        getManagement_dates() {
            const company = window.location.pathname.split("/").pop();
            axios
                .get(
                    route("managementdate.api.read", {
                        company,
                    })
                )
                .then((response) => {
                    console.log(response.data.company.management_dates);
                    let active = [];
                    let mdates = response.data.company.management_dates;
                    for (let i = 0; i < mdates.length; i++) {
                        if (mdates[i].status == 1) {
                            active[i] = mdates[i];
                        }
                    }
                    this.selectedManagement = active[0].id_management;
                    this.vmanagement_dates = [
                        {
                            value: active[0].id_management,
                            text: active[0].name,
                        },
                        {
                            value: active[1].id_management,
                            text: active[1].name,
                        },
                    ];
                });
        },
    },
};
</script>
