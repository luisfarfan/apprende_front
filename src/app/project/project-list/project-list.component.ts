import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProject } from '../../../shared/interfaces/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnChanges {
  @Input() projects: Array<IProject>;

  @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    // console.log(this.projects);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.projects) {
      console.log(this.projects);
    }
  }

  deleteFromList(index: number): void {
    // this.projects.splice(index, 1);
    this.updated.emit(true);
  }

}
