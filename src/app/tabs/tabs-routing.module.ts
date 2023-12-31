import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'editsubject/:id',
        loadChildren: () => import('../editsubject/editsubject.module').then(m => m.EditsubjectPageModule)
      },
      {
        path: 'newsubject',
        loadChildren: () => import('../newsubject/newsubject.module').then(m => m.NewsubjectPageModule)
      },
      {
        path: 'students/:id',
        loadChildren: () => import('../students/students.module').then(m => m.StudentsPageModule)
      },
      {
        path: 'editstudent/:id',
        loadChildren: () => import('../editstudent/editstudent.module').then(m => m.EditstudentPageModule)
      },
      {
        path: 'newstudent',
        loadChildren: () => import('../newstudent/newstudent.module').then(m => m.NewstudentPageModule)
      },
      {
        path: 'subject/:id',
        loadChildren: () => import('../subject/subject.module').then(m => m.SubjectPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
