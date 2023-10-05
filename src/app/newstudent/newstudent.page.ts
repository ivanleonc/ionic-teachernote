import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController} from "@ionic/angular";
import { ActivatedRoute, Router, ParamMap, Params} from "@angular/router";
import { Student } from '../student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.page.html',
  styleUrls: ['./newstudent.page.scss'],
})
export class NewstudentPage implements OnInit {

  newStudent = {} as Student;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private studentService: StudentService
  ) { }

  ngOnInit() {
  }
  back(): void{
    this.router.navigate(["tabs/tab3"])
  }
  ionViewDidEnter(){
    this.newStudent = {} as Student;
  }
  saveStudent(newStudent:any){
    this.showMessage("Guardando...");
    this.newStudent.id = Number(this.newStudent.id);
    this.studentService.createNewStudent(newStudent).subscribe(student=>{
      this.router.navigate(['tabs/tab3']);
      this.showMessage("Materia registrada");
    })
  }
  showMessage(message:string){
    this.toastCtrl.create({
      message:message,
      duration:2000
    }).then(toast => toast.present());
  }

}
 