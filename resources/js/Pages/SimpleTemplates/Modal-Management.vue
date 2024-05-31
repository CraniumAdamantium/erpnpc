<template>
    <div
        v-if="showModal"
        class="transition-opacity top-0 left-0 min-h-full min-w-full z-auto bg-black bg-opacity-40 absolute overflow-y-scroll"
    >
        <div class="flex items-center justify-center min-h-screen">
            <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                <div class="relative bg-gray-800 rounded-lg shadow">
                    <div
                        class="flex justify-between items-start p-3 rounded-t border-b border-gray-500"
                    >
                        <h3
                            class="text-xl font-semibold text-gray-300 lg:text-2xl"
                        >
                            {{ modalTitle }}
                        </h3>
                    </div>
                    <div class="p-4 space-y-6">
                        <form>
                            <div class="relative z-0 mb-5 w-full group">
                                <input
                                    v-focus
                                    autocomplete="off"
                                    type="text"
                                    class="block py-2.5 px-0 w-full text-xl text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    onkeypress="return /[A-Z 0-9]/i.test(event.key)"
                                    maxlength="15"
                                    v-model="newData.name"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    for="name"
                                    class="absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                                    >Nombre Gestión *</label
                                >
                                <!--<label
                                    v-if="errorName"
                                    for="name"
                                    class="absolute text-sm text-red-500 duration-300 transform"
                                    >{{ messageErrorName }}
                                </label>
                                <label
                                    v-if="
                                        messageErrorGeneric ==
                                        'El nombre de la gestión ya está tomado.'
                                    "
                                    for="name"
                                    class="absolute text-sm text-red-500 duration-300 transform"
                                    >{{ messageErrorGeneric }}
                                </label>-->
                            </div>
                            <div class="relative z-0 w-full group">
                                <label
                                    for="address"
                                    class="block mb-2 text-gray-400"
                                    >Seleccione el rango de fechas:
                                    <!--<label
                                        v-if="
                                            messageErrorGeneric ==
                                            'Existe solapamiento con otra gestión.'
                                        "
                                        class="ml-2 absolute text-sm text-red-500 duration-300 transform"
                                        >{{ messageErrorGeneric }}
                                    </label>-->
                                </label>
                                <div class="flex items-center mb-3">
                                    <div class="relative z-0 w-full group">
                                        <span class="mx-2 text-gray-400"
                                            >Desde</span
                                        >
                                        <Calendar
                                            v-model="newData.start_date"
                                            dateFormat="dd/mm/yy"
                                            :baseZIndex="100"
                                        >
                                            <template #date="slotProps">
                                                <p
                                                    :style="
                                                        'color: ' +
                                                        setColorForDate(
                                                            slotProps.date
                                                        ) +
                                                        ';'
                                                    "
                                                >
                                                    {{ slotProps.date.day }}
                                                </p>
                                            </template>
                                        </Calendar>
                                        <!--<p>
                                            <label
                                                v-if="errorStart_date"
                                                class="absolute text-sm text-red-500 duration-300 transform"
                                                >{{ messageErrorStart_date }}
                                            </label>
                                        </p>-->
                                    </div>
                                    <div class="relative z-0 w-full group">
                                        <span class="mx-2 text-gray-400"
                                            >Hasta</span
                                        >
                                        <Calendar
                                            :baseZIndex="100"
                                            v-model="newData.end_date"
                                            dateFormat="dd/mm/yy"
                                        >
                                            <template #date="slotProps">
                                                <p
                                                    :style="
                                                        'color: ' +
                                                        setColorForDate(
                                                            slotProps.date
                                                        ) +
                                                        ';'
                                                    "
                                                >
                                                    {{ slotProps.date.day }}
                                                </p>
                                            </template>
                                        </Calendar>
                                        <!--<p class="ml-4">
                                            <label
                                                v-if="errorEnd_date"
                                                class="absolute text-sm text-red-500 duration-300 transform"
                                                >{{ messageErrorEnd_date }}
                                            </label>
                                        </p>-->
                                    </div>
                                </div>
                                <!--<label
                                    v-if="errorGeneric"
                                    for="name"
                                    class="text-base text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                                    >{{ messageErrorGeneric }}
                                </label>-->
                            </div>
                        </form>
                    </div>
                    <div
                        class="flex items-center p-3 space-x-2 rounded-b border-t border-gray-500"
                    >
                        <button
                            @click="cancel()"
                            data-modal-toggle="modal-addmanagement"
                            type="button"
                            class="text-white bg-rose-600 hover:bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Cancelar
                        </button>
                        <button
                            @click="create"
                            v-if="modalButtons == 'register'"
                            data-modal-toggle="modal-addmanagement"
                            type="button"
                            id="register"
                            class="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Registrar
                        </button>
                        <button
                            @click="update"
                            v-if="modalButtons == 'edit'"
                            type="button"
                            id="edit"
                            class="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Calendar from "primevue/calendar";
import { Notify } from "notiflix";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);
const focus = {
    mounted: (el) => el.focus(),
};
export default {
    directives: {
        focus,
    },
    components: {
        Calendar,
    },
    props: {
        modalTitle: String,
        modalButtons: String,
        id_company: Number,
        allDates: Array,
        managementData: {
            type: Object,
            default: {
                id_management: "",
                id_user: "",
                id_company: "",
                status: "",
                start_date: "",
                end_date: "",
                name: "",
            },
        },
        showModal: {
            type: Boolean,
            default: false,
        },
    },

    watch: {
        managementData: {
            handler() {
                this.newData = Object.assign({}, this.managementData); //Shallow copy, newData will be a reference to managementData but it can't managementData
            },
        },
    },
    data() {
        return {
            newData: Object.assign({}, this.managementData), //We make it here since props are unmutable NOTE, this shit is mutable and idk why
            dates: this.allDates,
            errorName: false,
            messageErrorName: "",
            errorStart_date: false,
            messageErrorStart_date: "",
            errorEnd_date: false,
            messageErrorEnd_date: "",
            errorGeneric: false,
            messageErrorGeneric: "",
        };
    },
    methods: {
        flushErrors() {
            this.errorName = false;
            this.messageErrorName = "";
            this.errorStart_date = false;
            this.messageErrorStart_date = "";
            this.errorEnd_date = false;
            this.messageErrorEnd_date = "";
            this.errorGeneric = false;
            this.messageErrorGeneric = "";
        },
        cancel() {
            this.$emit("close");
            this.newData = Object.assign({}, this.managementData); //Reset old state
            this.flushErrors();
        },
        setColorForDate(checkDate) {
            /* First we make the first checkDate, calendar returns it in 3 objects (day, month, year) so we make it a str */
            let month = parseFloat(checkDate.month) + parseFloat(1); //Sum 1 because months are from 0 to 11
            let checkDateStr = dayjs(
                checkDate.day + "/" + month + "/" + checkDate.year,
                "D/M/YYYY",
                true
            );
            let sendColor = "white";
            /* Then we check if the date is valid*/
            for (let i = 0; i < this.allDates.length; i++) {
                let start = dayjs(
                    this.allDates[i].start_date,
                    "DD/MM/YYYY",
                    true
                );
                let end = dayjs(this.allDates[i].end_date, "DD/MM/YYYY", true);
                if (
                    dayjs(checkDateStr).isBetween(
                        start,
                        end, //End
                        null, //Limit
                        "[]" //Include
                    )
                ) {
                    sendColor = "red";
                    if (
                        this.allDates[i].id_management ==
                        this.managementData.id_management
                    ) {
                        sendColor = "green";
                    }
                }
            }
            return sendColor;
        },
        removeEmptyValues(data) {
            let array = data;
            for (let key in array) {
                if (array[key] == "" || array[key] == null) {
                    delete array[key];
                }
            }
            return array;
        },
        setErrors(errors) {
            for (let key in errors) {
                if (key == "name" && errors[key][0]) {
                    this.errorName = true;
                    //this.messageErrorName = errors[key][0];
                    Notify.failure(errors[key][0]);
                }
                if (key == "start_date" && errors[key][0]) {
                    this.errorStart_date = true;
                    //this.messageErrorStart_date = errors[key][0];
                    Notify.failure(errors[key][0]);
                }
                if (key == "end_date" && errors[key][0]) {
                    this.errorEnd_date = true;
                    //this.messageErrorEnd_date = errors[key][0];
                    Notify.failure(errors[key][0]);
                }
            }
        },
        create() {
            console.log(this.newData);
            let dataToSet = {
                name: this.newData.name,
                start_date: dayjs(this.newData.start_date).format("YYYY-MM-DD"),
                end_date: dayjs(this.newData.end_date).format("YYYY-MM-DD"),
                id_company: this.id_company.toString(), //Db validates string based in string not number
            };
            Notify.init({
                clickToClose: true,
            });
            axios
                .post(route("managementdate.api.create"), dataToSet)
                .catch((error) => {
                    this.flushErrors();
                    if (error.response.data.message) {
                        if (error.response.data.type == 1) {
                            Notify.failure(error.response.data.message);
                        } else {
                            this.setErrors(error?.response?.data?.errors);
                        }
                    } else {
                        //Me parece que este else esta de mas, pero bue porsiaca.
                        if (error.response.data.type == 1) {
                            Notify.failure("Error al crear");
                        } else {
                            this.errorGeneric = true;
                            this.messageErrorGeneric =
                                error.response.data.message;
                        }
                    }
                })
                .then((response) => {
                    try {
                        if (response.data.success) {
                            Notify.success("Gestión creada con éxito");
                            this.$emit("update-data");
                            this.cancel();
                        }
                        console.log(response);
                    } catch (error) {
                        //console.log(error);
                        console.log("No se pudo completar la peticion");
                    }
                });
        },
        update() {
            console.log(this.newData);
            let dataToRefresh = {
                id_management: this.newData.id_management,
                name: this.newData.name,
                start_date: dayjs(
                    this.newData.start_date instanceof Date
                        ? this.newData.start_date.getTime()
                        : dayjs(this.newData.start_date, "DD/MM/YYYY")
                ).format("YYYY-MM-DD"),
                end_date: dayjs(
                    this.newData.end_date instanceof Date
                        ? this.newData.end_date.getTime()
                        : dayjs(this.newData.end_date, "DD/MM/YYYY")
                ).format("YYYY-MM-DD"),
            };
            dataToRefresh = this.removeEmptyValues(dataToRefresh);
            Notify.init({
                clickToClose: true,
            });
            axios
                .post(route("managementdate.api.update"), dataToRefresh)
                .catch((error) => {
                    this.flushErrors();
                    if (error.response.data.message) {
                        if (error.response.data.type == 1) {
                            Notify.failure(error.response.data.message);
                        } else {
                            this.setErrors(error?.response?.data?.errors);
                        }
                    } else {
                        if (error.response.data.type == 1) {
                            Notify.failure("Error al actualizar");
                        } else {
                            this.errorGeneric = true;
                            this.messageErrorGeneric =
                                error.response.data.message;
                        }
                    }
                })
                .then((response) => {
                    try {
                        if (response.data.success) {
                            Notify.success("Se ha actualizado la gestión");
                            this.$emit("update-data");
                            this.cancel();
                        }
                    } catch (error) {
                        console.log("No se pudo completar la peticion");
                    }
                });
        },
    },
};
</script>
