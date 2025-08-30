import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Notes } from '../models/note';
import { not } from 'rxjs/internal/util/not';

@Injectable({
  providedIn: 'root',
})
export class Crud {
  constructor(private firestore: Firestore) {}

  // CRUD





  //1-Create => add to databasr

  createNote(note: Notes) {

    console.log(note)

  

    const noteRef = collection(this.firestore, 'Notes');
    addDoc( noteRef , {
      name: note.name,
      content: note.content
    } )

    

      .then(() => {
        alert('created');
      })


      .catch((err) => alert('error: ' + err));
  }


    //2- Read => get from database
  getNotes(): Observable<any[]> {
    const notesRef = collection(this.firestore, 'Notes');
    return collectionData(notesRef, { idField: 'id' }); //, { idField: 'id' }
  }


    //3- Update  => update doc
  

  //4- Delete => remove

    deleteNote(id:string)
  {
    const noteRef =  doc(this.firestore, "Notes", id)
    deleteDoc(noteRef)
    .then( res=>  alert("deleted: "+res) )
    .catch( err =>  alert("error: "+ err) )
}
 

}
