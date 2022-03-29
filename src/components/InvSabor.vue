<template>
    <section>
            <table class="centrar">
                <tr>
                    <th>Tipo de Sabor</th>
                    <th>Cantidad Disponible</th>
                </tr>
                <tr>
                    <td>{{$store.state.sabores.saborFresa.nombre}} </td>
                    <td>{{$store.state.sabores.saborFresa.precio}}</td>
                </tr>
                <tr>
                    <td>{{$store.state.sabores.saborChocolate.nombre}} </td>
                    <td>{{$store.state.sabores.saborChocolate.precio}}</td>
                </tr>
                <tr>
                    <td>{{$store.state.sabores.saborVainilla.nombre}} </td>
                    <td>{{$store.state.sabores.saborVainilla.precio}}</td>
                </tr>
            </table>
        </section>
</template>

<script>
    export default {

        name: 'InvSabor',
    }
</script>