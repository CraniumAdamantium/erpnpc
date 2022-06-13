<template>
    <!-- Here a sidebar if needed -->
    <div class="mt-5">
        <div class="w-11/12 mx-auto mt-2 transform">
            <div class="flex">
                <h4 class="text-2xl text-white">
                    {{
                        Object.keys(details).length > 0 ? "Viendo " : "Creando "
                    }}
                    nota de venta Nº
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
                        v-if="Object.keys(details).length == 0"
                        class="bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm p-2 text-center mr-2"
                        @click="save()"
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
                            <p class="text-center">Precio</p>
                            <InputText
                                class="w-full text-center text-lg text-white"
                                v-model="valuesToPush.sale_price"
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

                <Column
                    field="article_name"
                    header="Articulo"
                    :sortable="true"
                ></Column>
                <!-- Fecha de entrada es la fecha de la nota de compra -->

                <Column field="quantity" header="Cantidad" :sortable="true"
                    ><template #editor="slotProps">
                        <InputText
                            v-model="slotProps.data[slotProps.field]"
                        /> </template
                ></Column>
                <Column
                    field="id_note_lot"
                    header="Lote Nº"
                    :sortable="true"
                ></Column>
                <Column field="sale_price" header="Precio" :sortable="true">
                    <template #editor="slotProps">
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
                            @click="delete_that(slotProps.data.id_article)"
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
        const goback = () => {
            emit("goback");
        };
        const articles_c = computed({
            /* A diferencia del articulos para ventas, acá solo tengo que traer los articulos con lote mayor a 0*/
            /* Solo puedo traer uno, pero la cosa es que  me guio por id_note_lot */
            get() {
                if (Object.keys(props.details).length > 0) return; //Esto es para no hacerlo si está en vista
                /* Primero filtro por tipo de nota */
                let artic = [];
                props.company.notes
                    .filter((note) => {
                        return note.type == "1" && note.deleted_at == null;
                    })
                    .forEach((note) => {
                        note.notes_lot.forEach((lot) => {
                            console.log(lot, "Lote?");
                            if (lot.pivot.quantity > 0) {
                                artic.push(lot);
                            }
                        });
                    });
                console.log(artic);
                return artic
                    .map((art) => {
                        return {
                            label:
                                art.name +
                                " - Lote " +
                                art.pivot.id_note_lot +
                                " / [" +
                                art.pivot.quantity +
                                "]",
                            value: art.pivot.id_note_lot,
                            id_article: art.id_article,
                            quantity: art.pivot.quantity,
                            name: art.name,
                        };
                    })
                    .filter((art) => {
                        console.log(art, "pruebita");
                        //Filter if it's in table
                        return !values.table.some((fila) => {
                            return fila.id_article == art.id_article;
                        });
                    });
            },
        });

        const values = reactive({
            number: computed(() => {
                return props.company.notes.length == 0
                    ? 1
                    : Math.max(
                          ...props.company.notes
                              .filter((note) => {
                                  return note.type == 2;
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
                        return item.sale_price * item.quantity;
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
            sale_price: 1,
        });
        const validate = () => {
            let go = true;
            if (valuesToPush.quantity == "" || valuesToPush.quantity <= 0) {
                Notify.failure("Ingresa una cantidad mayor a 0");
                go = false;
            }
            if (valuesToPush.sale_price == "" || valuesToPush.sale_price <= 0) {
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
            if (nozero()) return;
            if (!validate()) return;
            values.table.push({
                ...valuesToPush,
                id_article: valuesToPush.article.id_article,
                article_name: valuesToPush.article.name,
                id_note_lot: valuesToPush.article.value,
            });

            blank();
        };
        const blank = () => {
            valuesToPush.article = {};
            valuesToPush.quantity = 1;
            valuesToPush.sale_price = 1;
        };
        const nozero = () => {
            let response = false;
            valuesToPush.quantity = parseInt(valuesToPush.quantity);
            valuesToPush.stock = parseInt(valuesToPush.stock);
            if (valuesToPush.quantity == "" || valuesToPush.quantity <= 0) {
                valuesToPush.quantity = 1;
                Notify.warning(
                    "La cantidad no puede ser 0 o menos, estableciendo 1"
                );
                response = true;
            }
            if (valuesToPush.sale_price == "" || valuesToPush.sale_price <= 0) {
                Notify.warning(
                    "El precio de venta no puede ser 0 o negativo, estableciendo 1"
                );
                valuesToPush.sale_price = 1;
                response = true;
            }
            //Now validate that the article max stock is not exceeded
            console.log(valuesToPush.article);
            if (valuesToPush.quantity > valuesToPush.article.quantity) {
                Notify.failure(
                    "La cantidad no puede ser mayor al stock del artículo"
                );
                response = true;
            }
            return response;
        };
        const delete_that = (num) => {
            //Find index of id_article
            let index = values.table.findIndex((item) => {
                return item.id_article == num;
            });
            values.table.splice(index, 1);
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
                table[item.id_article] = {
                    quantity: item.quantity,
                    id_note_lot: item.id_note_lot, //to count the article
                    sale_price: item.sale_price,
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
            console.log("Data enviada", data);

            Inertia.post(route("notes.api.create_v"), data, {
                onSuccess: () => {
                    Notify.success("Nota de venta creada");
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
                props.details.details.forEach((detalle) => {
                    values.table.push({
                        article_name: detalle.name,
                        quantity: detalle.pivot.quantity,
                        id_note_lot: detalle.pivot.id_note_lot,
                        sale_price: detalle.pivot.sale_price,
                        deleted_at: detalle.pivot.deleted_at,
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
                console.log(e);
                if (e.newValue == "" || e.newValue <= 0) {
                    Notify.failure("Ingresa una cantidad mayor a 0");
                    return;
                }
                if (e.newValue > e.data.article.quantity) {
                    Notify.failure(
                        "La cantidad no puede ser mayor al stock del artículo. Stock: " +
                            e.data.article.quantity
                    );
                    return;
                }

                values.table[e.index].quantity = e.newValue;
            }
            if (e.field == "sale_price") {
                if (e.newValue == "" || e.newValue <= 0) {
                    Notify.failure("Ingresa un precio mayor a 0");
                    return;
                }
                values.table[e.index].sale_price = e.newValue;
            }
        };
        return {
            onCellEditComplete,
            emitDelete,

            save,
            delete_that,
            nozero,
            goback,
            values,
            valuesToPush,

            articles_c,
            addRow,
        };
    },
    methods: {
        goReport() {
            window.open(
                `http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReporteNotaVenta&standAlone=true&note_number=${this.details.number}&id_company=${this.company.id_company}&id_user=1&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no`
            );
        },
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
