import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/work-experience.mode';

import { WorkExperienceService } from 'src/app/services/work-experience.service';

@Component({
  selector: 'app-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.css']
})
export class WorkExperienceListComponent implements OnInit{
 
  workexperiences: WorkExperience[]=[];

  constructor(private workexperienceservice:WorkExperienceService){

  }

  ngOnInit(): void {
    this.workexperienceservice.getAllWorkExperience().subscribe({
      next:(exp)=>{
        this.workexperiences=exp;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  



}
