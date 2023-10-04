import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Subject } from '../subjects';
import { SubjectService } from '../services/subject.service';
import { Student } from '../student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  id:any;
  selected? : Subject;
  public students? : Student[];

  constructor(
    private route: ActivatedRoute, private router: Router,
    private subjectService: SubjectService, private studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      this.subjectService.getASubject(params['id']).subscribe(selected =>{
        this.selected = selected;
      });
      this.studentService.getStudentsForSubject(params['id']).subscribe(students =>{
        this.students = students
      });
    });
  }
  back(): void{
    this.router.navigate(["tabs/tab2"]);
  }

}
