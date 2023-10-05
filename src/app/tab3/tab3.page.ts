import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../list-students';
import { StudentService } from '../services/student.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

 public mystudents? : Student[];
  constructor(
    private studentService: StudentService,
    public alertController: AlertController
  ) { }

  getStudents(): void{
    this.studentService.getStudents().subscribe(students => this.mystudents = students)
  }

  ngOnInit() {
    this.getStudents();

  }
  async deleteStudent(student: Student) {
    const alert = await this.alertController.create({
      header: "Borrar",
      message: "Estas seguro de borrar el estudiante?",
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
          this.mystudents = this.mystudents?.filter(h=>h != student);
          this.studentService.delete(student).subscribe();
        }
      }

      ]
    });
    await alert.present();
  }
}
