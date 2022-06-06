<template>
    <!-- Here a sidebar if needed -->

    <div class="px-2 mt-5">
        <div class="w-11/12 ml-auto mr-auto mt-2 transform">
            <div class="flex">
                <h4 class="text-2xl text-white">Creando Nota de Venta</h4>
                <div class="flex ml-auto items-center">
                    <button
                        class="bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg text-sm px-3 py-3 text-center mr-2"
                        @click="goback()"
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
                        class="bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm p-2 text-center mr-2"
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
                        class="disabled:bg-indigo-800 bg-indigo-700 hover:bg-indigo-600 text-white font-medium rounded-lg text-sm px-2 py-2 text-center mr-2"
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
                <h4 class="text-base font-semibold">Numero</h4>
                <input
                    disabled
                    class="disabled text-base font-medium border rounded w-6/12 h-9 py-3 px-3 text-white"
                />
            </div>
            <div class="col-span-1 mt-3">
                <h4 class="text-base font-semibold">Fecha</h4>
            </div>
            <div class="col-span-2 mt-3">
                <h4 class="text-base font-semibold">Glosa</h4>
                <input
                    class="text-base font-medium border rounded w-9/12 h-9 py-3 px-3 text-black"
                    placeholder="Ingresa una glosa"
                    maxlength="200"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";
export default {
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
    emits: ["goback"],
    setup(props, { emit }) {
        const goback = () => {
            emit("goback");
        };
        return { goback };
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
