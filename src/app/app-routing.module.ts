import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { CourseInfoComponent } from './component/course-info/course-info.component';

const app_routes: Routes = [
  {path: 'home', component: InicioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
  {path: 'info', component: CourseInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
