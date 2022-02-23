import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { HeaderComponent } from './compartido/header/header.component';
import { ClasesComponent } from './clases/clases.component';
import { ResaltadoDirective } from './resaltado.directive';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { DatosService } from './datos.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clases', component: ClasesComponent },
  { path: 'padre', component: PadreComponent },
  { path: 'estilo', component: NgStyleComponent},
  { path: 'estilo/:id', component: NgStyleComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'clases'}
]

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    HeaderComponent,
    ClasesComponent,
    ResaltadoDirective,
    HomeComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {useHash: true})
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
