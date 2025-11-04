import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Habit} from './habits.model';

@Injectable({
  providedIn: 'root',

})
export class HabitService {
  private baseUrl = 'http://localhost:8080/api/habits';

  constructor(private http: HttpClient) {}

  public save(habit: Habit) {
    return this.http.post<Habit>(this.baseUrl + '/save', habit);
  }

}
