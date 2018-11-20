import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  nombre='';
  tel='';
  mail='';
  facebook='';
  twitter='';
  instagram='';
  avatar='';
  contactos=[];



  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos=this.navParams.get('contactos');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  clickAgregarInfo()
  {
    if (this.nombre.length >0){
      
      this.contactos.push({nombre:this.nombre, tel:this.tel, email:this.mail, facebook:this.facebook,
      twitter:this.twitter, instagram:this.instagram, avatar:'../assets/girl2.png'});
      this.navCtrl.pop();
    }

    else{
      const alert=this.alertCtrl.create({
        title:'Error',
        subTitle: 'Contacto vacio',
        buttons: ['OK']

      });
      alert.present();
    }
  }

}
