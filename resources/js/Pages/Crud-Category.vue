<template>
    <Navbar :userName="user.name" :companyName="company.name" />

    <div class="w-11/12 ml-auto mr-auto mt-2">
        <p class="text-2xl text-white mb-2">Administracion de categorias</p>
        <div class="flex">
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText
                    placeholder="Filtrar por cantidad menor a..."
                    class="w-72"
                    type="number"
                    v-model="data.filter_quantity"
                    @keyup="recreate()"
                />
            </span>
            <div class="flex ml-auto items-center">
                <button
                    class="px-2 py-2 m-1 bg-green-500 text-white rounded-lg"
                    @click="
                        (data.showModal = !data.showModal),
                            (data.accion = 'Agregar'),
                            (data.name = ''),
                            (data.description = '')
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
                    class="px-2 py-2 m-1 disabled:bg-gray-500 bg-yellow-500 text-white rounded-lg"
                    :disabled="
                        data.selectedCategory?.id_category ?? false
                            ? false
                            : true
                    "
                    @click="
                        (data.showModal = !data.showModal),
                            (data.accion = 'Editar'),
                            (data.name = data.selectedCategory?.name ?? ''),
                            (data.description =
                                data.selectedCategory?.description ?? '')
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                    </svg>
                </button>
                <button
                    @click="deleteCat()"
                    class="px-2 py-2 m-1 bg-red-500 text-white rounded-lg disabled:bg-gray-500"
                    :disabled="
                        data.selectedCategory?.id_category ?? false
                            ? false
                            : true
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <Tree
            class="overflow-x-scroll overflow-y-scroll mt-1"
            style="max-height: 70vh; max-width: 92vw"
            :value="data.categorias_tratadas"
            :expandedKeys="data.expandedKeys"
            selectionMode="single"
            v-model:selectionKeys="data.selectedCategoryKeysKeys"
            @node-select="onNodeSelect"
            @node-unselect="onNodeUnselect"
            :filter="true"
            filterMode="lenient"
            filterPlaceholder="Filtrar por nombre"
        >
        </Tree>
    </div>
    <h1 class="text-white text-center mt-2">
        Copyright© <a href="https://github.com/Hyhy092">JASM</a>
    </h1>
    <Dialog
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        :header="
            (data.accion == 'Agregar'
                ? 'Agregar Categoria'
                : 'Editar Categoria') +
            ' en ' +
            (data.selectedCategory?.id_category
                ? data.selectedCategory?.name
                : 'raiz')
        "
        v-model:visible="data.showModal"
    >
        <form @submit.prevent="submit">
            <div class="grid xl:grid-cols-2 xl:gap-6 mt-2">
                <div class="col-span-1">
                    <label
                        for="nombre"
                        class="block text-sm font-medium leading-5 text-white"
                    >
                        Nombre
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <InputText
                            v-focus
                            id="nombre"
                            autocomplete="off"
                            name="nombre"
                            v-model="data.name"
                            class="w-full"
                            minlength="3"
                            placeholder="Nombre de la categoria"
                        />
                    </div>
                </div>
                <div class="col-span-1">
                    <label
                        for="descripcion"
                        class="block text-sm font-medium leading-5 text-white"
                    >
                        Descripción
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <InputText
                            id="descripcion"
                            autocomplete="off"
                            name="descripcion"
                            v-model="data.description"
                            class="w-full"
                            minlength="3"
                            placeholder="Una descripción"
                        />
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <span class="inline-flex rounded-md shadow-sm">
                    <button
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        {{ data.accion }}
                    </button>
                </span>
                <span class="ml-3 inline-flex rounded-md shadow-sm">
                    <button
                        type="button"
                        class="inline-flex justify-center py-2 px-4 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                        @click="data.showModal = false"
                    >
                        Cancelar
                    </button>
                </span>
            </div>
        </form>
    </Dialog>
    <!-- Modal to create -->
</template>
<script>
import Tree from "primevue/tree";
import Dialog from "primevue/dialog";
import Navbar from "./SimpleTemplates/Navbar";
import { computed, onMounted, reactive } from "@vue/runtime-core";
import InputText from "primevue/inputtext";
import { Inertia } from "@inertiajs/inertia";
import { Notify, Loading } from "notiflix";
const focus = {
    mounted: (el) => el.focus(),
};
export default {
    directives: {
        focus,
    },
    components: { Tree, Navbar, Dialog, InputText },
    props: {
        company: {
            type: Object,
            required: true,
        },
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const data = reactive({
            showModal: false,
            accion: "Agregar",
            expandedKeys: [],
            selectedCategoryKeys: {},
            categorias_tratadas: [],
            name: "",
            description: "",
            categoria_seleccionada: {},
            filter_quantity: "",
        });

        /* Iterar sobre todos los valores del arbol "categorias_tratadas" y determinar si el label es menor a */

        const onNodeUnselect = (e) => {
            data.categoria_seleccionada_keys = {};
        };
        const onNodeSelect = (e) => {
            data.selectedCategory = e;
            data.categoria_seleccionada_keys = e;
        };
        const expandAll = () => {
            for (let node in data.categorias_tratadas) {
                expandNode(data.categorias_tratadas[node]);
            }
            data.expandedKeys = { ...data.expandedKeys };
        };
        const expandNode = (node) => {
            data.expandedKeys[node.key] = true;
            if (node.children && node.children.length) {
                for (let child of node.children) {
                    expandNode(child);
                }
            }
        };
        const crearArbol = () => {
            let arrayToTree = (array) => {
                array.forEach((node, index) => {
                    node.key = node.id_category;
                    /* Esta basura silva, si me preguntas, con esto lo hago */
                    let quantity = 0;
                    node.articles?.forEach((article) => {
                        article.notes_lot.forEach((notes_lot) => {
                            if (notes_lot.deleted_at == null) {
                                quantity += notes_lot.pivot.quantity;
                            }
                        });
                    });

                    node.label = node.name;

                    node.label = node.name + " - [" + quantity + "]";

                    if (
                        quantity > data.filter_quantity &&
                        data.filter_quantity != ""
                    ) {
                        node.filter = true;
                        /* Trim from array */
                    } else {
                        node.filter = false;
                    }
                    /* ============== */
                });

                const earray = array.filter((val) => {
                    return !val.filter;
                });

                let findParentIndex = (id_parent) => {
                    return earray.findIndex(
                        (node) => node.id_category == id_parent
                    );
                };

                let allParentsNull = (arr) => {
                    return arr.find((node) => {
                        return node.id_parent_category != null;
                    });
                };
                let hasChildren = (id) => {
                    return earray.find((node) => node.id_parent_category == id);
                };
                let check = allParentsNull(earray);
                let count = 0;
                /* Ignore here for filter */

                while (check) {
                    for (let i = 0; i < earray.length; i++) {
                        if (earray[i].id_parent_category != null) {
                            if (
                                hasChildren(earray[i].id_category) == undefined
                            ) {
                                let indexParent = findParentIndex(
                                    earray[i].id_parent_category
                                );

                                if (indexParent != -1) {
                                    let padre = earray[indexParent];

                                    if (!padre.children) {
                                        padre.children = [];
                                    }

                                    padre.children.push(earray[i]);
                                }

                                earray.splice(i, 1);
                            }
                        }
                    }

                    check = allParentsNull(earray);

                    count++;
                    if (count > 100) {
                        break;
                    }
                }
                console.log("Terminado en ", count, " iteraciones", earray);
                let tree = [
                    {
                        label: "Categorias",
                        children: earray,
                    },
                ];
                return tree;
            };
            //Assign porque proxy prop no es editable

            return arrayToTree([...props.company.categories]);
            //Expand all
        };
        /* Puede que hacer esto lagee si las categorías son miles, aunque lo dudo */
        const recreate = () => {
            console.log("El arbol", crearArbol());
            data.categorias_tratadas = crearArbol();
        };
        onMounted(() => {
            data.categorias_tratadas = crearArbol();
            expandAll();
        });
        const submit = () => {
            if (data.name.length < 3) {
                Notify.failure("El nombre debe tener al menos 3 caracteres");
                return;
            }
            if (data.description.length < 3) {
                Notify.failure(
                    "La descripcion debe tener al menos 3 caracteres"
                );
                return;
            }
            //if data.name is set in company.categories
            let search = props.company.categories.find(
                (node) => node.name == data.name
            );
            if (search != undefined) {
                Notify.failure("Ya existe una categoria con ese nombre");
                return;
            }
            console.log(search);
            Loading.standard({
                clickToClose: false,
                svgSize: "200",
            });
            Inertia.post(
                data.accion == "Agregar"
                    ? route("categories.api.create")
                    : route("categories.api.update"),
                {
                    name: data.name,
                    description: data.description,
                    id_parent_category:
                        data.selectedCategory?.id_category ?? null,
                    id_company: props.company.id_company,
                    id_category: data.selectedCategory?.id_category ?? null,
                },
                {
                    only: ["company"],
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Loading.remove();
                        data.showModal = false;
                        Notify.success("Categoria guardada");
                        data.categorias_tratadas = crearArbol();
                    },
                    onError: () => {
                        Loading.remove();
                        Notify.failure("Error al guardar");
                    },
                }
            );
        };
        const deleteCat = () => {
            if (
                data.selectedCategory.id_category == null ||
                data.selectedCategory.id_category == ""
            ) {
                Notify.failure("Selecciona una categoría");
                return;
            }
            Loading.standard({
                clickToClose: false,
                svgSize: "200",
            });
            Inertia.post(
                route("categories.api.delete"),
                {
                    id: data.selectedCategory.id_category,
                },
                {
                    only: ["company"],
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        Loading.remove();
                        Notify.success("Categoria eliminada");
                        data.showModal = false;
                        data.selectedCategory = {};
                        data.categorias_tratadas = crearArbol();
                    },
                    onError: () => {
                        Loading.remove();
                        Notify.error("Error al eliminar la categoria");
                    },
                }
            );
        };

        return {
            recreate,
            onNodeUnselect,
            onNodeSelect,
            data,
            submit,
            deleteCat,
        };
    },
};
</script>
