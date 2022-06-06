<template>
    <Navbar :userName="user.name" :companyName="company.name" />
    <div class="px-2 mt-5">
        <div class="w-11/12 ml-auto mr-auto mt-2 transform">
            <div class="flex">
                <h4 class="text-2xl text-white mb-2">
                    Reporte de Libro Diario
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
                ▮ Para generar el reporte selecciona una gestión, periodo y una
                moneda
            </p>
        </div>
    </div>
    <div class="w-11/12 ml-auto mr-auto px-2">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-white">
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Gestion</h4>
                <vSelect
                    :options="computed_company_management_dates"
                    v-model="data.management_date_selected"
                    label="text"
                    class="bg-white text-black w-full z-0"
                >
                    <template #no-options> No hay gestiones. </template>
                    <template #selected-option-container="{ option }">
                        <div class="w-full">
                            <span
                                class="absolute left-2 top-1 truncate w-full"
                                >{{ option.text }}</span
                            >
                        </div>
                        <!-- Si vas a editar esto intenta que quede responsive -->
                    </template>
                </vSelect>
            </div>
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Periodo</h4>
                <vSelect
                    :options="computed_company_periods"
                    v-model="data.management_date_selected_periods"
                    label="text"
                    class="bg-white text-black w-full z-0"
                >
                    <template #no-options> No hay periodos. </template>
                    <template #selected-option-container="{ option }">
                        <div class="w-full">
                            <span
                                class="absolute left-2 top-1 truncate w-full"
                                >{{ option.text }}</span
                            >
                        </div>
                    </template>
                </vSelect>
            </div>
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Moneda</h4>
                <vSelect
                    :options="computed_coins_list"
                    v-model="data.coin_selected"
                    label="text"
                    class="bg-white text-black w-full z-0"
                >
                    <template #no-options> No hay monedas. </template>
                    <template #selected-option-container="{ option }">
                        <div class="w-full">
                            <span
                                class="absolute left-2 top-1 truncate w-full"
                                >{{ option.text }}</span
                            >
                        </div>
                    </template>
                </vSelect>
            </div>
        </div>
    </div>
</template>
<script>
import "vue-select/dist/vue-select.css";
import axios from "axios";
import DropDownUser from "./SimpleTemplates/DropDownUser.vue";
import Navbar from "./SimpleTemplates/Navbar.vue";
import Tooltip from "primevue/tooltip";
import vSelect from "vue-select";
import Calendar from "primevue/calendar";

import { computed, onBeforeMount, reactive } from "@vue/runtime-core";
//V select

export default {
    components: {
        DropDownUser,
        Navbar,
        Calendar,
        vSelect,
    },
    directives: {
        tooltip: Tooltip,
    },
    data() {
        return {
            auxmoneda: 0,
        };
    },
    props: ["company", "user"],
    computed: {
        computed_company_management_dates() {
            return this.company.management_dates.map((management_date) => {
                return {
                    text: management_date.name,
                    value: management_date.id_management,
                };
            });
        },
        computed_company_periods() {
            let comp = this.company.management_dates.filter(
                (management_date) => {
                    console.log(this.data);
                    return (
                        management_date.id_management ==
                        this.data.management_date_selected.value
                    );
                }
            );
            let periods = comp[0]?.periods?.map((periodo) => {
                return {
                    text: periodo.name,
                    value: periodo.id_period,
                };
            });
            return periods;
        },
        computed_coins_list() {
            let active = this.company.coin_companies.find(
                (coin) => coin.active == 1
            );
            this.auxmoneda = active.main_coin.id_coin;
            console.log();
            return [
                {
                    text: active.main_coin.name,
                    value: active.main_coin.id_coin,
                },
                {
                    text: active.alternative_coin.name,
                    value: active.alternative_coin.id_coin,
                },
            ];
        },
    },
    setup(props) {
        console.log(props.company.management_dates);
        const data = reactive({
            management_date_selected: {},
            management_date_selected_periods: {},
            coin_selected: {},
        });
        return {
            data,
        };
    },
    methods: {
        goReport() {
            console.log(this.data.coin_selected);
            if (this.auxmoneda == this.data.coin_selected.value) {
                window.open(
                    `http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FREPORTELIBRODIARIODOS&standAlone=true&companyID=${this.company.id_company}&userID=${this.user.id_user}&periodoID=${this.data.management_date_selected_periods.value}&gestionID=${this.data.management_date_selected.value}&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no`
                );
            } else {
                window.open(
                    `http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FREPORTELIBRODIARIODOSALT&standAlone=true&companyID=${this.company.id_company}&userID=${this.user.id_user}&periodoID=${this.data.management_date_selected_periods.value}&gestionID=${this.data.management_date_selected.value}&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no`
                );
            }
        },
    },
};
</script>
