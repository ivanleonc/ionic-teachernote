import { Component, OnInit } from '@angular/core';

import { NavController, LoadingController, ToastController } from '@ionic/angular';
import {ActivatedRoute, Router, ParamMap, Params} from "@angular/router";
import { Subject } from '../subjects';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-editsubject',
  templateUrl: './editsubject.page.html',
  styleUrls: ['./editsubject.page.scss'],
})
export class EditsubjectPage implements OnInit {

  id: any;
  subject? : Subject;
  selected? : Subject;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      this.subjectService.getASubject(params['id']).subscribe(selected=>{
        this.selected = selected;
      });
    });
  }
  back(): void{
    this.router.navigate(["tabs/tab2"]);
  }
  edit(subject:Subject):void{
    this.subjectService.editSubject(subject).subscribe(()=>{
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