<template>
    <Navbar :userName="userName" :companyName="companyName" />
    <div class="w-11/12 ml-auto mr-auto mt-2">
        <div class="flex">
            <p class="text-2xl text-white mb-2">Administracion de categorias</p>
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
        >
            <template #header> Editar Categorias </template>
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
                        <input
                            v-focus
                            id="nombre"
                            autocomplete="off"
                            name="nombre"
                            class="text-black form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            v-model="data.name"
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
                        <input
                            id="descripcion"
                            autocomplete="off"
                            name="descripcion"
                            class="text-black form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            v-model="data.description"
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
import { Inertia } from "@inertiajs/inertia";
import { Notify, Loading } from "notiflix";
const focus = {
    mounted: (el) => el.focus(),
};
export default {
    directives: {
        focus,
    },
    components: { Tree, Navbar, Dialog },
    props: ["company", "user"],
    setup(props) {
        const userName = computed(() => {
            return props.user.name;
        });
        const companyName = computed(() => {
            return props.company.name;
        });
        const data = reactive({
            showModal: false,
            accion: "Agregar",
            expandedKeys: [],
            selectedCategoryKeys: {},
            categorias_tratadas: [],
            name: "",
            description: "",
            categoria_seleccionada: {},
        });
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
                array.forEach((node) => {
                    node.key = node.id_category;
                    node.label = node.name;
                });
                let findParentIndex = (id_parent) => {
                    return array.findIndex(
                        (node) => node.id_category == id_parent
                    );
                };

                let allParentsNull = (arr) => {
                    return arr.find((node) => {
                        return node.id_parent_category != null;
                    });
                };
                let hasChildren = (id) => {
                    return array.find((node) => node.id_parent_category == id);
                };
                let check = allParentsNull(array);
                let count = 0;
                while (check) {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i].id_parent_category != null) {
                            if (
                                hasChildren(array[i].id_category) == undefined
                            ) {
                                let indexParent = findParentIndex(
                                    array[i].id_parent_category
                                );
                                if (indexParent != -1) {
                                    let padre = array[indexParent];

                                    if (!padre.children) {
                                        padre.children = [];
                                    }

                                    padre.children.push(array[i]);
                                }

                                array.splice(i, 1);
                            }
                        }
                    }

                    check = allParentsNull(array);

                    count++;
                    if (count > 100) {
                        break;
                    }
                }
                console.log("Terminado en ", count, " iteraciones");
                let tree = [
                    {
                        label: "Categorias",
                        children: array,
                    },
                ];
                return tree;
            };
            //Assign porque proxy prop no es editable

            return arrayToTree(Object.assign(props.company.categories));
            //Expand all
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
            onNodeUnselect,
            onNodeSelect,
            data,
            submit,
            deleteCat,
            userName,
            companyName,
        };
    },
};
</script>
