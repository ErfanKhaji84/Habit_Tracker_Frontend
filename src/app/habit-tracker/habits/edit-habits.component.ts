import { Component } from '@angular/core';
import {Habit} from './habits.model';
import {HabitService} from './habits.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-habits',
  standalone: false,
  templateUrl: './edit-habits.component.html',
  styleUrls: ['./edit-habits.component.css']
})

export class EditHabits {

  public habits : Habit = new Habit();


  constructor(private service :  HabitService) {}

  save() {
    console.log("Habits" , this.habits);
    this.service.save(this.habits).subscribe(res =>{
      console.log(res);
    });
  }
}
