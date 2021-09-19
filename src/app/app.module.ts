import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./views/login/login.component";
import {InspeccionComponent} from "./views/inspeccion/inspeccion.component";
import {HttpClientModule} from "@angular/common/http";
import { TOKEN_NAME } from './utils/constantes';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JwtModule} from "@auth0/angular-jwt";
import {NotificacionComponent} from "./views/notificacion/notificacion.component";
import {MaterialModule} from "./material/material.module";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export function tokenGetter() {
  return sessionStorage.getItem(TOKEN_NAME);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InspeccionComponent,
    NotificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.DOMAIN_TOKEN],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
