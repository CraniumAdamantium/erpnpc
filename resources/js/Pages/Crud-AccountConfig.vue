<template>
    <Navbar :userName="userData.name" :companyName="company.name" />
    <div class="m-4 text-white">
        <div class="flex flex-col">
            <div>
                <p class="text-2xl">
                    Configura las cuentas de la empresa {{ company.name }}
                </p>
            </div>
            <div class="flex flex-col w-96 mx-auto gap-2">
                <div class="flex flex-row">
                    <a class="text-base mr-2 self-center"> Caja :</a>
                    <Dropdown
                        class="w-56 ml-auto"
                        optionLabel="label"
                        v-model="values.caja"
                        :options="accounts_c"
                        :filter="true"
                    >
                        <template #value>
                            {{
                                values.caja.label == null
                                    ? "Selecciona una cuenta"
                                    : values.caja.label
                            }}
                        </template>
                    </Dropdown>
                </div>
                <div class="flex flex-row">
                    <a class="text-base mr-2 self-center"> Crédito fiscal :</a>
                    <Dropdown
                        class="w-56 ml-auto"
                        optionLabel="label"
                        :options="accounts_c"
                        v-model="values.credito_f"
                        :filter="true"
                    >
                        <template #value>
                            {{
                                values.credito_f.label == null
                                    ? "Selecciona una cuenta"
                                    : values.credito_f.label
                            }}
                        </template>
                    </Dropdown>
                </div>
                <div class="flex flex-row">
                    <a class="text-base mr-2 self-center"> Débito Fiscal :</a>
                    <Dropdown
                        class="w-56 ml-auto"
                        optionLabel="label"
                        :options="accounts_c"
                        v-model="values.debito_f"
                        :filter="true"
                    >
                        <template #value>
                            {{
                                values.debito_f.label == null
                                    ? "Selecciona una cuenta"
                                    : values.debito_f.label
                            }}
                        </template>
                    </Dropdown>
                </div>
                <div class="flex flex-row">
                    <a class="text-base mr-2 self-center"> Compras :</a>
                    <Dropdown
                        class="w-56 ml-auto"
                        optionLabel="label"
                        :options="accounts_c"
                        v-model="values.compras"
                        :filter="true"
                    >
                        <template #value>
                            {{
                                values.compras.label == null
                                    ? "Selecciona una cuenta"
                                    : values.compras.label
                            }}
                        </template>
                    </Dropdown>
                </div>
                <div class="flex flex-row">
                    <a class="text-base mr-2 self-center"> Ventas :</a>
                    <Dropdown
                        class="w-56 ml-auto"
                        optionLabel="label"
                        :options="accounts_c"
                        v-model="values.ventas"
                        :filter="true"
                        ><template #value>
                            {{
                                values.ventas.label == null
                                    ? "Selecciona una cuenta"
                                    : values.ventas.label
                            }}
                        </template>
                    </Dropdown>
                </div>
                <div class="flex flex-row">
                    <a class="text-base mr-2 self-center"> IT :</a>
                    <Dropdown
                        class="w-56 ml-auto"
                        optionLabel="label"
                        :options="accounts_c"
                        v-model="values.it"
                        :filter="true"
                        ><template #value>
                            {{
                                values.it.label == null
                                    ? "Selecciona una cuenta"
                                    : values.it.label
                            }}
                        </template>
                    </Dropdown>
                </div>

                <div class="flex flex-row">
                    <a class="text-base mr-2 self-center"> IT por pagar :</a>
                    <Dropdown
                        class="w-56 ml-auto"
                        optionLabel="label"
                        :options="accounts_c"
                        v-model="values.it_p"
                        :filter="true"
                    >
                        <template #value>
                            {{
                                values.it_p.label == null
                                    ? "Selecciona una cuenta"
                                    : values.it_p.label
                            }}
                        </template>
                    </Dropdown>
                </div>
                <div class="flex flex-row">
                    <a class="self-top">¿Integración?</a>
                    <InputSwitch class="mx-auto" v-model="values.integracion" />
                </div>
                <button class="bg-green-500 p-4 rounded-lg" @click="create()">
                    Guardar
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "./SimpleTemplates/Navbar.vue";
import Dropdown from "primevue/dropdown";
import InputSwitch from "primevue/inputswitch";

import { reactive } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { Notify } from "notiflix";
import { Inertia } from "@inertiajs/inertia";
export default {
    components: { Navbar, Dropdown, InputSwitch },
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
    setup(props) {
        const values = reactive({
            caja: {},
            credito_f: {},
            debito_f: {},
            compras: {},
            ventas: {},
            it: {},
            it_p: {},
            integracion: false,
        });
        onMounted(() => {
            if (props.company.account_config) {
                //first we need to filter the accounts
                let accounts_filt = props.company.accounts
                    .map((account) => {
                        return {
                            label: account.name,
                            value: account.id_account,
                        };
                    })
                    .filter((account) => {
                        //Check if exists in props company account_config
                        return (
                            account.value ==
                                props.company.account_config.id_account_caja ||
                            account.value ==
                                props.company.account_config
                                    .id_account_compras ||
                            account.value ==
                                props.company.account_config
                                    .id_account_ventas ||
                            account.value ==
                                props.company.account_config.id_account_it ||
                            account.value ==
                                props.company.account_config.id_account_it_p ||
                            account.value ==
                                props.company.account_config
                                    .id_account_credito_f ||
                            account.value ==
                                props.company.account_config.id_account_debito_f
                        );
                    });
                //Now we need to set the values
                values.caja = accounts_filt.find(
                    (account) =>
                        account.value ==
                        props.company.account_config.id_account_caja
                );
                values.credito_f = accounts_filt.find(
                    (account) =>
                        account.value ==
                        props.company.account_config.id_account_credito_f
                );
                values.debito_f = accounts_filt.find(
                    (account) =>
                        account.value ==
                        props.company.account_config.id_account_debito_f
                );
                values.compras = accounts_filt.find(
                    (account) =>
                        account.value ==
                        props.company.account_config.id_account_compras
                );
                values.ventas = accounts_filt.find(
                    (account) =>
                        account.value ==
                        props.company.account_config.id_account_ventas
                );
                values.it = accounts_filt.find(
                    (account) =>
                        account.value ==
                        props.company.account_config.id_account_it
                );
                values.it_p = accounts_filt.find(
                    (account) =>
                        account.value ==
                        props.company.account_config.id_account_it_p
                );
                values.integracion =
                    props.company.account_config.integration == 1
                        ? true
                        : false;
            }
        });
        const accounts_c = computed({
            get() {
                return props.company.accounts
                    .filter(
                        (account) => account.level == props.company.level //Last level
                    )
                    .map((account) => {
                        return {
                            label: account.code + " - " + account.name,
                            value: account.id_account,
                        };
                    })
                    .filter(
                        //Filter on select
                        (account) => {
                            //Filter if it's selected in values

                            return !(
                                values.caja.value == account.value ||
                                values.credito_f.value == account.value ||
                                values.debito_f.value == account.value ||
                                values.compras.value == account.value ||
                                values.it.value == account.value ||
                                values.ventas.value == account.value ||
                                values.it_p.value == account.value
                            );
                        }
                    );
            },
        });
        const create = () => {
            //Validation first
            console.log(values);
            if (
                Object.keys(values.caja).length == 0 ||
                Object.keys(values.credito_f).length == 0 ||
                Object.keys(values.debito_f).length == 0 ||
                Object.keys(values.compras).length == 0 ||
                Object.keys(values.ventas).length == 0 ||
                Object.keys(values.it).length == 0 ||
                Object.keys(values.it_p).length == 0
            ) {
                Notify.failure("Debes escoger todas las cuentas primero.");
                return;
            }
            //Inertia post create
            Inertia.post(
                route("accounts.api.create_config"),
                {
                    id_company: props.company.id_company,
                    id_account_caja: values.caja.value,
                    id_account_credito_f: values.credito_f.value,
                    id_account_debito_f: values.debito_f.value,
                    id_account_compras: values.compras.value,
                    id_account_ventas: values.ventas.value,
                    id_account_it: values.it.value,
                    id_account_it_p: values.it_p.value,
                    integration: values.integracion,
                },
                {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        Notify.success("Configuración creada con éxito.");
                    },
                    onError: (error) => {
                        console.log(error);
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        return {
            create,
            values,
            accounts_c,
        };
    },
};
</script>
