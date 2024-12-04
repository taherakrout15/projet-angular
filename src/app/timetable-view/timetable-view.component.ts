import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';
import { Room } from '../models/room';
import { Teacher } from '../models/teacher';
import { Subject } from '../models/subject';
import { Class } from '../models/class';
import { Session } from '../models/session';

@Component({
  selector: 'app-timetable-view',
  templateUrl: './timetable-view.component.html',
  styleUrls: ['./timetable-view.component.css']
})
export class TimetableViewComponent implements OnInit {
  rooms: Room[] = [];
  teachers: Teacher[] = [];
  subjects: Subject[] = [];
  classes: Class[] = [];
  sessions: Session[] = [];

  constructor(private timetableService: TimetableService) {}

  ngOnInit(): void {
    this.timetableService.getTimetableData().subscribe(data => {
      this.rooms = data.rooms;
      this.teachers = data.teachers;
      this.subjects = data.subjects;
      this.classes = data.classes;
      this.sessions = data.sessions;
    });
  }
}
