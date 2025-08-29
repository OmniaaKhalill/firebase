import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor( private auth: Auth , private router: Router){

}

login( email:string, password:string){


  signInWithEmailAndPassword(this.auth, email, password)

  .then((userCredential) => {

    alert("logedin")
    this.router.navigateByUrl("home")
    const user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    alert("error")
    this.router.navigateByUrl("login")
    const errorCode = error.code;
    const errorMessage = error.message;
  })}


  logout( ){


  signOut(this.auth)

  .then((userCredential) => {

    alert("logedout")
    this.router.navigateByUrl("login")
  

   
    // ...
  })
  .catch((error) => {
    alert("error")
    this.router.navigateByUrl("home")
    const errorCode = error.code;
    const errorMessage = error.message;
  })}


}
