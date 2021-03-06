import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {ProduiMockService} from './produit/produit.mock.service';
import{ProduitService} from './produit/produit.service';
import{AppService} from './app.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { XhrInterceptor } from './xhr.interceptor';
import{CookieService} from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    DashbordComponent,
    LoginComponent,
    HomeComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProduiMockService,ProduitService,AppService,
  {provide:HTTP_INTERCEPTORS,useClass:XhrInterceptor,multi:true},
  CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
