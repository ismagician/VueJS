<template>
        <section>
            <table class="centrar">
                <tr>
                    <th>Tipo de Adorno</th>
                    <th>Cantidad</th>
                </tr>
                <tr>
                    <td>{{$store.state.adornos.tipoAdorno1.nombre}}</td>
                    <td> {{$store.state.adornos.tipoAdorno1.cantidad}}</td>
                </tr>
                <tr>
                    <td>{{$store.state.adornos.tipoAdorno2.nombre}}</td>
                    <td>{{$store.state.adornos.tipoAdorno2.cantidad}}</td>
                </tr>
                <tr>
                    <td>{{$store.state.adornos.tipoAdorno3.nombre}}</td>
                    <td>{{$store.state.adornos.tipoAdorno1.cantidad}}</td>
                </tr>
            </table>
        </section>
</template>

<script>
    export default {

        name: 'InvAdorno',
    }
</script>
