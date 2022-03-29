<template>
        <header>
            <div class="header">
                
                <h2 style="display: block">Pastelería</h2>
            </div>
    </header>

        <div class="nav">
            <nav>
                <ul>
                     
                    
                    <li><router-link to="/">Inicio</router-link></li>
                    <li><router-link to="/invsabor">Inventario Sabores</router-link></li>
                    <li><router-link to="/invadorno">Inventario Adornos</router-link></li>
                    <li><router-link to="/pedido">Hacer Pedido</router-link></li>

                  
                </ul>
            </nav>
           
        </div>
</template>
    
<script>
    export default {

        name: 'NavBarPastelero',
    }
</script>
