import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoedaProvider } from './providers/moeda-provider';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { RecompensaComponent } from './pages/recompensa/recompensa.component';
import { MoedasComponent } from './pages/moedas/moedas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastController } from "toast-controller";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AtividadesComponent,
    RecompensaComponent,
    MoedasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    MoedaProvider,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
