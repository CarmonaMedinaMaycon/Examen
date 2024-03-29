import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes =[
    //ruta base
    {
        path: '/',
        redirect:'/inicio'
    },
    //ruta asociada a los componentes
    {
        path:'/',
        component:{
            render(h) {
                return h('router-view')
            },
        },
        //componentes que se renderizan a partir de router view
        children:[
            {
                path:'/inicio',
                name:'inicio',
                component:()=> import('../components/Inicio.vue')
            },
            {
                path:'/formulario',
                name:'formulario',
                component:()=> import('../components/Formulario.vue')
            },
            {
                path:'/paginador',
                name:'paginador',
                component:()=> import('../components/Paginador.vue')
            },
            
        ]
    }
]
const router = new VueRouter({routes})
export default router;