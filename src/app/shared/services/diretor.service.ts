import { Diretor } from './../model/Diretor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {
  apiUrl = 'http://localhost:8080/diretores';

  constructor(private httpClient: HttpClient) {}

  public getDiretores(): Observable<Diretor[]> {
    return this.httpClient.get<Diretor[]>(this.apiUrl);
  }

  public getDiretor(id: number): Observable<Diretor>{
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Diretor>(url);
  }

  public postDiretor(diretor: Diretor): Observable<Diretor>{
    return this.httpClient.post<Diretor>(this.apiUrl, diretor);
  }

  public putDiretor(id: number, diretor: Diretor): Observable<Diretor>{
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.put<Diretor>(url, diretor);
  }

  public deleteDiretor(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
