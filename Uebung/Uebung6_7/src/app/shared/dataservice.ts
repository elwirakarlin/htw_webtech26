import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable({
  providedIn: 'root',
})
export class Dataservice {

  async getAllMembers(): Promise<Member[]> {
    
    const response = await fetch('members.json')
    console.log('response in service : ', response )
    const members = await response.json();
    console.log('members in service : ', members)
    return members;
  }
  
}