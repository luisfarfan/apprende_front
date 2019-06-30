import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProject } from '../../../../shared/interfaces/project';
import { MatDialog } from '@angular/material';
import { ProjectAddEditComponent } from '../../project-add-edit/project-add-edit.component';
import { ProjectService } from '../../../../shared/services/project.service';
import { ProjectChangeService } from '../../project-change.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: IProject;

  @Output() deleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private matDialog: MatDialog,
              private projectService: ProjectService,
              private projectChangeService: ProjectChangeService) {
  }

  ngOnInit() {
  }

  editProject(): void {
    const dialogRef = this.matDialog.open(ProjectAddEditComponent, {
      data: {
        project: this.project
      },
      width: '60%'
    });

    dialogRef.afterClosed()
      .subscribe(response => {
        if (response) {
          this.project = response;
        }
      });
  }

  delete(): void {
    this.projectService.delete(this.project.id)
      .subscribe(response => {
        // this.deleted.emit(true);
        this.projectChangeService.projectHasChange.next(true);
      });
  }

}
