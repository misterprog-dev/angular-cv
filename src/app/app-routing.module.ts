import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cvtech/cv/cv.component';
import {ColorComponent} from './color/color.component';
import {DetailCvComponent} from './cvtech/detail-cv/detail-cv.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {RoutersimulateComponent} from './routersimulate/routersimulate.component';
import {DetailsComponent} from './cvtech/details/details.component';
import {AddCvComponent} from './cvtech/add-cv/add-cv.component';
import {LoginComponent} from './login/login.component';
import {ObservableComponent} from './observable/observable.component';
import {HttpComponent} from './http/http.component';
import {LoginGuard} from './guard/login.guard';


const routes: Routes = [
  {
    path: 'cv', children: [
      { path: '', component: CvComponent},
      { path: 'delete/:id', component: DetailsComponent},
      { path: 'add', component: AddCvComponent},
      { path: ':id', component: DetailsComponent},
    ]
  },
  { path: '', component: CvComponent, pathMatch: 'full', canActivate: [LoginGuard]},
  { path: 'color/:default', component: ColorComponent, canActivate: [LoginGuard]},
  { path: 'rs', component: RoutersimulateComponent, canActivate: [LoginGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'obs', component: ObservableComponent, canActivate: [LoginGuard]},
  { path: 'galerie', component: HttpComponent, canActivate: [LoginGuard]},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
