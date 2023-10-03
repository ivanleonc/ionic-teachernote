import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Subject } from '../subjects';
import { SUBJECT } from '../list-subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }
  getSubjects(): Observable<Subject[]>{
    return of(SUBJECT);
  }
  delete(subject:Subject|number):Observable<Subject[]>{
    const id = typeof subject === 'number' ? subject:subject.id;
    if (id > -1){
      SUBJECT.splice(id, 1);
    }
    return of (SUBJECT);
  }
  getASubject(id:number): Observable<Subject | undefined>{
    id = Number(id);
    return of (SUBJECT.find(x => x.id === id));
  }
  editSubject(subject:Subject):Observable<Subject | undefined>{
    let id = Number(subject.id);
    let index:number = SUBJECT.findIndex(x => x.id === id)
    SUBJECT[index] = subject;
    return of(SUBJECT[index]);
  }
  createNewSubject(subject:Subject):Observable<Subject>{
    SUBJECT.push(subject);
    let index:number = SUBJECT.findIndex(x => x.id === subject.id)
    return of (SUBJECT[index]);
  }
}
