import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitsComponent } from './habits/habits.component';
import { EditHabits } from './habits/edit-habits.component';

export const routes: Routes = [
  { path: '', component: HabitsComponent },
  { path: 'edit-habits', component: EditHabits },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HabitTrackersMainRoute {}
