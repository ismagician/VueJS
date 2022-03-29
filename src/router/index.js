import { createRouter, createWebHashHistory } from 'vue-router'

import Navigation from '../components/NavBar.vue';
import NavigationPastelero from '../components/NavBarPastelero.vue';
import Div from  '../views/InvAdorno.vue';
import InvSabor from '../views/InvSabor.vue';
import HacerPedido from '../views/HacerPedido.vue';
import Adornos from '../views/Adornos.vue';
import Sabores from '../views/Sabores.vue';
import Index from '../views/Index.vue';

const routes = [
  {
    path: '/',
    name: 'inicio',
    components: {
      default: Index ,
      navigation: Navigation,
    }
  },
  {
    path: '/sabores',
    name: 'sabores',
    components: {
      default: Sabores ,
      navigation: Navigation,
    }
  },
  {
    path: '/adornos',
    name: 'adornos',
    components: {
      default: Adornos ,
      navigation: Navigation,
    }
  },
  
  {
    path: '/pedido',
    name: 'pedido',
    components: {
      default: HacerPedido ,
      navigation: Navigation,
    }
  },
  {
    path: '/invsabor',
    name: 'invsabor',
    components: {
      default: InvSabor ,
      navigation: NavigationPastelero,
    }
  },
  {
    path: '/invadorno',
    name: 'invadorno',
    components: {
      default: Div ,
      navigation: NavigationPastelero,
  }
   
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
