import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { ProjectItemModule } from './project-item/project-item.module';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,

    ProjectItemModule
  ],
  exports: [ProjectListComponent]
})
export class ProjectListModule {
}
