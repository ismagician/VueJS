<template>
    <section>
            
                <form class="form" id="form" >
                    
                    
                        <h3>Sabor</h3>
                        <select id="sabor" >
                          <option value="none" >Selecciona un Sabor</option>
                            <option value="fcc">Chocolate</option>
                            <option value="fcv">Fresa</option>
                            <option value="fcf">Vainilla</option>
                            <option value="vcf">Frutas</option>
                          
                            <option value="fcc">Fresa con Chocolate</option>
                            <option value="fcv">Fresa con Vainilla</option>
                            <option value="fcf">Fresa con Frutas</option>
                            <option value="vcc">Vainilla con Chocolate</option>
                            <option value="vcf">Vainilla con Frutas</option>
                            <option value="ccf">Chocolate con Frutas </option>
                          
                        </select>
                  
              
                    <h3>Decoración</h3>
                        <select id="adorno">
                          <option value="none" >Tipo de Decoración</option>
                            <option value="glasseado">Glasseado</option>
                            <option value="merengue">Merengue</option>
                            <option value="marmol">Cobertura tipo Marmol</option>
                        
                        </select>
                   
                   
                    
                        <h3>Número Telefónico</h3>
                        <input type="text" id="telefono" name="telefono" placeholder="Teléfono" class="inputform"/>
                   
                    
                        <h3>Corrreo Electrónico</h3>
                    <input type="email" name="email" placeholder="Email" class="inputform"/>
                
                   
                        <h3>Descripción del Pedido</h3>
                    <textarea id="descripcion" name="descripcion" cols="80" rows="10" placeholder="Descripción del Pedido" class="inputform" ></textarea>
                    
                    <div class="centrar">
                    <input type="reset" value="Limpiar Datos">
                     <input type="submit" value="Hacer Pedido" @click="$store.commit('crearPedido')">
                    </div>
              </form>              
            
        </section>
 
</template>

<script>
    export default {

        name: 'HacerPedido',
    }


</script>