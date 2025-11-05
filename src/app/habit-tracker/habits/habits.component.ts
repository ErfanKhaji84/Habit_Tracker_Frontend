import {Component, OnInit} from '@angular/core';
import {Habit} from './habits.model';
import {HabitService} from './habits.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  standalone: false,
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {


  public habits : Habit[] = [] ;


  constructor(private service :  HabitService) {}

  ngOnInit(): void {
      this.service.getAllHabits().subscribe(res => {
        this.habits = res;
        console.log("habits" , this.habits);

      })
    }




}
