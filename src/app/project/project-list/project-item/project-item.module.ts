import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from './project-item.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { ProjectAddEditModule } from '../../project-add-edit/project-add-edit.module';

@NgModule({
  declarations: [ProjectItemComponent],
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,

    ProjectAddEditModule
  ],
  exports: [ProjectItemComponent]
})
export class ProjectItemModule {
}
