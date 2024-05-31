<template>
    <Navbar :userName="userData.name" :companyName="company.name" />
    <div class="px-2 mt-5">
        <div class="w-11/12 ml-auto mr-auto mt-2 transform">
            <div class="flex">
                <h4 class="text-2xl text-white mb-2">
                    Administracion de Cuentas{{ newAccount }}
                </h4>
                <div class="flex ml-auto items-center">
                    <button
                        class="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2"
                        @click="showModalCreate = true"
                        v-tooltip.bottom="{
                            value: 'Crear cuenta',
                            class: 'text-center',
                        }"
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
                        @click="goReport"
                        v-tooltip.bottom="{
                            value: 'Reporte de empresas',
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
                    <button
                        :disabled="
                            Object.keys(selectedAccount).length == 0
                                ? true
                                : false
                        "
                        @click="showModalEdit = true"
                        class="text-white disabled:bg-yellow-600 bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2"
                        v-tooltip.bottom="{
                            value: 'Editar cuenta seleccionada',
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
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            ></path>
                        </svg>
                    </button>
                    <button
                        :disabled="
                            Object.keys(selectedAccount).length == 0
                                ? true
                                : false
                        "
                        @click="deleteAccount"
                        class="text-white disabled:bg-red-800 bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-2 py-2 text-center"
                        v-tooltip.top="{
                            value: 'Eliminar cuenta seleccionada',
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
            <p class="text-sm text-white">
                ▮ Para deseleccionar una cuenta, mantén control y haz click
                sobre la que te encuentras
            </p>
        </div>
        <div class="w-11/12 ml-auto mr-auto mt-2">
            <Tree
                class="overflow-x-scroll overflow-y-scroll mt-1"
                style="max-height: 70vh; max-width: 92vw"
                :value="accounts"
                :expandedKeys="expandedKeys"
                selectionMode="single"
                v-model:selectionKeys="selectedAccount"
                @node-select="onNodeSelect"
                @node-unselect="onNodeUnselect"
                :filter="true"
                filterMode="lenient"
            >
            </Tree>
        </div>
    </div>
    <h1 class="text-white text-center mt-2">
        Copyright© <a href="https://github.com/Hyhy092">JASM</a>
    </h1>
    <!-- Modal to create -->
    <ModalAccount
        :showModal="showModalCreate"
        @cancel="showModalCreate = false"
        :selectedAccount="selectedAccountData"
        :id_company="company.id_company"
        @created="setData"
    />
    <!-- Modal to edit -->
    <ModalAccount
        modalButtons="edit"
        :showModal="showModalEdit"
        @cancel="showModalEdit = false"
        :selectedAccount="selectedAccountData"
        :id_company="company.id_company"
        @created="setData"
    />
</template>
<script>
import axios from "axios";
import DropDownUser from "./SimpleTemplates/DropDownUser.vue";
import Navbar from "./SimpleTemplates/Navbar.vue";
import TableManagementDate from "./SimpleTemplates/Table-ManagementDate.vue";
import Tooltip from "primevue/tooltip";
import Tree from "primevue/tree";
import ModalAccount from "./SimpleTemplates/Modal-Account.vue";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";
export default {
    directives: {
        tooltip: Tooltip,
    },
    components: {
        DropDownUser,
        Navbar,
        TableManagementDate,
        Tree,
        ModalAccount,
    },
    data() {
        return {
            company: [],
            userData: [],
            accounts: [],
            expandedKeys: {},
            selectedAccount: {},
            newAccount: "",
            showModalCreate: false,
            showModalEdit: false,
            selectedAccountData: {},
        };
    },
    mounted() {
        this.setUser();
        this.setData();
    },
    methods: {
        goReport() {
            window.open(
                `http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReporteCuenta&standAlone=true&idd_user=${this.company.id_user}&id_company=${this.company.id_company}&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no`
            );
        },
        deleteAccount() {
            Confirm.init({
                titleColor: "#FF0000",
                messageColor: "#FF0000",
                okButtonBackground: "#FF0000",
            });
            Confirm.show(
                "¿Deseas eliminar la cuenta?",
                "Estás a punto de eliminar la cuenta " +
                    this.selectedAccountData.label,
                "Eliminar",
                "Cancelar",
                () => {
                    Notify.init({
                        clickToClose: true,
                    });
                    let data = {
                        id_account: this.selectedAccountData.id_account,
                    };

                    axios
                        .post(route("accounts.api.delete"), data)
                        .catch((error) => {
                            // Notify.failure(error?.response?.data?.message);
                            for (let i in error?.response?.data?.errors) {
                                console.log(error.response.data.errors);
                                if (
                                    error.response.data.errors[i][0] !=
                                    error.response.data.message
                                ) {
                                    Notify.failure(
                                        error.response.data.errors[i][0]
                                    );
                                }
                            }
                        })
                        .then((response) => {
                            if (response.data.success) {
                                this.setData();
                                Notify.success("Cuenta eliminada con éxito");
                                this.selectedAccountData = {};
                            }
                        });
                }
            );
        },
        onNodeUnselect(e) {
            console.log("Unselected", e);
            this.selectedAccountData = {};
        },
        onNodeSelect(e) {
            this.selectedAccountData = e;
        },

        expandAll() {
            for (let node in this.accounts) {
                this.expandNode(this.accounts[node]);
            }
            this.expandedKeys = { ...this.expandedKeys };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            this.expandedKeys[node.key] = true;
            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
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
                });
        },
        setData() {
            let company = window.location.pathname.split("/").pop();
            axios.get(route("accounts.api.read", company)).then((response) => {
                this.company = response.data.company;
                //Set accounts

                //Sort accounts as tree
                /* Complexity to the moon */
                let arrayToTree = (array) => {
                    //Assign "Key" to each node
                    array.forEach((node) => {
                        node.key = node.id_account;
                        node.label = node.code + " - " + node.name;
                    });
                    let findParent = (id_parent_account) => {
                        for (let i = 0; i < array.length; i++) {
                            if (array[i]["id_account"] == id_parent_account) {
                                return i;
                            }
                        }

                        return -1;
                    };
                    let allParentsNull = (array) => {
                        for (let node of array) {
                            if (node.id_parent_account != null) {
                                return true;
                            }
                        }
                        return false;
                    };
                    let hasChildren = (id_node) => {
                        for (let nodes of array) {
                            if (nodes.id_parent_account == id_node) {
                                return true;
                            }
                        }
                        return false;
                    };
                    let check = allParentsNull(array);
                    let count = 0;
                    while (check || count > 1000) {
                        for (let i = 0; i < array.length; i++) {
                            if (array[i].id_parent_account != null) {
                                if (!hasChildren(array[i].id_account)) {
                                    let indexParent = findParent(
                                        array[i].id_parent_account
                                    );
                                    if (indexParent != -1) {
                                        let found = array[indexParent];
                                        if (!found.children) {
                                            found.children = [];
                                        }
                                        found.children.push(array[i]);
                                        found.children.sort((a, b) =>
                                            a.code.localeCompare(
                                                b.code,
                                                undefined,
                                                {
                                                    numeric: true,
                                                }
                                            )
                                        );
                                    }
                                    array.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        check = allParentsNull(array);
                        count++;
                    }
                    array.sort((a, b) =>
                        a.code.localeCompare(b.code, undefined, {
                            numeric: true,
                        })
                    );
                    return array;
                };
                this.accounts = arrayToTree(response.data.company.accounts);

                this.expandAll();
                //Expand all
            });
        },
    },
};
</script>
