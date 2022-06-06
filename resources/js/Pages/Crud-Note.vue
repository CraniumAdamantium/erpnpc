<template>
    <Navbar :userName="userData.name" :companyName="company.name" />
    <div class="px-2 mt-5 mx-10 mb-10" v-if="values.showMaster">
        <h4 class="text-2xl text-white">Administración de Notas</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 mb-2"></div>
        <DataTable
            columnResizeMode="fit"
            class="p-datatable-sm"
            :paginator="true"
            :rows="10"
            :value="notes_c"
            responsiveLayout="scroll"
            v-model:filters="filters"
            selectionMode="single"
            v-model:selection="values.selectedNote"
        >
            <template #header>
                <div class="flex justify-center sm:justify-end space-x-2">
                    <span class="p-input-icon-left mr-auto">
                        <i class="pi pi-search" />
                        <InputText
                            type="text"
                            v-model="filters['global'].value"
                            placeholder="Buscar"
                        />
                    </span>
                    <button
                        class="disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5"
                        v-tooltip.bottom="{
                            value: 'Agregar nota de venta',
                            class: 'text-center',
                        }"
                        @click="goto('NV')"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-receipt"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
                            />
                            <path
                                d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </button>
                    <button
                        class="disabled:bg-blue-800 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2.5"
                        v-tooltip.bottom="{
                            value: 'Agregar nota de compra',
                            class: 'text-center',
                        }"
                        @click="goto('NC')"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-bag-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"
                            />
                        </svg>
                    </button>

                    <button
                        class="disabled:bg-gray-500 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2.5"
                        v-tooltip.bottom="{
                            value: 'Editar nota',
                            class: 'text-center',
                        }"
                        :disabled="
                            Object.keys(values.selectedNote ?? {}).length == 0
                        "
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
                        class="text-white disabled:bg-gray-500 bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2.5"
                        v-tooltip.bottom="{
                            value: 'Dar de baja nota',
                            class: 'text-center',
                        }"
                        :disabled="
                            Object.keys(values.selectedNote ?? {}).length == 0
                        "
                        @click="deleteNote()"
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
            </template>
            <template #empty> No hay Notas, registra una ! </template>
            <Column header="Número" field="number" :sortable="true"> </Column>
            <Column header="Tipo" field="type" :sortable="true"> </Column>
            <Column header="Fecha" field="date" :sortable="true"> </Column>
            <Column header="Descripción" field="description" :sortable="true">
            </Column>
            <Column header="Total" field="total" :sortable="true"> </Column>
            <Column header="Estado" field="deleted_at" :sortable="true">
            </Column>
        </DataTable>
    </div>
    <DetailsNV
        v-if="values.showV"
        :company="company"
        :userData="userData"
        @goback="goto()"
    >
    </DetailsNV>
    <DetailsNC
        v-if="values.showC"
        :company="company"
        :userData="userData"
        @goback="goto()"
    ></DetailsNC>
</template>
<script>
import { Notify } from "notiflix/build/notiflix-notify-aio";
import DetailsNV from "./DetailNV.vue";
import DetailsNC from "./DetailNC.vue";
import Navbar from "./SimpleTemplates/Navbar.vue";
import { FilterMatchMode } from "primevue/api";
import Tooltip from "primevue/tooltip";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { computed } from "@vue/runtime-core";
import InputText from "primevue/inputtext";
import { reactive } from "@vue/reactivity";
import { Inertia } from "@inertiajs/inertia";

export default {
    components: {
        DetailsNV,
        DetailsNC,
        Navbar,
        Tooltip,
        DataTable,
        Column,
        InputText,
    },
    directives: {
        tooltip: Tooltip,
    },
    props: {
        company: {
            type: Object,
            required: true,
        },
        userData: {
            type: Object,
            required: true,
        },
    },

    setup(props) {
        const notes_c = computed({
            get() {
                return props.company.notes.map((note) => {
                    return {
                        id: note.id_note,
                        number: note.number,
                        date: note.date,
                        description: note.description,
                        total: note.total,
                        type: note.type == 1 ? "Compra" : "Venta",
                        details: note.notes_details,
                        lot: note.notes_lot,
                        deleted_at: note.deleted_at
                            ? "Anulado en " + note.deleted_at
                            : "Activo",
                    };
                });
            },
        });
        const filters = reactive({
            global: {
                value: "",
                matchMode: FilterMatchMode.Contains,
            },
        });
        const values = reactive({
            showV: false,
            showC: false,
            showMaster: true,
            selectedNote: {},
        });
        const goto = (go) => {
            if (go == "NV") {
                values.showMaster = false;
                values.showV = true;
                values.showC = false;
                return;
            }
            if (go == "NC") {
                values.showMaster = false;
                values.showV = false;
                values.showC = true;
                return;
            }
            values.showMaster = true;
            values.showV = false;
            values.showC = false;
        };
        const deleteNote = () => {
            console.log(values.selectedNote);
            Inertia.post(
                values.selectedNote.type == "Compra"
                    ? route("notes.api.delete_c")
                    : route("notes.api.delete_v"),
                {
                    id_note: values.selectedNote.id,
                },
                {
                    onSuccess: () => {
                        Notify.success("Nota de baja");
                    },
                    onError: (errors) => {
                        console.log(errors);
                        for (let error in errors) {
                            Notify.failure(errors[error]);
                        }
                    },
                }
            );
        };
        return {
            deleteNote,
            values,
            goto,
            notes_c,
            filters,
        };
    },
};
</script>
