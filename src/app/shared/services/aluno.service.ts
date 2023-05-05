import { Aluno } from 'src/app/shared/models/Aluno.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  apiUrl = 'http://localhost:8080/alunos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getAlunos(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(this.apiUrl);
  }

  public getAluno(id: number): Observable<Aluno>{
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Aluno>(url);
  }

  public postAluno(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.post<Aluno>(this.apiUrl, aluno);
  }

  public putAluno(id: number, aluno:Aluno): Observable<Aluno>{
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.put<Aluno>(url, aluno);
  }

  public deleteAluno(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
