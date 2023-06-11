import { Component, OnInit } from '@angular/core';
import { Certification } from 'src/app/models/certification.model';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit{

  projects:Project[]=[]
  certifications:Certification[]=[]

  
  constructor(private projectService:ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe({
      next:(project)=>{
        this.projects=project
      },
      error:(response)=>{
        console.log(response)
      }
    })

    this.projectService.getAllCertification().subscribe({
      next:(certification)=>{
        this.certifications=certification
      },
      error:(response)=>{
        console.log(response)
      }
    })

  }

}
