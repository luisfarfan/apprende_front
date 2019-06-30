import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IProject } from '../../../shared/interfaces/project';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../../shared/services/project.service';

@Component({
  selector: 'app-project-add-edit',
  templateUrl: './project-add-edit.component.html',
  styleUrls: ['./project-add-edit.component.css']
})
export class ProjectAddEditComponent implements OnInit {

  project: IProject;

  projectForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private matDialogRef: MatDialogRef<ProjectAddEditComponent>,
              private fb: FormBuilder,
              private projectService: ProjectService) {
    if (this.data) {
      this.project = this.data.project;
    }

    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.projectForm = this.fb.group({
      id: [this.project ? this.project.id : null],
      name: [this.project ? this.project.name : null, Validators.required],
      description: [this.project ? this.project.description : null, Validators.required],
      rating: [this.project ? this.project.rating : null, Validators.required]
    });
  }

  private edit(): void {
    const data = this.projectForm.getRawValue();

    this.projectService.patch(this.project.id, data)
      .subscribe(response => {
        this.matDialogRef.close(response);
      });
  }

  private add(): void {
    const data = this.projectForm.getRawValue();
    this.projectService.create(data).subscribe(response => {
      this.matDialogRef.close(response);
    });
  }

  save(): void {
    if (this.project) {
      this.edit();
    } else {
      this.add();
    }
  }

}
