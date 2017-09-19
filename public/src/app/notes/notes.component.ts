import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() notes;

  constructor() { }

  // getNotes() {
  //   this._noteService.retrieveNotes((notes) => {
  //     this.notes = notes;
  //   });
  // }

  ngOnInit() {
  }

}
