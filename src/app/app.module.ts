import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvtech/cv/cv.component';
import { ListecvComponent } from './cvtech/listecv/listecv.component';
import { ItemCvComponent } from './cvtech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvtech/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { EmbaucheComponent } from './cvtech/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RoutersimulateComponent } from './routersimulate/routersimulate.component';
import { DetailsComponent } from './cvtech/details/details.component';
import { AddCvComponent } from './cvtech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvtech/delete-cv/delete-cv.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginInterceptorProvider} from './interceptor/login.interceptor';
import {LoginGuard} from './guard/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    GrandChildComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    ListecvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    EmbaucheComponent,
    HeaderComponent,
    PagenotfoundComponent,
    RoutersimulateComponent,
    DetailsComponent,
    AddCvComponent,
    DeleteCvComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginInterceptorProvider, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
