import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { AgregarPage } from '../agregar/agregar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info=InfoPage;
  agregar=AgregarPage;

  contactos=[
    { nombre:'Marlene Cobian ',tel:'33 1458 7562',email:'marlene@hotmail.com',facebook:'facebook/marleneCo',twitter:'@marleneCo',
      instagram:'instagram/marleneCo', avatar:'../assets/girl1.png'},

      { nombre:'Salvador Rodriguez' ,tel:'33 5422 4578',email:'chava@hotmail.com',facebook:'facebook/chava',twitter:'@chavaR',
      instagram:'instagram/chavaR', avatar:'../assets/oldMan.png'}

    
    
  ]

  constructor(public navCtrl: NavController) {
  }

  clickContacto(c){
    this.navCtrl.push(this.info, {contacto:c});
    
  }

  clickAgregar(){
    this.navCtrl.push(this.agregar, {contactos:this.contactos});
  }



}
