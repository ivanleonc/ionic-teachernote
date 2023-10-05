import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Subject } from '../subjects';
import { SubjectService } from '../services/subject.service';
import { Student } from '../student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {

  id:any;
  selected?:Student;
  public subject?:Subject[];

  constructor(
    private route: ActivatedRoute, private router: Router,
    private subjectService: SubjectService, private studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      this.studentService.getAStudent(params['id']).subscribe(selected =>{
        this.selected = selected;
      });
      this.subjectService.getSubjectForStudent(params['id']).subscribe(subject =>{
        this.subject = subject
      });
    });
  }
  back(): void{

    this.router.navigate(["tabs/tab3"]);
  }

}
