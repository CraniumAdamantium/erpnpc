<template>
    <Navbar :userName="userData.name" :companyName="company.name" />
    <div class="px-2 mt-2 mx-10 mb-10" v-if="next_table == false">
        <h4 class="mt-5 text-2xl text-white">Administración de Comprobantes</h4>
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
                        @click="
                            (next_table = !next_table), (selectedReceipt = {})
                        "
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
                        class="disabled:bg-yellow-600 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2.5"
                        :disabled="Object.keys(selectedReceipt).length == 0"
                        v-tooltip.left="{
                            value: 'Editar comprobante',
                            class: 'text-center',
                        }"
                        @click="next_table = !next_table"
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
        <DataTable
            :resizableColumns="true"
            columnResizeMode="fit"
            class="p-datatable-lg"
            :value="company.receipts"
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
            <!--<Column
                field="comment"
                header="Glosa"
                :sortable="true"
                filterMatchMode="contains"
            >
            </Column>-->
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
                field="status"
                header="Estado"
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
    </div>
    <DetailReceipts
        v-if="next_table"
        :receipt="selectedReceipt"
        @hideThis="next_table = !next_table"
        :receiptCount="company.receipts.length"
        :id_company="company.id_company"
        :id_user="userData.id_user"
    />
</template>
<script>
import axios from "axios";
import DropDownUser from "./SimpleTemplates/DropDownUser.vue";
import Navbar from "./SimpleTemplates/Navbar.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import dayjs from "dayjs";
import { FilterMatchMode } from "primevue/api";
import Tooltip from "primevue/tooltip";
import InputText from "primevue/inputtext";
import DetailReceipts from "./DetailReceipts.vue";

export default {
    components: {
        DetailReceipts,
        DropDownUser,
        Navbar,
        DataTable,
        Column,
        InputText,
    },
    directives: {
        Tooltip,
    },
    data() {
        return {
            next_table: false,
            id_receipt: null,
            exchange: "",
            coins: [],
            selectedCoin: 0,
            selectedReceipt: {},
            serial: "",
            status: "Abierto",
            date: "",
            comment: "",
            receipt_type: 0,
            receipts: [],
            details: [],
            company: [],
            loaded_company: false,
            userData: [],
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
        };
    },
    watch: {
        //Watch changes in next table
        next_table(newValue) {
            if (newValue == false) {
                this.setData();
            }
        },
    },
    mounted() {
        this.setData();
        this.setUser();
    },
    methods: {
        getReceiptType(num) {
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
        returnStatus(id) {
            switch (id) {
                case 0:
                    return "Cerrado";
                case 1:
                    return "Abierto";
                case 2:
                    return "Anulado";
                default:
                    return "";
            }
        },
        transformData() {
            this.receipts.forEach((date) => {
                date.date = dayjs(date.date).format("DD/MM/YYYY");
                date.receipt_type = this.getReceiptType(
                    parseInt(date.receipt_type)
                );
                this.status = this.returnStatus(parseInt(date.status));
            });
        },
        toggleMenu() {
            document.getElementById("menu").classList.toggle("hidden");
        },
        setUser() {
            axios
                .get(route("user.data"))
                .catch((error) => {
                    console.log(error);
                })
                .then((response) => {
                    this.userData = response.data.userData;
                    console.log("usuario:", this.userData);
                });
        },
        setData() {
            const company = window.location.pathname.split("/").pop();
            axios.get(route("receipts.api.read", company)).then((response) => {
                console.log("Datos de compañia", this.company);
                this.company = response.data.company;
                this.receipts = response.data.company.receipts;
                this.transformData();
            });
            this.loaded_company = true;
        },
    },
};
</script>
