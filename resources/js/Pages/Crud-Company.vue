<template>
    <div class="flex items-center justify-center" style="min-height: 90vh">
        <div class="p-12 bg-white rounded-2xl xl:w-5/12 max-w-96 max-h-60">
            <div class="mb-4">
                <h3 class="text-2xl text-center pb-6 text-black font-semibold">
                    Seleccione una Empresa
                </h3>
                <div
                    class="grid grid-flow-col auto-cols-max gap-0.5 justify-center ml-2"
                >
                    <div class="grid">
                        <div class="py-0.5 w-96 max-w-96">
                            <vSelect
                                v-if="mounted && showSelect"
                                v-model="selected"
                                :options="options"
                                label="text"
                                class="bg-white text-black w-full z-0"
                            >
                                <template #no-options>
                                    No hay empresas.
                                </template>
                                <template
                                    #selected-option-container="{ option }"
                                >
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
                    </div>
                    <div class="ml-1">
                        <div>
                            <button
                                v-tooltip.top="{
                                    value: 'Ingresar',
                                    class: 'text-center',
                                }"
                                class="text-white bg-sky-500 hover:bg-sky-600 font-medium rounded-lg text-sm px-4 ml-1 py-2 text-center mr-2"
                                @click="joinCompany"
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
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-flow-col auto-cols-max gap-1 justify-center">
                <ModalCompany
                    btnClass="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                    modalTitle="Crear empresa"
                    modalButtons="register"
                    @update-data="updateData"
                    tooltipText="Crear Empresa"
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
                </ModalCompany>
                <ModalCompany
                    v-if="selected"
                    btnClass="text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                    modalTitle="Editar empresa"
                    modalButtons="edit"
                    :companyData="companyData"
                    @update-data="updateData"
                    tooltipText="Editar Empresa"
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
                </ModalCompany>
                <button
                    @click="goReport"
                    v-tooltip.bottom="{
                        value: 'Reporte de empresas',
                        class: 'text-center',
                    }"
                    class="ml-2 text-white bg-indigo-700 hover:bg-indigo-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
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
                    v-tooltip.bottom="{
                        value: 'Elimina la empresa seleccionada',
                        class: 'text-center',
                    }"
                    @click="softDeleteCompany"
                    class="ml-2 text-white bg-rose-500 hover:bg-rose-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
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
                <button
                    v-tooltip.bottom="{
                        value: 'Cerrar sesión',
                        class: 'text-center',
                    }"
                    @click="logout"
                    class="ml-2 text-white bg-rose-500 hover:bg-rose-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
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
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
/* No va pa atras */
history.pushState(null, document.title, location.href);
window.addEventListener("popstate", function (event) {
    history.pushState(null, document.title, location.href);
});
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import ToggleButton from "primevue/togglebutton";
//import Table from "./SimpleTemplates/Table-Company.vue";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import axios from "axios";
import ModalCompany from "./SimpleTemplates/Modal-Company.vue";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Inertia } from "@inertiajs/inertia";
import Tooltip from "primevue/tooltip";
export default {
    directives: {
        tooltip: Tooltip,
    },
    components: {
        ModalCompany,
        vSelect,
        ToggleButton,
    },
    mounted() {
        this.updateData();
        this.disabled == true;
    },
    data() {
        return {
            loaded: false,
            companyData: {},
            userData: "",
            options: "",
            selected: null,
            mounted: false,
            showSelect: true,
            trash: "",
        };
    },
    watch: {
        selected() {
            if (this.selected != null) {
                this.companyData = this.userData.companies.filter((company) => {
                    return company.id_company == this.selected.value;
                })[0];
                //Force update
            }
        },
    },
    methods: {
        goReport() {
            window.open(
                `http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReporteEmpresa&standAlone=true&idd_user=${this.userData.id_user}&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no`
            );
        },
        companySelected() {
            this.hidden = true;
        },
        logout() {
            window.location.href = route("logout");
        },
        softDeleteCompany() {
            if (!this.selected) {
                Notify.warning("Selecciona una empresa");
                return;
            }
            Confirm.init({
                titleColor: "#FF0000",
                messageColor: "#FF0000",
                okButtonBackground: "#FF0000",
            });
            Confirm.show(
                "¿Deseas eliminar la empresa?",
                "Estás a punto de eliminar la empresa " +
                    this.companyData.initials,
                "Eliminar",
                "Cancelar",
                () => {
                    Loading.standard({
                        clickToClose: false,
                        svgSize: "200",
                    });
                    let data = {
                        id_company: this.selected.value,
                    };
                    axios
                        .post(route("companies.api.softDelete"), data)
                        .then((response) => {
                            if (response.data.success ?? false) {
                                Notify.success("Empresa eliminada");
                                this.updateData();
                            }
                            Loading.remove(250);
                        })
                        .catch((error) => {
                            Notify.error("Error al eliminar empresa" + error);
                        });
                }
            );
        },
        joinCompany() {
            if (!this.selected) {
                Notify.warning("Selecciona una empresa");
                return;
            }
            Inertia.get(route("dashboard", this.selected.text));
        },
        updateData(name, id) {
            axios.get(route("companies.api.read")).then((response) => {
                if (
                    response.data.data.length != this.userData &&
                    this.userData != ""
                ) {
                    /* We set selected with the newest value */
                    let newCompany = response.data.data.companies.sort(
                        (a, b) => b.id_company - a.id_company
                    )[0];
                    this.selected = {
                        value: newCompany.id_company,
                        text: newCompany.name,
                    };
                }
                this.userData = response.data.data;
                /*
                    If selected is defined (After first load), then update the value to the name pased by the emit instance
                    but set the value to the id of the company
                    also we check if name is set, just because we can update other things aside name
                */
                if (this.selected && name && id) {
                    this.selected = {
                        value: id,
                        text: name,
                    };
                }
                /*
                    Selected defined by creating new company
                */

                /* Update data in vSelect */
                this.options = response.data.data.companies.map((company) => {
                    return {
                        value: company.id_company,
                        text: company.name,
                    };
                });
                this.mounted = true;
            });
        },
    },
};
</script>
