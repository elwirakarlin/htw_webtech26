import { Component, inject } from '@angular/core';
import { Memberservice } from '../shared/memberservice';
//wir programmieren in typescript und es wird zu javascript compeliert = angular 

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

//jede Komponente = eigene Klasse 
//Export = Klassenmethoden sind verfügbar für andere Komponenete 

// Das ist TypeScript (in deiner .component.ts)

export class Home {

  title = "Hallo FIW!"; // oder String s = "Hallo FIW!" //außerhalb der Componente kein zugriff mit private
  isDisabled = false; 
  bildQuelle1 = "https://campus-stories.htw-berlin.de/files/Presse/Campus_Stories/DPWK-90-2026.jpg";
  bildQuelle2 = "https://campus-stories.htw-berlin.de/files/Presse/_tmp_/9/5/csm_DPWK-32-2026_9caec3b74d.jpg";
  bildQuelle = this.bildQuelle1; // auf objekteigenschaften mit this. zugreifen


  // Schalter 
  wh = true; 
  groesse=100;
  buttonname = "Wilheminenhof";
  private myservice = inject(Memberservice) //myservise = referenzvariable, die auf service zeigt 


  //Methoden
  changeImg(): void {
    if (this.wh)
    {
      this.bildQuelle = this.bildQuelle2;
      this.wh = false;
      this.buttonname = "Treskowalle";
    }
    else{
      this.bildQuelle = this.bildQuelle1;
      this.wh= true; 
      this.buttonname = "Wilheminenhof";
    }

  }

  smaller(){
if(this.groesse>100)this.groesse /=2;
  }

  bigger(){
if(this.groesse<1000)this.groesse *=2;
  }
}
