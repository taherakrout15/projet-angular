iimport { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './models/room';
import { Teacher } from './models/teacher';
import { Subject } from './models/subject';
import { Class } from './models/class';
import { Session } from './models/session';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private jsonUrl = 'assets/tabletime.json';  // The JSON file in assets folder

  constructor(private http: HttpClient) {}

  getTimetableData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
