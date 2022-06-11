<template>
    <!-- Here a sidebar if needed -->
    <div class="px-4 mt-5">
        <div class="w-12/12 ml-auto mr-auto mt-2 transform">
            <div class="flex">
                <h4 class="text-2xl text-white">
                    {{
                        Object.keys(details).length > 0 ? "Viendo " : "Creando "
                    }}
                    nota de compra Nº
                    {{
                        Object.keys(details).length > 0
                            ? details.number
                            : values.number
                    }}
                    {{
                        Object.keys(details).length > 0
                            ? " | " + details.deleted_at
                            : null
                    }}
                </h4>
                <div class="flex ml-auto items-center">
                    <button
                        class="bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg text-sm p-2 text-center mr-2"
                        @click="goback()"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="white"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"
                            />
                        </svg>
                    </button>
                    <button
                        class="bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm p-2 text-center mr-2"
                        @click="save()"
                        :disabled="Object.keys(details).length > 0"
                    >
                        <svg
                            width="24"
                            height="24"
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
                        v-if="Object.keys(details).length > 0"
                        class="disabled:bg-indigo-800 bg-indigo-700 hover:bg-indigo-600 text-white font-medium rounded-lg text-sm px-2 py-2 text-center mr-2"
                        id="showReport"
                    >
                        <svg
                            width="24"
                            height="24"
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
                        v-if="
                            Object.keys(details).length > 0 &&
                            details.deleted_at == 'Activo'
                        "
                        id="trash_receipt"
                        class="text-white disabled:bg-red-800 bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-2 py-2 text-center"
                        @click="emitDelete()"
                    >
                        <svg
                            width="24"
                            height="24"
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
    <div class="flex flex-col">
        <div class="w-11/12 mx-auto flex flex-row m-4">
            <div class="flex flex-col mt-2 mr-2">
                <p class="text-base text-white">Fecha</p>
                <Calendar
                    :disabled="Object.keys(details).length > 0"
                    :inputStyle="'background: white; color: black;'"
                    v-model="values.date"
                    dateFormat="dd/mm/yy"
                />
            </div>
            <div class="flex flex-col m-2">
                <p class="text-base text-white">Descripción</p>
                <input
                    :disabled="Object.keys(details).length > 0"
                    class="p-2 text-black rounded-sm disabled:bg-gray-500 disabled:text-white"
                    v-model="values.description"
                />
            </div>
            <div class="flex flex-col ml-auto mt-2">
                <p class="text-base text-white">Total</p>
                <p class="mt-1 text-xl text-white text-center self-center">
                    {{ values.total }}
                </p>
            </div>
        </div>
        <div class="w-11/12 mx-auto">
            <DataTable
                :value="values.table"
                :editMode="Object.keys(details).length > 0 ? '' : 'cell'"
                @cell-edit-complete="onCellEditComplete"
            >
                <template #empty> No hay artículos, añade uno! </template>
                <template #header v-if="Object.keys(details).length == 0">
                    <div
                        class="flex flex-row justify-between gap-2 items-center"
                    >
                        <div class="self-end mx-2">
                            <p class="text-center">Número</p>
                            <p class="text-center text-lg text-white m-4">
                                {{ actualLoteNumber }}
                            </p>
                        </div>
                        <div class="self-end w-full">
                            <p class="text-center">Artículo</p>
                            <Dropdown
                                class="w-full text-center text-lg text-white"
                                placeholder="Selecciona un artículo"
                                :options="articles_c"
                                optionLabel="label"
                                v-model="valuesToPush.article"
                                :filter="true"
                            />
                        </div>
                        <div class="self-end w-full">
                            <p class="text-center">Cantidad</p>
                            <InputText
                                class="w-full text-center text-lg text-white"
                                v-model="valuesToPush.quantity"
                                placeholder="Ingresa la cantidad"
                                type="number"
                                @change="nozero()"
                            />
                        </div>
                        <div class="self-end w-full">
                            <p class="text-center">Fecha de expiración</p>
                            <Calendar
                                dateFormat="dd/mm/yy"
                                class="w-full text-center text-lg text-white"
                                v-model="valuesToPush.expiration_date"
                                placeholder="Ingresa la fecha de expiración"
                                :inputStyle="'text-align:center;'"
                            />
                        </div>

                        <div class="self-end w-full">
                            <p class="text-center">Precio</p>
                            <InputText
                                class="w-full text-center text-lg text-white"
                                v-model="valuesToPush.purchase_price"
                                placeholder="Ingresa el precio"
                                type="number"
                                @change="nozero()"
                            />
                        </div>
                        <div class="self-end mb-1">
                            <button
                                class="bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm p-2 text-center"
                                @click="addRow()"
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
                        </div>
                    </div>
                </template>
                <Column field="number" header="Número de lote" :sortable="true">
                </Column>
                <Column field="article_name" header="Articulo" :sortable="true">
                </Column>
                <!-- Fecha de entrada es la fecha de la nota de compra -->

                <Column
                    field="expiration_date_c"
                    header="Fecha de expiración"
                    :sortable="true"
                    ><template #editor="slotProps">
                        <Calendar
                            dateFormat="dd/mm/yy"
                            v-model="slotProps.data[slotProps.field]"
                        /> </template
                ></Column>
                <Column field="quantity" header="Cantidad" :sortable="true">
                    <template #editor="slotProps">
                        <InputText
                            v-model="slotProps.data[slotProps.field]"
                        /> </template
                ></Column>
                <Column field="stock" header="Stock" :sortable="true"></Column>
                <Column field="purchase_price" header="Precio" :sortable="true"
                    ><template #editor="slotProps">
                        <InputText
                            v-model="slotProps.data[slotProps.field]"
                        /> </template
                ></Column>
                <Column
                    header="Eliminar"
                    field="number"
                    v-if="Object.keys(details).length == 0"
                >
                    <template #body="slotProps">
                        <button
                            @click="delete_that(slotProps.data.number)"
                            class="bg-sky-400 hover:bg-sky-500 text-white font-medium rounded-lg text-sm px-4 py-2 text-center"
                        >
                            X
                        </button>
                    </template>
                </Column>
                <Column
                    header="Estado"
                    field="deleted_at"
                    v-if="Object.keys(details).length > 0"
                >
                    <template #body="slotProps">
                        <span
                            :class="
                                slotProps.data.deleted_at == null
                                    ? 'bg-green-500 px-2 py-1 rounded-lg text-white'
                                    : 'bg-red-500 px-2 py-1 rounded-lg text-white'
                            "
                        >
                            {{
                                slotProps.data.deleted_at == null
                                    ? "Activo"
                                    : "Anulado en " + slotProps.data.deleted_at
                            }}
                        </span>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Dropdown from "primevue/dropdown";
import dayjs from "dayjs";
import InputText from "primevue/inputtext";
import { reactive } from "@vue/reactivity";
import { computed, watch, ref, onMounted } from "@vue/runtime-core";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { Notify } from "notiflix";

export default {
    components: { InputText, Calendar, DataTable, Column, Dropdown },
    props: {
        company: {
            type: Object,
            required: true,
        },

        userData: {
            type: Object,
            required: true,
        },
        details: {
            type: Object,
            default: {},
        },
    },
    emits: ["goback", "delete"],
    setup(props, { emit }) {
        const makeDate = (date) => {
            return dayjs(date).format("DD/MM/YYYY") == "Invalid Date"
                ? ""
                : dayjs(date).format("DD/MM/YYYY");
        };
        const goback = () => {
            emit("goback");
        };
        const articles_c = computed({
            get() {
                if (Object.keys(props.details).length > 0) return;
                return props.company.articles
                    .map((article) => {
                        return {
                            label: article.name,
                            value: article.id_article,
                        };
                    })
                    .filter((article) => {
                        //If is included in table omit
                        return !values.table.some(
                            (table_article) =>
                                table_article.article.value == article.value
                        );
                    });
            },
        });
        const actualLoteNumber = computed(() => {
            let totalForThis = 0;
            props.company.notes.forEach((note) => {
                note.notes_lot.forEach((detail) => {
                    if (detail.id_article == valuesToPush.article.value) {
                        totalForThis += 1;
                    }
                });
            });
            return totalForThis + 1;
        });
        const values = reactive({
            number: computed(() => {
                return props.company.notes.length == 0
                    ? 1
                    : Math.max(
                          ...props.company.notes
                              .filter((note) => {
                                  return note.type == 1;
                              })
                              .map((note) => {
                                  return note.number;
                              })
                      ) + 1;
            }),
            date: "",
            description: "",
            total: computed(() => {
                return values.table
                    .map((item) => {
                        return item.purchase_price * item.quantity;
                    })
                    .reduce((prev, next) => {
                        return parseFloat(prev) + parseFloat(next);
                    }, 0);
            }),
            id_receipt: "",
            table: [],
        });

        const valuesToPush = reactive({
            article: {}, //ok
            expiration_date: "", //ok
            quantity: 1, //ok
            purchase_price: 1,
        });
        const validate = () => {
            let go = true;
            if (valuesToPush.quantity == "" || valuesToPush.quantity <= 0) {
                Notify.failure("Ingresa una cantidad mayor a 0");
                go = false;
            }
            if (
                valuesToPush.purchase_price == "" ||
                valuesToPush.purchase_price <= 0
            ) {
                Notify.failure("Ingresa un precio");
                go = false;
            }

            if (Object.keys(valuesToPush.article).length == 0) {
                Notify.failure("Ingresa un artículo");
                go = false;
            }
            if (valuesToPush.stock == "" || valuesToPush.stock <= 0) {
                Notify.failure("Ingresa un stock mayor a 0");
                go = false;
            }
            return go;
        };
        const addRow = () => {
            if (!validate()) return;
            values.table.push({
                ...valuesToPush,
                number: actualLoteNumber.value,
                id_category: values.categories,
                article_name: valuesToPush.article.label,
                expiration_date: valuesToPush.expiration_date,
                stock: valuesToPush.quantity,
                expiration_date_c:
                    makeDate(valuesToPush.expiration_date) == ""
                        ? "Sin expiración"
                        : makeDate(valuesToPush.expiration_date),
            });

            blank();
        };
        const blank = () => {
            valuesToPush.article = {};
            valuesToPush.expiration_date = "";
            valuesToPush.quantity = 1;
            valuesToPush.purchase_price = 1;
        };
        const nozero = () => {
            valuesToPush.quantity = parseInt(valuesToPush.quantity);
            valuesToPush.stock = parseInt(valuesToPush.stock);
            if (valuesToPush.quantity == "" || valuesToPush.quantity <= 0) {
                valuesToPush.quantity = 1;
            }
            if (
                valuesToPush.purchase_price == "" ||
                valuesToPush.purchase_price <= 0
            ) {
                valuesToPush.purchase_price = 1;
            }
            if (valuesToPush.stock == "" || valuesToPush.stock <= 0) {
                valuesToPush.stock = 1;
            }
            //Finally parse to int
        };
        const delete_that = (num) => {
            values.table.splice(num - 1, 1);
        };
        const save = () => {
            let goonogo = true;
            //Aditional validation
            if (values.table.length == 0) {
                Notify.failure("Ingresa al menos un artículo");
                goonogo = false;
            }
            if (values.date == "") {
                Notify.failure("Ingresa una fecha");
                goonogo = false;
            }
            if (values.description == "" || values.description.length < 3) {
                Notify.failure(
                    "Ingresa una descripción de al menos 3 carácteres"
                );
                goonogo = false;
            }
            if (!goonogo) return;

            //Now change table to array of objects where the key is the id_article

            let table = {};
            values.table.forEach((item) => {
                table[item.article.value] = {
                    quantity: item.quantity,
                    stock: item.quantity, //Same as initial quantity
                    id_note_lot: item.article.value, //to count the article
                    purchase_price: item.purchase_price,
                    entry_date: values.date,
                    expiration_date: item.expiration_date,
                };
            });

            //define object to send
            let data = {
                id_company: props.company.id_company,
                date: values.date,
                description: values.description,
                table: table,
                total: values.total,
            };

            Inertia.post(route("notes.api.create_c"), data, {
                onSuccess: () => {
                    Notify.success("Nota de compra creada");
                    emit("goback");
                },
                onError: (errors) => {
                    for (let error in errors) {
                        Notify.failure(errors[error]);
                    }
                },
            });
        };
        onMounted(() => {
            console.log("Montado", values.table);
            if (Object.keys(props.details).length > 0) {
                //If details is set, then just show it and disable everything
                props.details.lot.forEach((lote) => {
                    values.table.push({
                        number: lote.pivot.id_note_lot,
                        article_name: lote.name,
                        expiration_date_c:
                            lote.pivot.expiration_date == null
                                ? "Sin fecha de expiración"
                                : lote.pivot.expiration_date,
                        quantity: lote.pivot.quantity,
                        purchase_price: lote.pivot.purchase_price,
                        stock: lote.pivot.stock,
                        deleted_at: lote.pivot.deleted_at,
                    });
                });
                values.description = props.details.description;
                values.date = props.details.date;
            }
        });

        const emitDelete = () => {
            emit("delete");
            emit("goback");
        };
        const onCellEditComplete = (e) => {
            if (e.field == "quantity") {
                if (e.newValue == "" || e.newValue <= 0) {
                    Notify.failure("Ingresa una cantidad mayor a 0");
                    return;
                }
                values.table[e.index].stock = e.newValue;
                values.table[e.index].quantity = e.newValue;
            }
            if (e.field == "purchase_price") {
                if (e.newValue == "" || e.newValue <= 0) {
                    Notify.failure("Ingresa un precio");
                    return;
                }
                values.table[e.index].purchase_price = e.newValue;
            }
            if (e.field == "expiration_date_c") {
                values.table[e.index].expiration_date = e.newValue;
                values.table[e.index].expiration_date_c =
                    makeDate(e.newValue) == ""
                        ? "Sin expiración"
                        : makeDate(e.newValue);
            }
        };
        return {
            onCellEditComplete,
            emitDelete,
            actualLoteNumber,
            save,
            delete_that,
            nozero,
            goback,
            values,
            valuesToPush,
            makeDate,
            articles_c,
            addRow,
        };
    },
};
</script>
<style>
.p-inputtext:disabled {
    background-color: rgb(107 114 128) !important;
    opacity: 1 !important;
    color: white !important;
}
</style>
