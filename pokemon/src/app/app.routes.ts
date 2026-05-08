import { Routes } from '@angular/router';
import { ListaPokemon } from './lista-pokemon/lista-pokemon';
import { ListaTipi } from './lista-tipi/lista-tipi';
import { DettagliPokemon } from './dettagli-pokemon/dettagli-pokemon';


export const routes: Routes = [
    {path:'tipi', component: ListaTipi},
    {path:'lista/:type', component: ListaPokemon},
    {path: 'dettagli/:id', component: DettagliPokemon},
    {path: '', redirectTo: '/tipi', pathMatch: 'full'} //è per gestire le rotte

];
