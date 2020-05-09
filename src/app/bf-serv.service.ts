import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BfServService {

  public breastfeedList = [];
  public numberOfBfToday = 0;
  public today = new Date;
  public lastBreastfed = {
    date: null,
    comment: null,
    breast: null,
  };


  constructor(private storage: Storage, private toastController: ToastController) {
    this.getList().then(() => {
      this.lastBreastfedCheck();
      this.todayBfCompter();
      this.listSchedul();
    });
  }
  public listSchedul() {
    let orderedList = [];
    for (let i = this.breastfeedList.length; i >= 0; i--) {
      console.log(i);
      orderedList.push(this.breastfeedList[i - 1]);
    }
    return orderedList;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  public recList() {
    this.storage.set("bf-companion", this.breastfeedList).then(() => {
      this.todayBfCompter();
      // this.listSchedul();
    });
  }

  public getList() {
    return new Promise((res, rej) => {
      this.storage.get("bf-companion").then((data) => {
        this.breastfeedList = data || [];
        res();
      });
    });
  }

  public todayBfCompter() {
    this.numberOfBfToday = 0;
    this.breastfeedList.forEach(element => {
      let day = new Date(element.date);
      if (day.getUTCDate() == this.today.getUTCDate()) {
        this.numberOfBfToday++;
      }
    });
  }

  public lastBreastfedCheck() {
    this.lastBreastfed = this.breastfeedList[this.breastfeedList.length - 1];
  }
}
