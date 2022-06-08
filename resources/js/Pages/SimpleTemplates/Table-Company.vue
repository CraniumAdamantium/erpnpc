<template>
    <h1 class="text-center text-white pt-8 text-2xl">Lista de empresas</h1>
    <div class="container mx-auto rounded-lg pt-8" v-if="loaded">
        <div class="columns-2">
            <div>
                <h2 class="text-white">Botones de reporte acá</h2>
            </div>
            <div class="flex justify-end">
                <span class="p-input-icon-right">
                    <i class="pi pi-search" />
                    <InputText id="search" v-model="filters.global.value" />
                </span>
            </div>
        </div>
        <DataTable
            :value="companiesOk"
            dataKey="id_company"
            :paginator="true"
            :rows="10"
            editMode="cell"
            @cell-edit-complete="onCellEditComplete"
            responsiveLayout="scroll"
            v-model:filters="filters"
        >
            <template #empty> No hay empresas. </template>
            <Column
                field="name"
                header="Nombre"
                :sortable="true"
                filterMatchMode="contains"
            >
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data[slotProps.field]" />
                </template>
            </Column>
            <Column
                field="nit"
                header="Nit"
                :sortable="true"
                filterMatchMode="contains"
            >
                <template #editor="slotProps">
                    <InputText
                        v-model="slotProps.data[slotProps.field]"
                    /> </template
            ></Column>
            <Column
                field="initials"
                header="Iniciales"
                :sortable="true"
                filterMatchMode="contains"
            >
                <template #editor="slotProps">
                    <InputText
                        v-model="slotProps.data[slotProps.field]"
                    /> </template
            ></Column>
            <Column
                field="level"
                header="Nivel"
                :sortable="true"
                filterMatchMode="contains"
            >
                <template #editor="slotProps">
                    <InputText
                        v-model="slotProps.data[slotProps.field]"
                    /> </template
            ></Column>
            <Column
                field="phone"
                header="Telefono"
                :sortable="true"
                filterMatchMode="contains"
            >
                <template #editor="slotProps">
                    <InputText
                        v-model="slotProps.data[slotProps.field]"
                    /> </template
            ></Column>
            <Column
                field="email"
                header="Correo"
                :sortable="true"
                filterMatchMode="contains"
            >
                <template #editor="slotProps">
                    <InputText
                        v-model="slotProps.data[slotProps.field]"
                    /> </template
            ></Column>

            <Column
                field="address"
                header="Direccion"
                :sortable="true"
                filterMatchMode="contains"
            >
                <template #editor="slotProps">
                    <InputText
                        v-model="slotProps.data[slotProps.field]"
                    /> </template
            ></Column>
        </DataTable>
    </div>
</template>
<script>

import Column from "primevue/column";
import DataTable from "primevue/datatable/DataTable";
import InputText from "primevue/inputtext";
import ToggleButton from "primevue/togglebutton";
import Button from "primevue/button";
import { FilterMatchMode } from "primevue/api";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default {
    emits: {
        "update-data": "updateData",
    },
    name: "CompanySelect",
    components: {
        DataTable: DataTable,
        Column: Column,
        InputText: InputText,
        ToggleButton: ToggleButton,
        Button: Button,
    },
    props: {
        companies: JSON,
    },
    mounted() {
        this.setCompanies();
    },
    data() {
        return {
            loaded: false,
            companiesOk: "",
            checkedShowButton: false,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
        };
    },
    watch: {
        companies: function () {
            this.setCompanies();
        },
    },
    methods: {
        update(dataToRefresh, e) {
            axios
                .post(route("companies.api.update"), dataToRefresh)
                .then((response) => {
                    if (response.data.success) {
                        Notify.success("Se ha actualizado la empresa");
                    } else {
                        Notify.failure("Error al actualizar");
                    }
                    /*
                        Update and send new name in edit cell complete
                        if name was changed
                     */
                    if (e.field == "name") {
                        this.$emit("update-data", e.newData[e.field]);
                    }
                    this.$emit("update-data");
                })
                .catch((error) => {
                    Notify.failure("Error al actualizar");
                    console.log(error);
                });
        },
        setCompanies() {
            this.companiesOk = this.companies.companies;
            this.loaded = true;
        },
        onCellEditComplete(e) {
            /* Validate that data has changed */
            if (e.data[e.field] != e.newData[e.field]) {
                let dataToRefresh = {
                    id_company: e.data.id_company,
                };
                dataToRefresh[e.field] = e.newData[e.field].toString();
                this.update(dataToRefresh, e);
            }
        },
    },
};
</script>
