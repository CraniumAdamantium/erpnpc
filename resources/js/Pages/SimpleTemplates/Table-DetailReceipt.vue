<template>
    <div class="px-2 mt-5">
        <div class="w-11/12 ml-auto mr-auto mt-2 transform">
            <DataTable
                :resizableColumns="true"
                columnResizeMode="fit"
                class="p-datatable-sm"
                :value="receipts"
                dataKey="id_coincompany"
                :scrollable="true"
                scrollHeight="350px"
                responsiveLayout="scroll"
                v-model:filters="filters"
                :editMode="editMode"
                @cell-edit-complete="onCellEditComplete"
            >
                <template #header>
                    <div
                        class="md:flex md:items-center justify-center md:justify-items-start md:flex-row inline-grid gap-2 ml-auto mr-auto"
                    >
                        <div
                            id="cuentaBasis"
                            class="bg-white text-black rounded-md"
                            v-tooltip="'Seleccione una cuenta'"
                        >
                            <vSelect
                                v-model="idSelectedAccount"
                                :options="accountsOptions"
                                placeholder="Selecciona una cuenta"
                            >
                                <template #no-options>
                                    No hay cuentas.
                                </template>
                            </vSelect>
                        </div>
                        <div
                            class="relative md:basis-1/3 text-gray-600 focus-within:text-gray-400"
                            v-tooltip="'Glosa para el detalle'"
                        >
                            <span
                                class="absolute inset-y-0 left-0 flex items-center pl-2"
                            >
                                <button @click="copyGlosa">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        :fill="
                                            copyGlosa ? '#2196f3' : '#bdbdbd'
                                        "
                                        class="bi bi-card-text"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                                        />
                                        <path
                                            d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                                        />
                                    </svg>
                                </button>
                            </span>
                            <input
                                v-model="newDetail.comment"
                                placeholder="Añade una glosa"
                                class="w-full py-2 text-sm rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                                maxlength="100"
                            />
                        </div>
                        <div
                            class="relative md:basis-1/4 text-gray-600 focus-within:text-gray-400"
                            v-tooltip.top="'Debe para el detalle'"
                        >
                            <input
                                style="text-align: right"
                                type="number"
                                v-model="newDetail.balance_debit"
                                @keypress="isNumber($event)"
                                @input="
                                    newDetail.balance_debit = restrictDecimal(
                                        newDetail.balance_debit
                                    )
                                "
                                :disabled="newDetail.balance_assets > 0"
                                placeholder="Debe"
                                class="w-full py-2 text-sm rounded-md pr-3 focus:outline-none focus:bg-white focus:text-gray-900"
                            />
                        </div>
                        <div
                            class="relative md:basis-1/4 text-gray-600 focus-within:text-gray-400"
                            v-tooltip.top="'Haber para el detalle'"
                        >
                            <input
                                style="text-align: right"
                                type="number"
                                v-model="newDetail.balance_assets"
                                @keypress="isNumber($event)"
                                @input="
                                    newDetail.balance_assets = restrictDecimal(
                                        newDetail.balance_assets
                                    )
                                "
                                :disabled="newDetail.balance_debit > 0"
                                placeholder="Haber"
                                class="py-2 text-sm rounded-md pr-3 w-full focus:outline-none focus:bg-white focus:text-gray-900"
                            />
                        </div>
                    </div>
                </template>
                <template #empty>
                    No hay detalles de comprobantes, ¡añade uno!</template
                >
                <!-- Si Link, ya se que es un cagon 😢
                <Column
                    v-if="Object.keys(receiptData).length > 0"
                    field="id_receiptdetail"
                >
                    <template #body="slotProps">
                        <button
                            :class="
                                slotProps.data[slotProps.field]
                                    ? 'p-3 bg-green-500 rounded-full mx-auto'
                                    : 'p-3 bg-yellow-500 rounded-full '
                            "
                            v-tooltip="
                                slotProps.data[slotProps.field]
                                    ? 'Detalle grabado'
                                    : 'Detalle por grabar'
                            "
                        >
                            <svg
                                v-if="slotProps.data[slotProps.field]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="white"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                />
                            </svg>
                            <svg
                                v-if="!slotProps.data[slotProps.field]"
                                v-tooltip="'Este detalle no está grabado'"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="white"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
                                />
                            </svg>
                        </button>
                    </template>
                </Column>
                -->
                <Column field="name_account" header="Cuenta">
                    <template #body="slotProps">
                        <div class="flex content-left w-full">
                            <p>
                                {{ slotProps.data[slotProps.field] }}
                            </p>
                        </div>
                    </template>
                </Column>
                <Column field="comment" header="Glosa">
                    <template #editor="slotProps">
                        <InputText
                            v-model="slotProps.data[slotProps.field]"
                            maxlength="100"
                        />
                    </template>
                </Column>
                <Column
                    class="balance_debit"
                    field="balance_debit"
                    header="Debe"
                    :footerStyle="''"
                    :footer="`Total: ${calculateDebit()}`"
                >
                    <template #editor="slotProps">
                        <div class="flex content-center w-full">
                            <InputText
                                maxlength="12"
                                type="text"
                                class="text-right mx-auto"
                                v-model="slotProps.data[slotProps.field]"
                                @input="
                                    slotProps.data[slotProps.field] =
                                        restrictDecimal(
                                            slotProps.data[slotProps.field]
                                        )
                                "
                            />
                        </div>
                    </template>
                </Column>
                <Column
                    class="balance_assets"
                    field="balance_assets"
                    header="Haber"
                    :footer="`Total: ${calculateAssets()}`"
                >
                    <template #editor="slotProps">
                        <InputText
                            maxlength="12"
                            type="text"
                            class="text-right mx-auto"
                            v-model="slotProps.data[slotProps.field]"
                            @input="
                                slotProps.data[slotProps.field] =
                                    restrictDecimal(
                                        slotProps.data[slotProps.field]
                                    )
                            "
                        />
                    </template>
                </Column>
                <Column
                    class="addButton"
                    :hidden="actionButtons"
                    :footer="
                        calculateAssets() - calculateDebit() === 0 ? '✅' : '≠'
                    "
                >
                    <template #header>
                        <!--<div> relative md:basis-10 -->
                        <button
                            class="text-white disabled:bg-green-800 bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2"
                            v-tooltip.bottom="{
                                value: 'Agregar detalle',
                                class: 'text-center',
                            }"
                            @click="addReceiptDetail"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="white"
                                class="bi bi-plus-lg"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                />
                            </svg>
                        </button>
                    </template>

                    <template #body="slotProps">
                        <Button
                            type="button"
                            @click="deleteThisItem(slotProps.index)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-x-lg"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                                />
                            </svg>
                        </Button>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import axios from "axios";
import Tooltip from "primevue/tooltip";
import vSelect from "vue-select";
import Button from "primevue/button";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import "vue-select/dist/vue-select.css";

export default {
    props: {
        receiptData: {
            type: Object,
            default: null,
        },
        glosa: {
            type: String,
            default: null,
        },
        actionButtons: {
            type: Boolean,
            default: false,
        },
        editMode: {
            type: String,
            default: null,
        },
    },
    emits: ["detailsReceipt"],
    directives: {
        tooltip: Tooltip,
    },
    components: {
        Button,
        DataTable,
        Column,
        vSelect,
        InputText,
    },
    data() {
        return {
            companyLevel: null,
            copyGlosa: true,
            accountsOptions: [],
            newDetail: {
                id_account: null,
                glosa: null,
                balance_debit: 0,
                balance_assets: 0,
            },
            idSelectedAccount: null,
            receipts: [],
            coinCompanyData: [],
            selectedReceipt: [],
            filters: {
                id_coincompany: "",
                id_account: "",
                comment: "",
                balance_debit: "",
                balance_assets: "",
            },
            accounts: [],
            ignoreThisAccounts: [],
        };
    },
    methods: {
        restrictDecimal(str) {
            let resumed = str.toString().match(/^\d+\.?\d{0,2}/);
            return resumed ? resumed[0] : str;
        },
        isNumber(evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46
            ) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
        deleteThisItem(index) {
            //Reset the value in v select
            let restore = this.ignoreThisAccounts.find(
                (item) => item == this.receipts[index].id_account
            );
            if (restore) {
                this.ignoreThisAccounts.splice(
                    this.ignoreThisAccounts.indexOf(restore),
                    1
                );
            }
            this.setAccounts();
            this.receipts.splice(index, 1);
            localStorage.setItem(
                "detailsReceipt",
                JSON.stringify(this.receipts)
            );
        },
        calculateAssets() {
            return this.receipts.reduce(
                (partialSum, b) => partialSum + Number(b.balance_assets),
                0
            );
        },
        calculateDebit() {
            return this.receipts.reduce(
                (partialSum, b) => partialSum + Number(b.balance_debit),
                0
            );
        },
        onCellEditComplete(e) {
            /* Search exact object */
            if (e.newData.comment.trim() == "") {
                Notify.failure("Ingresa una glosa");
                return; //Return chinasango
            }
            if (
                isNaN(e.newData.balance_debit) ||
                isNaN(e.newData.balance_assets) ||
                e.newData.balance_assets === "" ||
                e.newData.balance_debit === "" ||
                (e.newData.balance_debit == 0 && e.newData.balance_assets == 0)
            ) {
                Notify.failure("El número debe ser mayor a 0");
                return;
            }
            let index = this.receipts.findIndex(
                (obj) =>
                    obj.id_account == e.data.id_account &&
                    obj.comment == e.data.comment &&
                    obj.balance_debit == e.data.balance_debit &&
                    obj.balance_assets == e.data.balance_assets
            );
            /* Validate that balance_debit or asset is a number */
            this.receipts[index] = e.newData;
            this.newDetail.comment = this.receipts[index].comment;
            if (
                this.receipts[index].balance_debit > 0 &&
                e.newValue == this.receipts[index].balance_debit
            ) {
                this.receipts[index].balance_assets = 0;
                this.receipts[index].balance_debit = parseFloat(
                    this.receipts[index].balance_debit
                );
            }
            if (
                this.receipts[index].balance_assets > 0 &&
                e.newValue == this.receipts[index].balance_assets
            ) {
                this.receipts[index].balance_debit = 0;
                this.receipts[index].balance_assets = parseFloat(
                    this.receipts[index].balance_assets
                );
            }
        },
        getReceipts() {
            //Only for update
            if (this.receiptData.id_receipt) {
                axios
                    .get(
                        route(
                            "receiptdetails.api.read",
                            this.receiptData.id_receipt
                        )
                    )
                    .then((response) => {
                        console.log("Recibos", response.data);
                        this.receipts = response.data;
                    });
            } else {
                this.setIfExist();
            }
        },
        setIfExist() {
            this.receipts = localStorage.getItem("detailsReceipt")
                ? JSON.parse(localStorage.getItem("detailsReceipt"))
                : [];
            this.$emit("detailsReceipt", this.receipts);
            this.ignoreThisAccounts = localStorage.getItem("ignoredAccounts")
                ? JSON.parse(localStorage.getItem("ignoredAccounts"))
                : [];
        },
        addReceiptDetail() {
            /* Validate id from account */
            if (
                this.idSelectedAccount == null ||
                this.idSelectedAccount == ""
            ) {
                Notify.failure("Selecciona una cuenta");
                return;
            }
            //Validate debit and asset
            if (
                this.newDetail.balance_debit == 0 &&
                this.newDetail.balance_assets == 0
            ) {
                Notify.failure("Debe o haber deben ser mayor a cero");
                return;
            }
            if (
                this.newDetail.balance_debit > 0 &&
                this.newDetail.balance_assets > 0
            ) {
                Notify.failure(
                    "Uno de los 2 debe ser mayor a cero y el otro 0."
                );
                return;
            }
            if (this.newDetail.balance_debit == "") {
                this.newDetail.balance_debit = 0;
            }
            if (this.newDetail.balance_assets == "") {
                this.newDetail.balance_assets = 0;
            }
            /* Validate glosa */
            if (
                this.newDetail.comment == null ||
                this.newDetail.comment.trim() === ""
            ) {
                Notify.failure("Ingresa una glosa");
                return;
            }
            //Setting id account
            this.newDetail.id_account = this.idSelectedAccount.value;
            this.newDetail.name_account = this.idSelectedAccount.label;
            //Push it to details
            this.receipts.push(this.newDetail);
            //Setting all to white now
            this.newDetail = {
                id_account: null,
                comment: this.newDetail.comment,
                balance_debit: 0,
                balance_assets: 0,
            };
            //Add to the ignore list then remove
            this.ignoreThisAccounts.push(this.idSelectedAccount.value);
            this.accountsOptions = this.accountsOptions.filter((obj) => {
                return obj.value != this.idSelectedAccount.value;
            });
            // Supongo que esto arregla que se quite la cuenta seleccionada una vez introducida en la tabla
            this.idSelectedAccount = "";
            //Save in local storage
            // Not for now... 👍
            /*
            this.idSelectedAccount = null;
            this.$emit("detailsReceipt", this.receipts);
            localStorage.setItem(
                "ignoredAccounts",
                JSON.stringify(this.ignoreThisAccounts)
            );
            localStorage.setItem(
                "detailsReceipt",
                JSON.stringify(this.receipts)
            );
            */
        },
        setAccounts() {
            this.accountsOptions = this.accounts.filter((account) => {
                if (this.ignoreThisAccounts.includes(account.id_account)) {
                    return false;
                }
                return account.level == this.companyLevel;
            });
            this.accountsOptions = this.accountsOptions.map((account) => {
                return {
                    value: account.id_account,
                    label: `${account.code} - ${account.name}`,
                };
            });
        },
        getAccounts() {
            let company = window.location.pathname.split("/").pop();
            console.log(company);
            axios.get(route("accounts.api.read", company)).then((response) => {
                this.accounts = response.data.company.accounts;
                this.companyLevel = response.data.company.level;
                this.setAccounts();
            });
        },
    },
    watch: {
        receiptData(newValue) {
            console.log("id_receipt", newValue.id_receipt);
            newValue ? this.getReceipts() : null;
        },
        glosa(newValue) {
            this.copyGlosa ? (this.newDetail.comment = newValue) : null;
        },
    },
    mounted() {
        this.getAccounts();
        this.getReceipts();
    },
};
</script>
<style>
@media (min-width: 768px) {
    #cuentaBasis {
        flex-basis: 20%;
        margin-left: auto;
    }
}
.balance_assets > .p-column-header-content,
.balance_debit > .p-column-header-content,
.addButton > .p-column-header-content {
    display: inline-flex;
    align-items: right;
    margin-left: auto;
}
td.balance_assets,
td.balance_debit,
td.addButton {
    text-align: right !important;
    display: inline !important;
}
.p-datatable-tfoot > tr > td.balance_debit,
.p-datatable-tfoot > tr > td.balance_assets,
.p-datatable-tfoot > tr > td.addButton {
    display: inline-flex;
    align-items: right;
    margin-left: auto;
    text-align: right !important;
    display: inline !important;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}
</style>
