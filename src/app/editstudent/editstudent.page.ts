import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import {ActivatedRoute, Router, ParamMap, Params} from "@angular/router";
import { Student } from '../student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.page.html',
  styleUrls: ['./editstudent.page.scss'],
})
export class EditstudentPage implements OnInit {

  id : any;
  student? : Student;
  selected? : Student;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      this.studentService.getAStudent(params['id']).subscribe(selected=>{
        this.selected = selected;
      });
    });
  }
  back(): void{
    this.router.navigate(["tabs/tab3"]);
  }
  edit(student:Student):void{
    this.studentService.editStudent(student).subscribe(()=>{
      this.showMessage("Registro exitoso!");
    });
  }
  showMessage(message:string){
    this.toastCtrl.create({
      message:message,
      duration:2000
    }).then(toast => toast.present());
  }

}
