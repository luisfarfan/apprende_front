import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from '../interfaces/project';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<Array<IProject>> {
    return this.http.get<Array<IProject>>(`${environment.baseUrl}projects/`);
  }

  edit(id: number, project: IProject): Observable<IProject> {
    return this.http.put<IProject>(`${environment.baseUrl}projects/${id}/`, project);
  }

  patch(id: number, project: Partial<IProject>): Observable<IProject> {
    return this.http.patch<IProject>(`${environment.baseUrl}projects/${id}/`, project);
  }

  create(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(`${environment.baseUrl}projects/`, project);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}projects/${id}/`);
  }

}

