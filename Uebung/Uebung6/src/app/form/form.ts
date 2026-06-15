import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
// 4 Variblen in TS Klasse, die werden in html eingebunden

export class Form {

  vornameControl = new FormControl(" ", Validators.required);
  nachnameControl = new FormControl(" ");
  emailControl = new FormControl(" ");
  ipadresseControl = new FormControl (" ");

  create(): void{

const vorname = this.vornameControl.value || ''; // mit || stellen wir klar, dass es ein Wert hat ODER aber einen leeeren String 
const nachname = this.nachnameControl.value;
const email = this.emailControl.value;
const ipAdress = this.ipadresseControl.value; //lokale Variablen


const newUser = {vorname,nachname,email,ipAdress,name: () => { vorname + nachname}};

// vorname ! - ich übernehmen die verantwortung, dass es nicht null ist

console.log('Creating entry:', newUser); //Objektvariable = newUser mit Eigenschaften die aufgezählt werden

  }

inValid (): boolean {
    
  return this.vornameControl.value != '' &&
  this.nachnameControl.value != '' &&
  this.emailControl.value != '' &&
  this.ipadresseControl.value != ''

  }

}
