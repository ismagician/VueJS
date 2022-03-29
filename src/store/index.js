import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores:{
      saborFresa:{
        nombre: "Fresa",
        precio: 50,
        cantidad: 100
      },
      saborChocolate:{
        nombre: "Chocolate",
        precio: 50,
        cantidad: 100
      },
      saborVainilla:{
        nombre: "Vainilla",
        precio: 50,
        cantidad: 100
      }
    },
    pedidos:[]
    ,
    adornos:{
      tipoAdorno1:{
        nombre: "Glasseado",
        precio: 50,
        cantidad: 100
      },
      tipoAdorno2:{
        nombre: "Merengue",
        precio: 50,
        cantidad: 100
      },
       tipoAdorno3:{
        nombre: "Cobertura tipo marmol",
        precio: 50,
        cantidad: 100
      }
    }
  },
  
  getters: {
    estado(state){
      return state.saborFresa-=1;
    }
  },
  mutations: {
    subirContador(state,random){
      state.counter+=random;
    },
    crearPedido (state){
      const sabor = document.getElementById("sabor")
      const adorno= document.getElementById("adorno")
      const form = document.querySelector("form");
      const data = Object.fromEntries(new FormData(form).entries());

      if (sabor.value!=="none" && adorno.value!=="none"  && data.telefono!="" && data.email!=""  ){
        console.log("lknlknklnlk")

        const pedido= {
          sabor: sabor.value,
          adorno: adorno.value,
          telefono: data.telefono,
          email: data.email,
          descripcion: data.descripcion,
          
         
        }
       
        state.pedidos.push(pedido);
        console.log(state);
        console.log(state.pedidos);
        alert("Pedido Realizado")
      }else{
        alert("Datos Erroneos")
      }
     
      
    }
  },
  actions: {
  },
  modules: {
  }
})
