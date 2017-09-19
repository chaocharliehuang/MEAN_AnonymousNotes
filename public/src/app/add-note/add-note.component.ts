import { Component,  Output, EventEmitter, OnInit } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  @Output() newNoteEmitter = new EventEmitter();

  note = {text: ''}

  constructor(private _noteService: NoteService) { }

  addNote() {
    this._noteService.addNote(this.note, () => {
      this.note.text = '';
      this.newNoteEmitter.emit();
    });
  }

  ngOnInit() {
  }

}
