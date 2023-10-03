import { Component, OnInit } from '@angular/core';
import { Subject } from '../subjects';
//import { SUBJECT } from '../list-subject';
import { SubjectService } from '../services/subject.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public mysubjects?: Subject[];
  constructor(
    private subjectService: SubjectService,
    public alertController: AlertController
  ) { }

  getSubjects(): void {
    //.mysubjects = this.subjectService.getSubject();
    this.subjectService.getSubjects().subscribe(subjects => this.mysubjects = subjects)
  }

  ngOnInit() {
    this.getSubjects();
  }
  async deleteSubject(subject: Subject) {
    const alert = await this.alertController.create({
      header: "Borrar",
      message: "Estas seguro de borrar la materia?",
      buttons: [{
        text: "No",
        role: "Cancelar",
        cssClass: "secondary",
        handler: (blah) => {
          console.log("Cancela borrado!");
        }
      },
      {
        text: "Si",
        handler: (blah) => {
          this.mysubjects = this.mysubjects?.filter(h=>h != subject);
          this.subjectService.delete(subject).subscribe();
        }
      }

      ]
    });
    await alert.present();
  }
}
