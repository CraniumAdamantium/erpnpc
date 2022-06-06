<template>
    <!-- Here a sidebar if needed -->
    <div class="px-2 mt-5">
        <div class="w-11/12 ml-auto mr-auto mt-2 transform">
            <div class="flex">
                <h4 class="text-2xl text-white">
                    {{
                        Object.keys(receipt).length > 0
                            ? `Editando comprobante N# ${receipt.serial_number}`
                            : "Creando comprobante"
                    }}
                </h4>
                <div class="flex ml-auto items-center">
                    <button
                        class="bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg text-sm px-3 py-3 text-center mr-2"
                        v-tooltip.bottom="{
                            value: 'Volver a la tabla',
                            class: 'text-center',
                        }"
                        @click="backToTable"
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
                    <button
                        :class="
                            Object.keys(receipt).length > 0
                                ? ' text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2'
                                : 'text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2'
                        "
                        v-tooltip.bottom="{
                            value:
                                Object.keys(receipt).length > 0
                                    ? 'Crear nuevo comprobante'
                                    : 'Crear comprobante',
                            class: 'text-center',
                        }"
                        @click="
                            Object.keys(receipt).length > 0
                                ? editReceipt()
                                : addReceipt()
                        "
                        id="showCreate"
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
                        class="disabled:bg-indigo-800 bg-indigo-700 hover:bg-indigo-600 text-white font-medium rounded-lg text-sm px-2 py-2 text-center mr-2"
                        v-tooltip.bottom="{
                            value: 'Generar reporte',
                            class: 'text-center',
                        }"
                        id="showReport"
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
                        id="trash_receipt"
                        class="text-white disabled:bg-red-800 bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-2 py-2 text-center"
                        @click="deleteReceipt()"
                        v-tooltip.bottom="{
                            value: 'Anular Comprobante',
                            class: 'text-center',
                        }"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="white"
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
    <div class="w-11/12 ml-auto mr-auto px-2">
        <div class="grid grid-cols-1 sm:grid-cols-5 text-white">
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Serie</h4>
                <input
                    disabled
                    class="disabled text-base font-medium border rounded w-6/12 h-9 py-3 px-3 text-white"
                    :value="serial"
                />
            </div>
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Fecha</h4>
                <Calendar
                    class="text-base font-medium border rounded w-6/12 h-9 text-black"
                    dateFormat="dd/mm/yy"
                    :showIcon="true"
                    v-model="date"
                >
                </Calendar>
            </div>
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Estado</h4>
                <input
                    disabled
                    class="text-base font-medium border rounded w-6/12 h-9 py-3 px-3 text-white"
                    :value="status"
                />
            </div>
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Tipo de Comprobante</h4>
                <select
                    class="text-base font-medium border rounded w-8/12 h-9 px-3 text-black"
                    v-model="receipt_type"
                >
                    <option value="1">Ingreso</option>
                    <option value="2">Egreso</option>
                    <option value="3">Traspaso</option>
                    <option value="4">Apertura</option>
                    <option value="5">Ajuste</option>
                </select>
            </div>
            <div class="col-span-1 mt-3">
                <h4 id="h4Basura" class="text-base font-semibold">
                    Tipo de Cambio
                </h4>
                <input
                    id="inputBasura"
                    style="text-align: right"
                    onkeypress="return /[0-9 .]/i.test(event.key)"
                    class="text-base font-medium border rounded h-9 py-3 px-3 text-black"
                    v-model="exchange"
                    @input="restrictDecimal"
                />
            </div>
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Moneda</h4>
                <select
                    class="font-medium border rounded w-100 h-9 px-3 text-black"
                    v-model="selectedCoin"
                    v-if="!Object.keys(this.receipt).length > 0"
                >
                    <option
                        v-for="(value, i) in coins"
                        :key="i"
                        :value="value.value"
                    >
                        {{ value.text }}
                    </option>
                </select>
                <input
                    class="font-medium border rounded w-100 h-9 px-3 text-black"
                    type="text"
                    v-else
                    :value="receipt.name"
                />
            </div>
            <div class="col-span-2 mt-3">
                <h4 class="text-base font-semibold">Glosa</h4>
                <input
                    class="text-base font-medium border rounded w-9/12 h-9 py-3 px-3 text-black"
                    placeholder="Ingresa una glosa"
                    v-model="comment"
                    maxlength="200"
                />
            </div>
        </div>
    </div>
    <TableDetailReceipt
        :receiptData="receipt"
        @detailsReceipt="setDetails"
        :glosa="comment"
        :actionButtons="actionButtons"
        :editMode="editMode"
    />
</template>
<script>
import axios from "axios";
import Navbar from "./SimpleTemplates/Navbar.vue";
import Tooltip from "primevue/tooltip";
import TableDetailReceipt from "./SimpleTemplates/Table-DetailReceipt.vue";
import Calendar from "primevue/calendar";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Inertia } from "@inertiajs/inertia";

export default {
    directives: {
        tooltip: Tooltip,
    },
    components: {
        Navbar,
        TableDetailReceipt,
        Calendar,
    },
    emits: ["hideThis"],
    props: {
        receipt: {
            type: Object,
            required: false,
        },
        receiptCount: {
            type: Number,
            required: true,
        },
        id_company: {
            type: Number,
            required: true,
        },
        id_user: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            createOrEdit: "create",
            company: {},
            userData: {},
            exchange: "",
            coins: [],
            selectedCoin: 0,
            serial: "",
            status: "Abierto",
            date: "",
            comment: "",
            receipt_type: 1,
            details: [],
            actionButtons: false,
            editMode: "cell",
        };
    },
    mounted() {
        this.setData();
    },
    watch: {
        receipt: {
            handler() {
                this.setData();
            },
            deep: true,
        },
    },
    methods: {
        goReport() {
            window.open(
                `http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReporteComprobante&standAlone=true&idd_user=${this.id_user}&id_company=${this.id_company}&serial_number=${this.serial}&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no`
            );
        },
        disableComponents() {
            let inputs = document.getElementsByTagName("input");
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].disabled = true;
                inputs[i].style.color = "white";
            }
            let calendars = document.getElementsByClassName(
                "p-button p-component p-button-icon-only p-datepicker-trigger"
            );
            for (let i = 0; i < calendars.length; i++)
                calendars[i].disabled = true;
            let selects = document.getElementsByTagName("select");
            for (let i = 0; i < selects.length; i++) {
                selects[i].disabled = true;
                selects[i].style.color = "black";
            }
            let tableItems =
                document.getElementsByClassName("p-datatable-header");
            for (const header of tableItems) header.style.display = "none";
            if (this.status == "Anulado")
                document.getElementById("trash_receipt").disabled = true;
            else if (this.status == "Abierto")
                document.getElementById("trash_receipt").disabled = false;
            document.getElementById("showCreate").style.display = "none";
            document.getElementById("showReport").style.display = "initial";
            this.editMode = null;
            this.actionButtons = true;
        },
        validateData() {
            Notify.init({
                clickToClose: true,
            });
            if (this.details.length < 2) {
                Notify.failure("Debes agregar al menos 2 detalles");
                return true;
            }
            let mustBeZero =
                this.details.reduce(
                    (partialSum, b) => partialSum + Number(b.balance_assets),
                    0
                ) -
                this.details.reduce(
                    (partialSum, b) => partialSum + Number(b.balance_debit),
                    0
                );
            if (mustBeZero != 0) {
                Notify.failure(
                    "La suma de todos los Debe debe ser igual a la suma de todos los Haber"
                );
                return true;
            }
            if (this.comment == "") {
                Notify.failure("Introduce una glosa");
                return true;
            }
            if (this.selectedCoin == 0) {
                Notify.failure("Selecciona una moneda");
                return true;
            }
            return false;
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
        setData() {
            console.log("Datos compania", this.id_company);
            if (Object.keys(this.receipt).length > 0) {
                this.status = this.returnStatus(this.receipt.status);
                this.receipt_type = this.transformReceipt_type(
                    this.receipt.receipt_type
                );
                this.serial = this.receipt.serial_number;
                this.date = this.receipt.date;
                this.selectedCoin = this.receipt.name;
                this.comment = this.receipt.comment;
                this.exchange = this.receipt.TC;
                this.disableComponents();
            } else {
                document.getElementById("trash_receipt").disabled = true;
                document.getElementById("showReport").style.display = "none";
                this.serial = this.receiptCount + 1;
                this.status = this.returnStatus(1);
                this.getSelectedCoinsByCompany(this.id_company);
                let today = new Date();
                this.date = today;
            }
        },
        transformReceipt_type(receipt_type) {
            switch (receipt_type) {
                case "Ingreso":
                    return 1;
                case "Egreso":
                    return 2;
                case "Traspaso":
                    return 3;
                case "Apertura":
                    return 4;
                case "Ajuste":
                    return 5;
            }
        },
        setDetails(details) {
            this.details = details;
        },
        restrictDecimal() {
            this.exchange = this.exchange.match(/^\d+\.?\d{0,2}/)[0];
        },
        backToTable() {
            this.$emit("hideThis");
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
                    console.log("Active", active);
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
                    this.exchange = active.exchange;
                });
        },
        addReceipt() {
            if (this.validateData()) return;
            let today = this.date;
            let dd = String(today.getDate()).padStart(2, "0");
            let mm = String(today.getMonth() + 1).padStart(2, "0");
            let yyyy = today.getFullYear();
            today = yyyy + "/" + mm + "/" + dd;
            axios
                .post(route("receipt.api.create"), {
                    serial_number: this.serial,
                    comment: this.comment,
                    date: today,
                    TC: this.exchange,
                    receipt_type: this.receipt_type,
                    id_company: this.id_company,
                    id_coin: this.selectedCoin,
                    details: this.details,
                })
                .then((response) => {
                    if (response.data.success) {
                        Notify.success("Comprobante creado con éxito");
                        localStorage.removeItem("detailsReceipt");
                        this.disableComponents();
                        // this.backToTable();
                    }
                })
                .catch((error) => {
                    Notify.failure(error.response.data.message);
                });
        },
        deleteReceipt() {
            Confirm.init({
                titleColor: "#FF0000",
                messageColor: "#FF0000",
                okButtonBackground: "#FF0000",
            });
            Confirm.show(
                "¿Deseas anular el comprobante?",
                "Estás a punto de anular el comprobante Número:" + this.serial,
                "Eliminar",
                "Cancelar",
                () => {
                    Loading.standard({
                        clickToClose: false,
                        svgSize: "200",
                    });
                    let params = {
                        serial: this.serial,
                        id_company: this.id_company,
                        id_user: this.id_user,
                    };
                    Notify.init({
                        clickToClose: true,
                    });
                    axios
                        .post(route("receipt.api.delete"), params)
                        .then((res) => {
                            if (res.data?.success) {
                                this.$emit("update-data");
                                Notify.success("Comprobante anulado");
                                this.status = "Anulado";
                                this.disableComponents();
                            } else {
                                Notify.failure(res.data.message);
                            }
                            Loading.remove(250);
                        })
                        .catch((err) => {
                            console.error(err);
                            Notify.failure("Error al eliminar el comprobante");
                        });
                }
            );
        },
        editReceipt() {
            /*    if (this.validateData()) return;
                            axios
                                .post(route("receipt.api.edit"), {
                                    id_receipt: this.receipt.id_receipt,
                                    //serial_number: this.serial, serial is not editable
                                    comment: this.comment,
                                    date: this.date.toLocaleString(),
                                    TC: this.exchange,
                                    receipt_type: this.receipt_type,
                                    //id_company: this.company.id_company, id company is not editable
                                    id_coin: this.selectedCoin,
                                    details: this.details,
                                })
                                .then((response) => {
                                    if (response.data.success) {
                                        Notify.success("Comprobante editado con éxito");
                                        localStorage.removeItem("detailsReceipt");
                                        this.backToTable();
                                    }
                                })
                                .catch((error) => {});
                        */
        },
    },
};
</script>
<style>
@media (min-width: 640px) {
    #h4Basura {
        margin-left: 21%;
    }
    #inputBasura {
        width: 78%;
        float: right;
    }
}
</style>
