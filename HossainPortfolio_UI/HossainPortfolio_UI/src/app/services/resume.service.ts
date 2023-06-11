import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperience } from '../models/work-experience.mode';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  baseUrl:string="https://localhost:32768"

  constructor(private http:HttpClient ) { }

  getAllWorkExperiene():Observable<WorkExperience[]>{
    return this.http.get<WorkExperience[]>(this.baseUrl+'/api/WorkExperience')
  }

  getAllEducation():Observable<Education[]>{
    return this.http.get<Education[]>(this.baseUrl+'/api/Education')
  }

}
