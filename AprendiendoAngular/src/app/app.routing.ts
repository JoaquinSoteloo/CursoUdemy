//Importar los modulos del router de angular

import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'


//Importar componenetes a los cuales les quiero hacer una pagina exclusiva

import  { HomeComponent } from './components/home/home.component';

import { BlogComponent} from './components/blog/blog.component';

import { FormularioComponent } from './components/formulario/formulario.component';

import { PeliculasComponent } from './components/peliculas/peliculas.component';

import { Pagina1Component } from './components/pagina1/pagina1.component';

//Array de rutas

const appRoutes : Routes  = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: Pagina1Component}
];


//Exportar modulo ruta
export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes)
