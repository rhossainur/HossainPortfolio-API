import { Component, OnInit } from '@angular/core';
import { revealAnimation } from 'src/app/animations';
import { Education } from 'src/app/models/education.model';
import { WorkExperience } from 'src/app/models/work-experience.mode';
import { ResumeService } from 'src/app/services/resume.service';


@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
  animations:[revealAnimation]
})
export class ResumePageComponent implements OnInit {

  workExperiences:WorkExperience[]=[];
  educations:Education[]=[];
  skills:string[]=["C#","Asp .Net Core","Python","Angular","SQL Server","Docker","Node","Google Firebase","Dart","Flutter Mobile SDK","Cloud Firestore","Selenium","Jira","ServiceNow","Jenkins","Selenium","TensorFlow","Flask","Django","Github"]
  
  constructor(private resumeService:ResumeService) {}
  ngOnInit(): void {
    this.resumeService.getAllWorkExperiene().subscribe({
      next:(workExperience)=>{
        this.workExperiences=workExperience
      },
      error:(response)=>{
        console.log(response)
      }
    })

    this.resumeService.getAllEducation().subscribe({
      next:(education)=>{
        this.educations=education
      },
      error:(response)=>{
        console.log(response)
      }
    })

  }

  state = 'hidden';

   ngAfterViewInit() {
    setTimeout( () => {
    this.state = 'shown';
    }, 200);
  }
}
