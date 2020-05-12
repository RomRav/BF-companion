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
    let compterBfByDay = 1;
    let numberOfBfTab = [];
    let bfByDay = {
      day: null,
      totalBf: null
    };
    this.numberOfBfToday = 0;
    this.breastfeedList.forEach((element, index) => {
      let day = new Date(element.date);
      console.log(numberOfBfTab + "aaaaaaaaaaaaaaaaaaaa");
      if (index != 0) {
        console.log(numberOfBfTab);
        if (day.getUTCDate() == new Date(this.breastfeedList[index - 1].date).getUTCDate()) {
          console.log(numberOfBfTab);
          compterBfByDay++;
        } else {
          console.log(numberOfBfTab);
          bfByDay.totalBf = compterBfByDay;
          bfByDay.day = element.date;
          // console.log(bfByDay);
          numberOfBfTab.push(bfByDay);
          console.log(numberOfBfTab);
          compterBfByDay = 1;
        }
      }
      numberOfBfTab = [];


      if (day.getUTCDate() == this.today.getUTCDate()) {
        this.numberOfBfToday++;
      }
    });
  }

  public lastBreastfedCheck() {
    this.lastBreastfed = this.breastfeedList[this.breastfeedList.length - 1];
  }
}
