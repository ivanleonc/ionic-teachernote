import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'editsubject',
    loadChildren: () => import('./editsubject/editsubject.module').then( m => m.EditsubjectPageModule)
  },
  {
    path: 'newsubject',
    loadChildren: () => import('./newsubject/newsubject.module').then( m => m.NewsubjectPageModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: 'editstudent',
    loadChildren: () => import('./editstudent/editstudent.module').then( m => m.EditstudentPageModule)
  },
  {
    path: 'newstudent',
    loadChildren: () => import('./newstudent/newstudent.module').then( m => m.NewstudentPageModule)
  },
  {
    path: 'subject',
    loadChildren: () => import('./subject/subject.module').then( m => m.SubjectPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
