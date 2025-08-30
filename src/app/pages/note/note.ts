import { Component } from '@angular/core';
import { Crud } from '../../services/crud';
import { Notes } from '../../models/note';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note',
  imports: [FormsModule],
  templateUrl: './note.html',
  styleUrl: './note.css',
})
export class Note {

  note:Notes=new Notes("","")

  id :string=""
  constructor(private crudService: Crud) {}

  GetData() {
    this.crudService.getNotes().subscribe({
      next(res) {
        console.log(res);
      },

      error(err) {
        console.log(err);
      },
    });
  }

  AddNote(){
    this.crudService.createNote(this.note)
  }



  deleteNote(){

    this.crudService.deleteNote(this.id)
  }
}
