import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { GuarduserGuard } from './views/guards/guarduser.guard';
import { GuardnouserGuard } from './views/guards/guardnouser.guard';

const routes: Routes = [
  {path:'',component:UserLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'login',loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule),canActivateChild:[GuardnouserGuard]},
    {path:'register',loadChildren:()=>import('./views/user/register/register.module').then(m=>m.RegisterModule),canActivateChild:[GuardnouserGuard]},
    {path:'students',loadChildren:()=>import('./views/user/students/students.module').then(m=>m.StudentsModule),canActivateChild:[GuarduserGuard]},
    {path:'studentdetails/:id',loadChildren:()=>import('./views/user/studentdetails/studentdetails.module').then(m=>m.StudentdetailsModule),canActivateChild:[GuarduserGuard]}
  ]},
  {path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allstudent',loadChildren:()=>import('./views/admin/allstudent/allstudent.module').then(m=>m.AllstudentModule)},
    {path:'studentdetails/:id',loadChildren:()=>import('./views/admin/student/student.module').then(m=>m.StudentModule)},
    {path:'addstudent',loadChildren:()=>import('./views/admin/addstudent/addstudent.module').then(m=>m.AddstudentModule)}
  ]},
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
