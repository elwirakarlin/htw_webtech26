import { Injectable } from '@angular/core';

@Injectable({ //injezierbar 
  providedIn: 'root',
})


export class Memberservice {

  private members = [];

  getMembers(): any {
//wenn ich keinen Typen habe, verwende ich any 
//catch kann kommen, wenn wir eine Exxeption erwarten
   return fetch('members.json') //promise? // nur den resolve fall bearbeiten // Response objekt kommt zurück 
    .then( response => response.json())
    .then (jsonData => {
      this.members = jsonData
      console.log('im service: ', this.members)
      return this.members;
    })

  }
}
