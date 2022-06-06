<template>
    <div class="mt-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 mb-2">
            <div
                class="col-span-1 self-end justify-center order-last sm:order-first"
            >
                <button
                    @click="
                        $emit('goBack');
                        $emit('setTitleUp', `Administración de gestión`);
                    "
                    v-tooltip.right="{
                        value: 'Volver a gestiones',
                        class: 'text-center',
                    }"
                    class="bg-sky-600 hover:bg-sky-700 text-white rounded-lg px-4 py-2.5"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"
                        />
                    </svg>
                </button>
            </div>
            <div class="col-span-1 self-end mb-2 sm:mb-0">
                <div class="flex justify-center sm:justify-end space-x-2">
                    <button
                        :disabled="management.status == 0"
                        @click="showModalCreate = true"
                        v-tooltip.bottom="{
                            value: 'Añadir un periodo',
                            class: 'text-center',
                        }"
                        class="disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5"
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
                                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            ></path>
                        </svg>
                    </button>
                    <button
                        @click="goReport"
                        v-tooltip.bottom="{
                            value: 'Generar reportes',
                            class: 'text-center',
                        }"
                        class="disabled:bg-indigo-800 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg px-4 py-2.5"
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
                    <button
                        :disabled="
                            Object.keys(selectedPeriod).length == 0
                                ? true
                                : management.status == 0
                                ? true
                                : false
                        "
                        @click="showModalEdit = true"
                        v-tooltip.bottom="{
                            value: 'Edita periodo',
                            class: 'text-center',
                        }"
                        class="disabled:bg-yellow-600 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2.5"
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
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            ></path>
                        </svg>
                    </button>
                    <button
                        @click="deletePeriod()"
                        :disabled="
                            Object.keys(selectedPeriod).length == 0
                                ? true
                                : false
                        "
                        v-tooltip.left="{
                            value: 'Eliminar esta periodo',
                            class: 'text-center',
                        }"
                        class="disabled:bg-rose-800 bg-rose-500 hover:bg-rose-600 text-white rounded-lg px-4 py-2.5"
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
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <DataTable
        class="p-datatable-lg"
        :value="periodsData"
        dataKey="id_period"
        :paginator="true"
        :rows="10"
        responsiveLayout="scroll"
        v-model:selection="selectedPeriod"
        selectionMode="single"
        v-model:filters="filters"
        :style="{}"
    >
        <template #empty> No hay periodos, ¡añade uno! </template>
        <Column
            field="name"
            header="Nombre"
            :sortable="true"
            filterMatchMode="contains"
        >
        </Column>
        <Column
            field="start_date"
            header="Fecha inicio"
            :sortable="false"
            filterMatchMode="contains"
        >
        </Column>
        <Column
            field="end_date"
            header="Fecha fin"
            :sortable="false"
            filterMatchMode="contains"
        >
        </Column>
        <Column
            field="status"
            header="Estado"
            :sortable="true"
            filterMatchMode="contains"
        >
            <template #body="slotProps">
                <span
                    :class="
                        'bg-' +
                        (slotProps.data.status == 1 ? 'green' : 'red') +
                        '-600 text-white p-1.5 rounded-lg'
                    "
                    >{{
                        slotProps.data.status == 1 ? "ABIERTO" : "CERRADO"
                    }}</span
                >
            </template>
        </Column>
    </DataTable>
    <!-- Modal for creating-->
    <ModalPeriod
        :managementData="management"
        :periodDates="periodsData"
        :id_management="management.id_management"
        :showModal="showModalCreate"
        modalTitle="Crear periodo"
        modalButtons="register"
        @close="showModalCreate = false"
        @updatePeriods="setDataTable"
    />
    <!-- Modal for editing -->
    <ModalPeriod
        :managementData="management"
        :periodData="selectedPeriod"
        :periodDates="periodsData"
        :id_management="management.id_management"
        :id_company="management.id_company"
        :id_user="management.id_user"
        :showModal="showModalEdit"
        modalTitle="Editar Periodo"
        modalButtons="edit"
        @close="showModalEdit = false"
        @updatePeriods="setDataTable"
        @cleanSelectedPeriod="selectedPeriod = {}"
        :realstartdate="selectedPeriod.start_date"
        :realenddate="selectedPeriod.end_date"
    />
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import "primevue/resources/themes/vela-blue/theme.css";
import "primevue/resources/primevue.css";
import "primeicons/primeicons.css";
import ModalPeriod from "./Modal-Period.vue";
import { FilterMatchMode } from "primevue/api";
import axios from "axios";
import Tooltip from "primevue/tooltip";
import dayjs from "dayjs";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default {
    directives: {
        tooltip: Tooltip,
    },
    emits: ["updateData", "goBack", "setTitleUp"],
    components: {
        DataTable,
        Column,
        ModalPeriod,
    },
    props: {
        management: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            periodsData: [],
            selectedPeriod: {},
            showModalCreate: false,
            showModalEdit: false,
        };
    },
    watch: {
        management: {
            handler() {
                this.setDataTable();
            },
        },
    },
    mounted() {
        this.setDataTable();
        this.$emit(
            "setTitleUp",
            `Administración de gestión -> ${this.management.name} [ ${this.management.start_date} - ${this.management.end_date} ]`
        );
    },
    methods: {
        goReport() {
            window.open(
                `
                http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReportePeriodo&standAlone=true&id_user=${this.management.id_user}&id_company=${this.management.id_company}&id_management=${this.management.id_management}&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no
                `
            );
        },
        deletePeriod() {
            Confirm.init({
                titleColor: "#FF0000",
                messageColor: "#FF0000",
                okButtonBackground: "#FF0000",
            });
            Confirm.show(
                "¿Deseas eliminar el periodo?",
                "Estás a punto de eliminar el periodo " +
                    this.selectedPeriod.name,
                "Eliminar",
                "Cancelar",
                () => {
                    Loading.standard({
                        clickToClose: false,
                        svgSize: "200",
                    });
                    let params = {
                        id_period: this.selectedPeriod.id_period,
                        id_user: this.management.id_user,
                        id_company: this.management.id_company,
                        start_date: this.selectedPeriod.start_date,
                        end_date: this.selectedPeriod.end_date,
                    };
                    Notify.init({
                        clickToClose: true,
                    });
                    console.log("pasando trash", params);
                    axios
                        .post(route("period.api.delete"), params)
                        .then((res) => {
                            if (res.data?.success) {
                                this.setDataTable();
                                Notify.success("Periodo eliminado");
                                this.selectedPeriod = {};
                            } else {
                                Notify.failure(res.data.message);
                                this.selectedPeriod = {};
                            }
                            Loading.remove(250);
                        })
                        .catch((err) => {
                            // console.error(err);
                            Notify.failure(err);
                            Loading.remove(250);
                        });
                }
            );
            //
        },
        formatDate(data) {
            data.forEach((val) => {
                val.start_date = dayjs(val.start_date).format("DD/MM/YYYY");
                val.end_date = dayjs(val.end_date).format("DD/MM/YYYY");
            });
        },
        setDataTable() {
            axios
                .get(route("period.api.read", this.management.id_management))
                .then((response) => {
                    this.periodsData = response.data;
                    // console.log("fecha original", this.periodsData);
                    this.formatDate(this.periodsData);
                    // console.log("fecha transformada🤨", this.periodsData);
                });
        },
    },
};
</script>
