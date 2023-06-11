import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkExperience } from '../models/work-experience.mode';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  baseApiUrl="https://localhost:32768/"
  constructor(private http:HttpClient) { }

  getAllWorkExperience():Observable<WorkExperience[]>{
    return this.http.get<WorkExperience[]>(this.baseApiUrl+'api/workexperience')
  }

}
