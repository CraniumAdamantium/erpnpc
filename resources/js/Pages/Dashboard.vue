<template>
    <Navbar
        v-if="loaded_user"
        :companyName="company.name"
        :userName="userData.name"
    />
    <div v-if="loaded_user" class="mt-8" style="margin-left: 2rem">
        <h4 class="text-white text-2xl mt-3 font-medium">
            Bienvenido de nuevo
            <span class="underline decoration-solid"> {{ userData.name }} </span
            >🎇
        </h4>
        <h4 class="text-white text-lg mt-3 font-medium">
            Empresa:
            <span class="underline decoration-solid">{{ company.name }}</span
            >💲
        </h4>
    </div>
</template>
<script>
import axios from "axios";
import Navbar from "./SimpleTemplates/Navbar.vue";
export default {
    components: {
        Navbar,
    },
    data() {
        return {
            company: [],
            loaded_user: false,
            loaded_company: false,
            userData: [],
        };
    },
    mounted() {
        this.setUser();
        this.setData();
    },
    methods: {
        toggleMenu() {
            document.getElementById("menu").classList.toggle("hidden");
        },
        setUser() {
            axios.get(route("user.data")).then((response) => {
                this.userData = response.data.userData;
                console.log("datos de usuariio", this.userData);
                this.loaded_user = true;
            });
        },
        setData() {
            const company = window.location.pathname.split("/").pop();
            axios
                .get(route("managementdate.api.read", company))
                .then((response) => {
                    this.company = response.data.company;
                    console.log("Datos de compañia", this.company);
                    this.loaded_company = true;
                });
        },
    },
};
</script>
