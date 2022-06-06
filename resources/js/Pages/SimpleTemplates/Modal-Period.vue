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
                                    >Nombre Periodo *</label
                                >
                                <!--<label
                                    v-if="errorName"
                                    for="name"
                                    class="absolute text-sm text-red-500 duration-300 transform"
                                    >{{ messageErrorName }}
                                </label>-->
                            </div>
                            <div class="relative mb-5 z-0 w-full group">
                                <label
                                    for="address"
                                    class="block mb-2 text-gray-400"
                                    >Seleccione el rango de fechas:</label
                                >
                                <div class="flex items-center">
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
                                    <span class="mr-2 ml-8 text-gray-400"
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
                                </div>
                                <!--<p>
                                    <label
                                        v-if="errorStart_date"
                                        style="width: 270px"
                                        class="absolute text-sm text-red-500 duration-300 transform"
                                        >{{ messageErrorStart_date }}
                                    </label>
                                </p>
                                <p class="ml-80">
                                    <label
                                        v-if="errorEnd_date"
                                        class="absolute text-sm text-red-500 duration-300 transform"
                                        >{{ messageErrorEnd_date }}
                                    </label>
                                </p>
                                <label
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
                            type="button"
                            class="text-white bg-rose-600 hover:bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Cancelar
                        </button>
                        <button
                            @click="create"
                            v-if="modalButtons == 'register'"
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
        managementData: {
            type: Object,
            default: {},
        },
        periodDates: Array,
        id_management: Number,
        id_company: Number,
        id_user: Number,
        realstartdate: String,
        realenddate: String,
        showModal: {
            type: Boolean,
            default: false,
        },
        modalTitle: String,
        modalButtons: String,
        periodData: {
            type: Object,
            default: {
                id_period: "",
                id_user: "",
                id_management: "",
                status: "",
                start_date: "",
                end_date: "",
                name: "",
            },
        },
    },
    watch: {
        periodData: {
            handler() {
                this.newData = Object.assign({}, this.periodData); //Shallow copy, newData will be a reference to periodData but it can't periodData
            },
        },
    },
    data() {
        return {
            newData: Object.assign({}, this.periodData), //We make it here since props are unmutable NOTE, this shit is mutable and idk why
            dates: this.periodDates,
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
            this.newData = Object.assign({}, this.periodData); //Reset old state
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
            for (let i = 0; i < this.periodDates.length; i++) {
                let start = dayjs(
                    this.periodDates[i].start_date,
                    "DD/MM/YYYY",
                    true
                );
                let end = dayjs(
                    this.periodDates[i].end_date,
                    "DD/MM/YYYY",
                    true
                );
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
                        this.periodDates[i].id_period ==
                        this.periodData.id_period
                    ) {
                        sendColor = "green";
                    }
                }
            }
            if (
                !dayjs(checkDateStr).isBetween(
                    dayjs(this.managementData.start_date, "DD/MM/YYYY"),
                    dayjs(this.managementData.end_date, "DD/MM/YYYY"),
                    null,
                    "[]"
                )
            ) {
                sendColor = "LightCoral";
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
        setErrors(errors, defaultError) {
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
                    console.log(errors[key][0]);
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
                id_management: this.id_management.toString(), //Db validates string based in string not number
            };
            Notify.init({
                clickToClose: true,
            });
            axios
                .post(route("period.api.create"), dataToSet)
                .catch((error) => {
                    this.flushErrors();
                    if (error.response.data.message) {
                        if (error.response.data.type == 1) {
                            Notify.failure(error.response.data.message);
                        } else {
                            this.setErrors(
                                error.response.data.errors,
                                error.response.data.message
                            );
                        }
                    } else {
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
                        if (response.data?.success) {
                            Notify.success("Periodo creado con éxito");
                            this.$emit("updatePeriods");
                            this.cancel();
                        }
                    } catch (error) {
                        console.log("No se pudo completar la peticion");
                    }
                });
        },
        update() {
            console.log(this.newData);
            let dataToRefresh = {
                id_period: this.newData.id_period,
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
                id_company: this.id_company,
                realstartdate: this.realstartdate,
                realenddate: this.realenddate,
            };
            dataToRefresh = this.removeEmptyValues(dataToRefresh);
            Notify.init({
                clickToClose: true,
            });
            axios
                .post(route("period.api.update"), dataToRefresh)
                .catch((error) => {
                    this.flushErrors();
                    if (error.response.data.message) {
                        if (error.response.data.type == 1) {
                            Notify.failure(error.response.data.message);
                        } else {
                            this.setErrors(
                                error.response.data.errors,
                                error.response.data.message
                            );
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
                    if (response?.data?.success) {
                        Notify.success("Se ha actualizado el periodo");
                        this.$emit("updatePeriods");
                        this.$emit("cleanSelectedPeriod");
                        this.cancel();
                    }
                });
        },
    },
};
</script>
