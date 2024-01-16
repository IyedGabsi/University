import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    AuthAdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LayoutsModule { }
