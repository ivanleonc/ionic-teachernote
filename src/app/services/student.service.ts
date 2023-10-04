import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Student } from '../student';
import { STUDENTS } from '../list-students';
import { SUBJECT } from '../list-subject';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudentsForSubject(id_subject:number):Observable<Student[] | undefined>{
    id_subject = Number(id_subject);
      return of (STUDENTS.filter(x => x.id_subject === id_subject));
  }
}
