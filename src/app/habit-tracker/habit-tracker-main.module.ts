import {importProvidersFrom, NgModule} from '@angular/core';
import {HabitTrackersMainRoute} from './habit-tracker-main.route';
import {HabitsComponent} from './habits/habits.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EditHabits} from './habits/edit-habits.component';
import {HabitService} from './habits/habits.service';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app';

@NgModule({
  imports: [
    HabitTrackersMainRoute,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,


  ],

  declarations: [

    HabitsComponent,
    EditHabits,
    AppComponent
  ],
  providers: [
    HabitService,
  ],
  bootstrap: [AppComponent],
  exports: [
    HabitsComponent,
    EditHabits,
  ],

})
export class HabitTrackerMainModule {
}
