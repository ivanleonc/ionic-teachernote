import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Student } from '../student';
import { Subject } from '../subjects';
import { STUDENTS } from '../list-students';
import { SUBJECT } from '../list-subject';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  constructor() { }

  getStudents():Observable<Student[]>{
    return of (STUDENTS);
  }
  getStudentsForSubject(id_subject:number):Observable<Student[] | undefined>{
    id_subject = Number(id_subject);
      return of (STUDENTS.filter(x => x.id_subject === id_subject));
  }
  
  delete(student:Student|number):Observable<Student[]>{
    const id = typeof student === 'number' ? student:student.id;
    if(id > -1){
      STUDENTS.splice(id, 1);
    }
    return of (STUDENTS);
  }
  getAStudent(id:number):Observable<Student | undefined>{
    id = Number(id);
    return of(STUDENTS.find(x => x.id === id));
  }
  editStudent(student:Student):Observable<Student | undefined>{
    let id = Number(student.id);
    let index:number = STUDENTS.findIndex(x => x.id === id)
    STUDENTS[index] = student;
    return of (STUDENTS[index]);
  }
  createNewStudent(student:Student):Observable<Student>{
    STUDENTS.push(student);
    let index:number = STUDENTS.findIndex(x => x.id === student.id)
    return of (STUDENTS[index]);
  }
}
