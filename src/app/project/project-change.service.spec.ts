import { TestBed } from '@angular/core/testing';

import { ProjectChangeService } from './project-change.service';

describe('ProjectChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectChangeService = TestBed.get(ProjectChangeService);
    expect(service).toBeTruthy();
  });
});
