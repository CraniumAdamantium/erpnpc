<template>
    <Navbar :userName="userData.name" :companyName="company.name" />

    <div class="px-2 mt-5 mx-10 mb-10">
        <h4 class="text-2xl text-white">Administración de Artículos</h4>

        <DataTable
            columnResizeMode="fit"
            :value="items_c"
            v-model:selection="data.selected_item"
            class="p-datatable-sm"
            :paginator="true"
            selectionMode="single"
            :scrollable="true"
            :rows="10"
            v-model:filters="filters"
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
                            value: 'Agregar artículo',
                            class: 'text-center',
                        }"
                        @click="
                            (data.showModal = !data.showModal),
                                (values.accion = 'Agregar'),
                                blank()
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
                        class="disabled:bg-gray-500 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2.5"
                        v-tooltip.bottom="{
                            value: 'Editar artículo',
                            class: 'text-center',
                        }"
                        :disabled="Object.keys(data.selected_item).length == 0"
                        @click="
                            (data.showModal = !data.showModal),
                                (values.accion = 'Editar'),
                                setEdit()
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
                        class="text-white disabled:bg-gray-500 bg-sky-500 hover:bg-sky-600 rounded-lg px-4 py-2.5"
                        v-tooltip.bottom="{
                            value: 'Lotes de artículo',
                            class: 'text-center',
                        }"
                        @click="data.showLotes = !data.showLotes"
                        :disabled="Object.keys(data.selected_item).length == 0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            />
                        </svg>
                    </button>
                    <button
                        class="text-white disabled:bg-gray-500 bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2.5"
                        v-tooltip.bottom="{
                            value: 'Eliminar artículo',
                            class: 'text-center',
                        }"
                        :disabled="Object.keys(data.selected_item).length == 0"
                        @click="deleteItem()"
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
            <template #empty> No hay artículos, registra uno ! </template>
            <Column header="Nombre" :sortable="true" field="name"> </Column>
            <Column header="Descripción" :sortable="true" field="description">
            </Column>
            <Column header="Cantidad" :sortable="true" field="quantity">
            </Column>
            <Column
                class="preciotrucho"
                header="Precio"
                field="sale_price"
                :sortable="true"
                bodyStyle="text-align:right;"
            >
            </Column>
            <Column header="Categorias" :sortable="false" field="categories">
            </Column>
        </DataTable>
    </div>
    <Dialog
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        :header="
            values.accion == 'Agregar'
                ? 'Agregar articulo'
                : 'Editar articulo ' + data.selected_item.name
        "
        v-model:visible="data.showModal"
        :closeOnEscape="false"
    >
        <form @submit.prevent="submit">
            <div class="grid xl:grid-cols-2 xl:gap-6 mt-2">
                <div>
                    <span class="block text-sm font-bold mb-2"> Nombre * </span>
                    <InputText
                        class="w-full"
                        type="text"
                        placeholder="Nombre para el item"
                        v-model="values.name"
                    />
                </div>
                <div>
                    <span class="block text-sm font-bold mb-2">
                        Descripcion *
                    </span>
                    <InputText
                        class="w-full"
                        type="text"
                        placeholder="Descripción para el item"
                        v-model="values.description"
                    />
                </div>

                <div>
                    <span class="block text-sm font-bold mb-2">
                        Precio de venta *
                    </span>
                    <InputText
                        class="w-full"
                        type="number"
                        placeholder="Precio de venta para el item"
                        v-model="values.sale_price"
                    />
                </div>
                <div>
                    <span class="block text-sm font-bold mb-2">
                        Categorias *
                    </span>
                    <MultiSelect
                        class="w-full"
                        placeholder="Selecciona una o más categorias"
                        :options="categories_c"
                        optionLabel="label"
                        v-model="values.categories"
                        :filter="true"
                    />
                </div>
            </div>

            <div class="flex justify-end mt-4">
                <button
                    :class="
                        values.accion == 'Agregar'
                            ? 'bg-green-500 text-white font-bold py-2 px-4 rounded-lg'
                            : 'bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg'
                    "
                    type="submit"
                >
                    {{ values.accion == "Agregar" ? "Guardar" : "Actualizar" }}
                </button>
            </div>
        </form>
    </Dialog>
    <Dialog
        :breakpoints="{ '1960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        :header="'Artículo: ' + data.selected_item.name"
        v-model:visible="data.showLotes"
        :closeOnEscape="true"
    >
        <DataTable
            columnResizeMode="fit"
            :value="lotes"
            class="p-datatable-sm"
            :paginator="true"
            selectionMode="single"
            :scrollable="true"
            :rows="7"
            v-model:filters="filters"
        >
            <template #empty> No hay artículos, registra uno ! </template>
            <Column header="Nro. Lote" :sortable="true" field="lote_number">
            </Column>
            <Column
                header="Fecha de Ingreso"
                :sortable="true"
                field="entry_date"
            >
            </Column>
            <Column
                header="Fecha de Vencimiento"
                :sortable="true"
                field="expiration_date"
            >
            </Column>
            <Column header="Cantidad" field="quantity" :sortable="true">
            </Column>
            <Column header="Stock" :sortable="false" field="stock"> </Column>
            <Column header="Estado" :sortable="false" field="status"> </Column>
        </DataTable>
    </Dialog>
</template>
<script>
import Navbar from "./SimpleTemplates/Navbar.vue";
import { FilterMatchMode } from "primevue/api";
import Tooltip from "primevue/tooltip";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import { reactive } from "@vue/reactivity";
import MultiSelect from "primevue/multiselect";
import { computed } from "@vue/runtime-core";
import { Notify, Confirm } from "notiflix";
import { Inertia } from "@inertiajs/inertia";

export default {
    directives: {
        tooltip: Tooltip,
    },
    components: {
        MultiSelect,
        Dialog,
        Column,
        DataTable,
        Navbar,
        InputText,
    },
    props: {
        userData: {
            type: Object,
            required: true,
        },
        company: {
            type: Object,
            required: true,
        },
        items: {
            type: Array,
            default: [],
        },
        categories: {
            type: Array,
            default: [],
        },
    },
    setup(props) {
        /* Compute item and categories to give good data to the tables */
        const items_c = computed({
            get() {
                return props.items.map((item) => {
                    return {
                        id: item.id_article,
                        name: item.name,
                        description: item.description,
                        quantity: item.quantity,
                        sale_price: item.sale_price,
                        categories: item.categories
                            .map((category) => {
                                return category.name;
                            })
                            .join(", "),
                        id_categories: item.categories.map((category) => {
                            return category.id_category;
                        }),
                    };
                });
            },
        });
        const lotes = computed({
            get() {
                let arraytrucho = [];
                props.items
                    .filter((item) => item.id_article == data.selected_item.id)
                    .forEach((item) => {
                        console.log("item", item);
                        item.notes_lot.forEach((lote) => {
                            arraytrucho.push({
                                lote_number: lote.pivot.id_note_lot,
                                stock: lote.pivot.quantity,
                                entry_date: lote.pivot.entry_date,
                                expiration_date: lote.pivot.expiration_date
                                    ? lote.pivot.expiration_date
                                    : " - ",
                                quantity: parseInt(lote.pivot.stock),
                                status:
                                    lote.pivot.deleted_at != null
                                        ? "Anulado desde " +
                                          lote.pivot.deleted_at
                                        : lote.pivot.quantity > 0
                                        ? "Activo"
                                        : "Agotado",
                            });
                        });
                    });
                console.log(arraytrucho);
                return arraytrucho;
            },
        });
        const categories_c = computed({
            get() {
                return props.categories.map((category) => {
                    return {
                        label: category.name,
                        value: category.id_category,
                    };
                });
            },
        });
        /* ================ */
        /* Set values on edit click */
        const setEdit = () => {
            values.name = data.selected_item.name;
            values.description = data.selected_item.description;
            values.quantity = data.selected_item.quantity;
            values.sale_price = data.selected_item.sale_price;
            //Filter categories based on id_categories on selected item
            values.categories = categories_c.value.filter((category) => {
                return data.selected_item.id_categories.includes(
                    category.value
                );
            });
        };
        /* ================ */
        /* Blank the unique dialog that we have */
        const blank = () => {
            values.name = "";
            values.description = "";

            values.sale_price = "0";
            values.categories = [];
        };
        /* ================= */
        /* Submit value and reload props with Inertia, this handles create and update */
        const submit = () => {
            let paso = true;
            if (values.name == "" || values.name.length < 3) {
                Notify.failure("El nombre debe tener al menos 3 caracteres");
                paso = false;
            }
            if (values.description == "" || values.description.length < 3) {
                Notify.failure(
                    "La descripción debe tener al menos 3 caracteres"
                );
                paso = false;
            }

            if (values.sale_price == "" || values.sale_price <= 0) {
                Notify.failure("El precio debe ser mayor a 0");
                paso = false;
            }
            if (values.categories.length == 0) {
                Notify.failure("Debe seleccionar al menos una categoria");
                paso = false;
            }
            if (!paso) return;

            Inertia.post(
                values.accion == "Agregar"
                    ? route("items.api.create")
                    : route("items.api.update"),
                {
                    id_article:
                        values.accion == "Agregar"
                            ? null
                            : data.selected_item.id,
                    name: values.name,
                    description: values.description,
                    quantity: values.quantity,
                    sale_price: values.sale_price,
                    categories: values.categories.map((cat) => {
                        return cat.value;
                    }),
                    id_company: props.company.id_company,
                },
                {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: (response) => {
                        Notify.success(response.props.flash.success.message);

                        data.showModal = false;
                    },
                    onError: (response) => {
                        for (let message in response) {
                            Notify.failure(response[message]);
                        }
                    },
                }
            );
        };
        /* ============================================ */
        /* Filter watchmode for the table */
        const filters = reactive({
            global: {
                value: "",
                matchMode: FilterMatchMode.Contains,
            },
        });
        /* =========================== */
        /* Modal control and selected item */
        const data = reactive({
            showModal: false,
            showLotes: false,
            selected_item: {},
        });
        /* ============================ */
        /* Another values used for post behavior */
        const values = reactive({
            name: "",
            description: "",
            quantity: "0",
            sale_price: "",
            categories: [],
            accion: "Agregar",
        });
        /* =========================== */
        /* Delete the item with confirmation */
        const deleteItem = () => {
            Confirm.init({
                titleColor: "#FF0000",
                messageColor: "#FF0000",
                okButtonBackground: "#FF0000",
            });
            Confirm.show(
                "¿Deseas eliminar este artículo?",
                "Estás a punto de eliminar el articulo " +
                    data.selected_item.name +
                    " de la empresa " +
                    props.company.name,
                "Eliminar",
                "Cancelar",
                () => {
                    Inertia.post(
                        route("items.api.delete"),
                        {
                            id_article: data.selected_item.id,
                        },
                        {
                            preserveState: true,
                            preserveScroll: true,
                            onSuccess: (response) => {
                                Notify.success(
                                    response.props.flash.success.message
                                );
                            },
                            onError: (response) => {
                                for (let message in response) {
                                    Notify.failure(response[message]);
                                }
                            },
                        }
                    );
                }
            );
        };
        /* ======================= */
        return {
            deleteItem,
            blank,
            setEdit,
            items_c,
            lotes,
            submit,
            categories_c,
            values,
            data,
            filters,
        };
    },
};
</script>
<style>
.preciotrucho > .p-column-header-content {
    display: inline-flex;
    align-items: right;
    margin-left: auto;
}
td.preciotrucho {
    text-align: right !important;
    display: inline !important;
}
</style>
