import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BfServService {
  public breastfeedList = [];
  public bfStatTab = [];
  public numberOfBfToday = 0;
  public today = new Date;
  public lastBreastfed = {
    date: null,
    comment: null,
    breast: null,
  };
  public bfByDay = {
    day: null,
    totalBf: null
  };


  constructor(private storage: Storage, private toastController: ToastController) {
    this.getList().then(() => {
      this.lastBreastfedCheck();
      this.todayBfCompter();
    });
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
    this.numberOfBfToday = 0;
    this.breastfeedList.forEach((element, index) => {
      let day = new Date(element.date);
      // if (index != 0) {
      //   if (day.getUTCDate() == new Date(this.breastfeedList[index - 1].date).getUTCDate()) {
      //     compterBfByDay++;
      //   } else {
      //     console.log(compterBfByDay + " : " + this.breastfeedList[index - 1].date);
      //     this.bfByDay.totalBf = compterBfByDay;
      //     this.bfByDay.day = this.breastfeedList[index - 1].date;
      //     this.bfStatTab.push(this.bfByDay);
      //     compterBfByDay = 1;
      //   }
      // }
      if (day.getUTCDate() == this.today.getUTCDate()) {
        this.numberOfBfToday++;
      }
    });
  }

  public lastBreastfedCheck() {
    this.lastBreastfed = this.breastfeedList[0];
  }
}
