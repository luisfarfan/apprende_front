import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectAddEditComponent } from './project-add-edit.component';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectAddEditComponent],
  imports: [
    CommonModule,
    MatDialogModule,

    MatInputModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule
  ],
  exports: [ProjectAddEditComponent],
  entryComponents: [ProjectAddEditComponent]
})
export class ProjectAddEditModule {
}
