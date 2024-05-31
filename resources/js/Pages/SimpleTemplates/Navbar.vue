<template>
    <header>
        <nav
            class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"
        >
            <div class="grid auto-cols-min grid-cols-2 w-4/12">
                <div class="col">
                    <a>
                        <img
                            @click="dashboard"
                            src="https://queeserp.tk/images/queeserp.svg"
                            alt="Logo que es erp"
                            class="md:w-48 md:mr-8 cursor-pointer"
                        />
                    </a>
                </div>
                <div class="col text-base sm:w-96">
                    <p
                        class="empresa-name font-semibold"
                        style="color: #171a21"
                    >
                        {{ companyName }}
                    </p>
                </div>
            </div>
            <svg
                @click="toggleMenu"
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                class="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            <div
                class="hidden w-full md:flex md:items-center md:w-auto"
                id="menu"
            >
                <ul
                    class="pt-4 text-base text-gray-900 md:flex md:justify-between md:pt-0"
                >
                    <TransparentDropDown
                        :list="[
                            [
                                'Reporte de Libro Diario',
                                'reportld.api.read',
                                companyName,
                            ],
                            [
                                'Reporte de Libro Mayor',
                                'reportlm.api.read',
                                companyName,
                            ],
                            [
                                'Reporte de Balance Inicial',
                                'reportbi.api.read',
                                companyName,
                            ],
                            [
                                'Comprobación de Sumas y Saldos',
                                'reportss.api.read',
                                companyName,
                            ],
                            [
                                'Reporte de Estado de Resultados',
                                'reportea.api.read',
                                companyName,
                            ],
                        ]"
                        value="Reportes"
                    />
                    <TransparentDropDown
                        :list="[
                            ['Artículos', 'items', companyName],
                            ['Categorías', 'categories', companyName],
                            ['Notas', 'notes', companyName],
                        ]"
                        value="Inventario"
                    />
                    <TransparentDropDown
                        :list="[
                            ['Gestión', 'date.management', companyName],
                            ['Moneda', 'exchange_rate', companyName],
                        ]"
                        value="Configuración"
                    />
                    <TransparentDropDown
                        :list="[
                            ['Cuentas', 'accounts', companyName],
                            [
                                'Configurar Integración',
                                'accounts_config',
                                companyName,
                            ],
                            ['Comprobante', 'receipt', companyName],
                        ]"
                        value="Contabilidad"
                    />
                    <!-- Usuario acá -->
                    <DropDownUser
                        :list="[
                            ['Cambiar Empresa', 'companies'],
                            ['Cerrar Sesión', 'logout'],
                        ]"
                        value="Preferencias"
                    />
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import DropDownUser from "./DropDownUser.vue";
import { Inertia } from "@inertiajs/inertia";
import TransparentDropDown from "./TransparentDropDownUser.vue";
export default {
    components: {
        DropDownUser,
        TransparentDropDown,
    },
    props: {
        userName: {
            type: String,
            default: "",
        },
        companyName: {
            type: String,
            default: "",
        },
    },
    methods: {
        toggleMenu() {
            document.getElementById("menu").classList.toggle("hidden");
        },
        changeCompany() {
            Inertia.get(route("companies"));
        },
        //Redirect
        dashboard() {
            Inertia.get(
                route(
                    "dashboard",
                    decodeURI(window.location.pathname.split("/").pop())
                )
            );
        },
        joinManagement() {
            Inertia.get(
                route(
                    "date.management",
                    decodeURI(window.location.pathname.split("/").pop())
                )
            );
        },
        joinAccount() {
            Inertia.get(
                route(
                    "accounts",
                    decodeURI(window.location.pathname.split("/").pop())
                )
            );
        },
    },
};
</script>

<style>
@media (max-width: 768px) {
    .empresa-name {
        display: none;
    }
}
ul {
    font-weight: 600;
}
</style>
