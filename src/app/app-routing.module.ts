import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { MoedasComponent } from './pages/moedas/moedas.component';
import { RecompensaComponent } from './pages/recompensa/recompensa.component';


const routes: Routes = [
  { path: 'atividades', component: AtividadesComponent },
  { path: 'recompensas', component: RecompensaComponent },
  { path: 'moedas', component: MoedasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
