<template>
    <div v-if="showManagementDate">
        <div class="mt-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 mb-2">
                <div
                    class="col-span-1 self-end justify-center order-last sm:order-first"
                >
                    <div class="self-center items-center content-center">
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText
                                type="text"
                                v-model="filters['global'].value"
                                placeholder="Buscar"
                            />
                        </span>
                    </div>
                </div>

                <div class="col-span-1 self-end mb-2 sm:mb-0">
                    <div class="flex justify-center sm:justify-end space-x-2">
                        <button
                            @click="showModalCreate = true"
                            v-tooltip.bottom="{
                                value: 'Añadir una gestión',
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
                                Object.keys(selectedDate).length == 0
                                    ? true
                                    : selectedDate.status == 0
                                    ? true
                                    : false
                            "
                            @click="showModalEdit = true"
                            v-tooltip.bottom="{
                                value: 'Edita la gestión',
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
                            :disabled="
                                Object.keys(selectedDate).length == 0
                                    ? true
                                    : false
                            "
                            @click="goToPeriods()"
                            v-tooltip.bottom="{
                                value: 'Ver periodos de esta gestión',
                                class: 'text-center',
                            }"
                            class="disabled:bg-sky-800 bg-sky-500 hover:bg-sky-600 text-white rounded-lg px-4 py-2.5"
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
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                            </svg>
                        </button>
                        <button
                            :disabled="
                                Object.keys(selectedDate).length == 0
                                    ? true
                                    : false
                            "
                            @click="deleteManagement()"
                            v-tooltip.left="{
                                value: 'Eliminar esta gestión',
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
            :value="dates"
            dataKey="id_management"
            :paginator="true"
            :rows="10"
            responsiveLayout="scroll"
            v-model:selection="selectedDate"
            selectionMode="single"
            v-model:filters="filters"
            :style="{}"
        >
            <template #empty> No hay gestiones, ¡añade una! </template>
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
        <!-- Modal for create -->
        <ModalManagementDate
            :allDates="company.management_dates"
            :id_company="company.id_company"
            :showModal="showModalCreate"
            modalTitle="Crea una gestión"
            modalButtons="register"
            @close="showModalCreate = false"
            @update-data="$emit('update-data'), selectedDate"
        />
        <!-- Modal for edit -->
        <ModalManagementDate
            :allDates="company.management_dates"
            :id_company="company.id_company"
            :showModal="showModalEdit"
            modalTitle="Editando gestión"
            modalButtons="edit"
            @close="showModalEdit = false"
            :managementData="selectedDate"
            @eraseSelection="selectedDate = {}"
            @update-data="$emit('update-data')"
        />
    </div>
    <div v-else>
        <TablePeriods
            @goBack="showManagementDate = true"
            @setTitleUp="setTitleUp"
            :management="selectedDate"
        />
    </div>
</template>
<script>
import "primevue/resources/themes/vela-blue/theme.css";
import "primevue/resources/primevue.css";
import "primeicons/primeicons.css";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ModalManagementDate from "./Modal-Management.vue";
import { FilterMatchMode } from "primevue/api";
import dayjs from "dayjs";
import Tooltip from "primevue/tooltip";
import axios from "axios";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import TablePeriods from "./Table-Periods.vue";
//Set options for notify

export default {
    directives: {
        tooltip: Tooltip,
    },
    /* With emits you tell the parent component to do something */
    emits: ["update-data", "setTitleUp"],
    props: {
        company: {
            type: Object,
            default: {},
        },
    },
    components: {
        DataTable,
        Column,
        InputText,
        ModalManagementDate,
        TablePeriods,
    },
    /* Because we can't edit props directly we must define data from props */
    data() {
        return {
            dates: this.company.management_dates,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            currentCellId: "",
            showModalCreate: false,
            showModalEdit: false,
            searchValue: "",
            selectedDate: {},
            showManagementDate: true,
        };
    },
    mounted() {
        this.dates != undefined ? this.transformDates() : "";
    },
    /* Also this props are updated with a watcher */
    watch: {
        company: {
            handler() {
                this.dates = this.company.management_dates;
                this.selectedDate = {};
                this.transformDates();
            },
        },
    },
    methods: {
        goReport() {
            window.open(
                `http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReporteGestion&standAlone=true&id_user=${this.company.id_user}&id_company=${this.company.id_company}&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no`
            );
        },
        log(message) {
            console.log(message);
        },
        setTitleUp(title) {
            this.$emit("setTitleUp", title);
        },
        goToPeriods() {
            this.showManagementDate = false;
        },
        deleteManagement() {
            console.log(this.selectedDate);
            Confirm.init({
                titleColor: "#FF0000",
                messageColor: "#FF0000",
                okButtonBackground: "#FF0000",
            });
            Confirm.show(
                "¿Deseas eliminar la gestión?",
                "Estás a punto de eliminar la gestión " +
                    this.selectedDate.name,
                "Eliminar",
                "Cancelar",
                () => {
                    Loading.standard({
                        clickToClose: false,
                        svgSize: "200",
                    });
                    let params = {
                        id_management: this.selectedDate.id_management,
                    };
                    Notify.init({
                        clickToClose: true,
                    });
                    axios
                        .post(route("managementdate.api.delete"), params)
                        .then((res) => {
                            if (res.data?.success) {
                                this.$emit("update-data");
                                Notify.success("Gestión eliminada");
                                this.selectedDate = {};
                            } else {
                                Notify.failure(res.data.message);
                            }
                            Loading.remove(250);
                        })
                        .catch((err) => {
                            console.error(err);
                            Notify.failure("Error al eliminar la gestión");
                        });
                }
            );
            //
            console.log(this.selectedDate);
            let params = {
                id_management: this.selectedDate.id_management,
            };
        },
        setColorForDate(checkDate) {
            /* First we make the first checkDate, calendar returns it in 3 objects (day, month, year) so we make it a str */
            let month = parseFloat(checkDate.month) + parseFloat(1); //Sum 1 because months are from 0 to 11
            let checkDateStr =
                checkDate.year + "/" + month + "/" + checkDate.day;
            let sendColor = "white";
            /* Then we check if the date is valid*/
            for (let i = 0; i < this.dates.length; i++) {
                if (
                    dayjs(checkDateStr).isBetween(
                        this.dates[i].start_date, //Start
                        this.dates[i].end_date, //End
                        null, //Limit
                        "[]" //Include
                    )
                ) {
                    sendColor = "red";
                    if (this.dates[i].id_management == this.currentCellId) {
                        sendColor = "green";
                    }
                }
            }
            return sendColor;
        },
        /* Transform dates to YYYY/MM/DD */
        transformDates() {
            this.dates.forEach((date) => {
                date.start_date = dayjs(date.start_date).format("DD/MM/YYYY");
                date.end_date = dayjs(date.end_date).format("DD/MM/YYYY");
            });
        },
    },
};
</script>
<!-- Custom style for selected row-->
<style>
tr.p-highlight {
    background: rgba(100, 181, 246, 0.5) !important;
    color: rgba(255, 255, 255, 0.87) !important;
}
</style>
