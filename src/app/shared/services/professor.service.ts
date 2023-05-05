import { Professor } from '../models/Professor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  apiUrl = 'http://localhost:8080/professores';

  constructor(private httpClient: HttpClient) {}

  public getProfessores(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(this.apiUrl);
  }

  public getProfessor(id: number): Observable<Professor>{
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Professor>(url);
  }

  public postProfessor(professor: Professor): Observable<Professor>{
    return this.httpClient.post<Professor>(this.apiUrl, professor);
  }

  public putProfessor(id: number, professor: Professor): Observable<Professor>{
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.put<Professor>(url, professor);
  }

  public deleteProfessor(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
