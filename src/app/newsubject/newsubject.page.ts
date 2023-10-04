import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController} from "@ionic/angular";
import { ActivatedRoute, Router, ParamMap, Params} from "@angular/router";
import { Subject } from '../subjects';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-newsubject',
  templateUrl: './newsubject.page.html',
  styleUrls: ['./newsubject.page.scss'],
})
export class NewsubjectPage implements OnInit {

  newSubject = {} as Subject;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
  }
  back(): void{
    this.router.navigate(["tabs/tab2"])
  }
  ionViewDidEnter(){
    this.newSubject = {} as Subject;
  }
  saveSubject(newSubject:any){
    this.showMessage("Guardando...");
    this.newSubject.id = Number(this.newSubject.id);
    this.subjectService.createNewSubject(newSubject).subscribe(subject=>{
      this.router.navigate(['tabs/tab2']);
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
