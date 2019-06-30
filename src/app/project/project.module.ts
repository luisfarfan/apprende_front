import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListModule } from './project-list/project-list.module';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectAddEditModule } from './project-add-edit/project-add-edit.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  }
];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    ProjectListModule,
    ProjectAddEditModule,

    MatButtonModule,
    FlexLayoutModule
  ]
})
export class ProjectModule {
}
