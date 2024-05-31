<template>
    <div class="mt-5">
        {{ selectedReceipt }}
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
                        class="disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5"
                        v-tooltip.bottom="{
                            value: 'Crear comprobante',
                            class: 'text-center',
                        }"
                        @click="newReceipt"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="white"
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
                        class="disabled:bg-indigo-800 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg px-4 py-2.5"
                        v-tooltip.bottom="{
                            value: 'Generar reportes',
                            class: 'text-center',
                        }"
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
                        class="disabled:bg-yellow-600 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2.5"
                        :disabled="Object.keys(selectedReceipt).length == 0"
                        v-tooltip.left="{
                            value: 'Editar comprobante',
                            class: 'text-center',
                        }"
                        @click="editReceipt"
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
                </div>
            </div>
        </div>
    </div>
    <DataTable
        class="p-datatable-lg"
        :value="receipts"
        dataKey="id_receipt"
        :paginator="true"
        :rows="10"
        responsiveLayout="scroll"
        v-model:selection="selectedReceipt"
        selectionMode="single"
        v-model:filters="filters"
    >
        <template #empty> No hay comprobantes, ¡añade uno! </template>
        <Column
            field="serial_number"
            header="Serie"
            :sortable="true"
            filterMatchMode="contains"
        >
        </Column>

        <Column
            field="comment"
            header="Glosa"
            :sortable="true"
            filterMatchMode="contains"
        >
        </Column>

        <Column
            field="date"
            header="Fecha"
            :sortable="true"
            filterMatchMode="contains"
        >
        </Column>
        <Column
            field="receipt_type"
            header="Tipo Comprobante"
            :sortable="true"
            filterMatchMode="contains"
        >
        </Column>
        <Column
            field="name"
            header="Moneda"
            :sortable="true"
            filterMatchMode="contains"
        >
        </Column>
    </DataTable>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import dayjs from "dayjs";
import { FilterMatchMode } from "primevue/api";
import Tooltip from "primevue/tooltip";
import InputText from "primevue/inputtext";

export default {
    directives: {
        tooltip: Tooltip,
    },
    emits: ["update-data"],
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
    },
    data() {
        return {
            receipts: this.company.receipts,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            selectedReceipt: {},
            userData: [],
        };
    },
    mounted() {
        this.receipts != undefined ? this.transformData() : "";
    },
    watch: {
        company: {
            handler() {
                this.receipts = this.company.receipts;
                this.selectedReceipt = {};
                this.transformData();
            },
        },
    },
    methods: {
        editReceipt() {},
        getReceiptType(num) {
            /* <option value="1">Ingreso</option>
                    <option value="2">Egreso</option>
                    <option value="3">Traspaso</option>
                    <option value="4" selected>Apertura</option>
                    <option value="5">Traspaso</option> */
            switch (num) {
                case 1:
                    return "Ingreso";
                case 2:
                    return "Egreso";
                case 3:
                    return "Traspaso";
                case 4:
                    return "Apertura";
                case 5:
                    return "Ajuste";
                default:
                    return "";
            }
        },
        transformData() {
            this.receipts.forEach((date) => {
                date.date = dayjs(date.date).format("DD/MM/YYYY");
                date.receipt_type = this.getReceiptType(date.receipt_type);
            });
        },
        newReceipt() {
            console.log(this.company);
            Inertia.get(route("view.create.receipt", this.company.name));
        },
    },
};
</script>
