import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

// Importa todas as dependências necessárias
import { collection, collectionChanges, collectionData, CollectionReference, Firestore, query } from '@angular/fire/firestore';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  // Vai armazenar cada FAQ obtido
  faq: any;

  // Vai armazenar todos os FAQ obtidos para a view
  faqs: any;

  constructor(
    private afs: Firestore,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    collectionData(collection(this.afs, 'faq'), { idField: 'id' }).subscribe((faqs) => {
      this.faqs = faqs;
    });
  }

  async show(alertTitle, alertText) {
    const alert = await this.alertController.create({
      header: alertTitle,
      message: alertText,
      buttons: ['Ok']
    });
    await alert.present();
  }
}
