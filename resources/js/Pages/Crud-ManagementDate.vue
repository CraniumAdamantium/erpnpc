<template>
    <Navbar :userName="userData.name" :companyName="company.name" />
    <!-- Here a sidebar if needed -->
    <div class="px-2 mt-5">
        <h4 class="text-2xl text-white">{{ title }}</h4>
        <TableManagementDate
            @setTitleUp="setTitleUp"
            v-if="loaded_company"
            :company="company"
            @update-data="setData()"
        ></TableManagementDate>
    </div>
</template>
<script>
import axios from "axios";
import Navbar from "./SimpleTemplates/Navbar.vue";
import TableManagementDate from "./SimpleTemplates/Table-ManagementDate.vue";
import ModalManagementDate from "./SimpleTemplates/Modal-Management.vue";
export default {
    components: {
        Navbar,
        TableManagementDate,
        ModalManagementDate,
    },
    data() {
        return {
            company: {},
            loaded_company: false,
            userData: {},
            title: "Administracion de Gestión",
        };
    },
    mounted() {
        this.setUser();
        this.setData();
    },
    methods: {
        setTitleUp(newTitle) {
            this.title = newTitle;
        },
        setUser() {
            axios.get(route("user.data")).then((response) => {
                this.userData = response.data.userData;
                console.log("datos de usuario", this.userData);
            });
        },
        setData() {
            const company = window.location.pathname.split("/").pop();
            axios
                .get(route("managementdate.api.read", company))
                .then((response) => {
                    this.company = response.data.company;
                    console.log("Datos de compañia", this.company);
                });
            this.loaded_company = true;
        },
    },
};
</script>
