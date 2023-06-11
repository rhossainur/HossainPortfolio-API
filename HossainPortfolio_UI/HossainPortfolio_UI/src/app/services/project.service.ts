import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Certification } from '../models/certification.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl:string="https://localhost:32768"

  constructor(private http:HttpClient) { }

  getAllProject():Observable<Project[]>{
    return this.http.get<Project[]>(this.baseUrl+'/api/Project')
  }

  getAllCertification():Observable<Certification[]>{
    return this.http.get<Certification[]>(this.baseUrl+'/api/Certification')
  }
}
