import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimetableViewComponent } from './timetable-view/timetable-view.component';

const routes: Routes = [
  { path: '', component: TimetableViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
