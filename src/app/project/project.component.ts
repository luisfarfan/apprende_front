import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services/project.service';
import { IProject } from '../../shared/interfaces/project';
import { MatDialog } from '@angular/material';
import { ProjectAddEditComponent } from './project-add-edit/project-add-edit.component';
import { ProjectChangeService } from './project-change.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Array<IProject>;

  constructor(private projectService: ProjectService,
              private matDialog: MatDialog,
              private projectChangeService: ProjectChangeService) {

  }

  ngOnInit() {
    this.getProjects();

    this.projectChangeService.projectHasChange
      .subscribe(_ => {
        this.getProjects();
      });
  }

  getProjects(): void {
    this.projectService.list()
      .subscribe(projects => {
        this.projects = projects;
        // console.log(this.projects);
      });
    // console.log(this.projects);
  }

  openModal(): void {
    const dialogRef = this.matDialog.open(ProjectAddEditComponent);

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.getProjects();
      }
    });
  }

}
