<template>
        <header>
            <div class="header">
                <img src="../assets/img/pasteleria.png" alt="" />
                <h2 style="display: block">Pastelería</h2>
            </div>
    </header>

        <div class="nav">
            <nav>
                <ul>
                     
                    
                    <li><router-link to="/">Inicio</router-link></li>
                    <li><router-link to="/sabores">Sabores</router-link></li>
                    <li><router-link to="/adornos">Adornos</router-link></li>
                    <li><router-link to="/pedido">Hacer Pedido</router-link></li>

                  
                </ul>
            </nav>
           
        </div>
</template>

<script>
export default {
    name: 'n',
}
</script>