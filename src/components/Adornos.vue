<template>
     <section>
            <h2 style="text-align: center">Adornos</h2>
            <table class="centrar">
                <tr>
                    <th>Tipo de Adorno</th>
                    <th>Precio</th>
                </tr>
                <tr>
                    <td>{{$store.state.adornos.tipoAdorno1.nombre}} </td>
                    <td>$ {{$store.state.adornos.tipoAdorno1.precio}}</td>
                </tr>
                <tr>
                    <td>{{$store.state.adornos.tipoAdorno2.nombre}} </td>
                    <td>$ {{$store.state.adornos.tipoAdorno2.precio}}</td>
                </tr>
                <tr>
                    <td>{{$store.state.adornos.tipoAdorno3.nombre}} </td>
                    <td>$ {{$store.state.adornos.tipoAdorno3.precio}}</td>
                </tr>
            </table>
        </section>
</template>

<script>
    export default {

        name: 'Adornos',
    }
</script>