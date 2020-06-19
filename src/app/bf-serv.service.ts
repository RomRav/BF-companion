import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BfServService implements OnInit {
  public breastfeedList = [];
  public bfStatTab = [];
  public numberOfBfToday = 0;
  public today = new Date;
  public compter = 0;
  public dataTab = [];
  public lastBreastfed = {
    date: null,
    comment: null,
    breast: null,
  };

  constructor(private storage: Storage, private toastController: ToastController) {
    this.getList().then(() => {
      this.numberBfPerDay().then(() => {
        this.lastBreastfedCheck();
        this.numberBfPerDay();
      });


    });
  }

  ngOnInit() {
    // this.getList().then(() => {
    //   this.numberBfPerDay().then(() => {
    //     this.lastBreastfedCheck();
    //     this.numberBfPerDay();
    //   });
    // });
  }
/**
 * Gestion des messages de confirmation de CRUD
 * @param message 
 */
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: "success"
    });
    toast.present();
  }
/**
 * Sauvegarde des données
 */
  public recList() {
    this.storage.set("bf-companion", this.breastfeedList).then(() => {
      this.todayBfCompter();
    });
  }

  /**
   * @function getList
   * Récupération des données
   */
  public getList() {
    return new Promise((res, rej) => {
      this.storage.get("bf-companion").then((data) => {
        this.breastfeedList = data || [];
        res();
      });
    });
  }

  /**
   * @function todayBfCompter
   * Récupération du nombre d'allaitement du jour
   */
  public todayBfCompter() {
    if (this.dataTab[0].date.getDate() == this.today.getUTCDate()) {
      this.numberOfBfToday = this.dataTab[0].bfQt;
      console.log(this.numberOfBfToday);
    } else {
      this.numberOfBfToday = 0;
    }
  }

  /**
   * @function lastBreastfedCheck
   * Récupération de la date du dérnier alliatement
   */
  public lastBreastfedCheck() {
    this.lastBreastfed = this.breastfeedList[0];
  }



  //////////////////////////////////////////////////////////////////////
  /**
   * Methodes de comptage du nombre d'allaitement par jour
   */
  //////////////////////////////////////////////////////////////////////
  public async numberBfPerDay() {
    for (let i = 0; i < this.breastfeedList.length - 1; i++) {
      let elementDate = new Date(this.breastfeedList[i].date);
      await this.compareBf(elementDate, i);
      await this.addToDataTab(elementDate);

    }
  }

  compareBf(elementDate, index) {
    return new Promise(async (res) => {
      let bfDataTabCompare: any = this.breastfeedList;
      for (let j = 0; j < bfDataTabCompare.length - 1; j++) {
        let elementDateCompare = new Date(bfDataTabCompare[j].date);
        if (elementDate.getDate() == elementDateCompare.getDate() && elementDate.getMonth() == elementDateCompare.getMonth() && elementDate.getFullYear() == elementDateCompare.getFullYear()) {
          await this.compteBf();
          bfDataTabCompare = await this.deleteElement(j, bfDataTabCompare);
          j--;
        }
      }
      res();
    });
  }

  compteBf() {
    return new Promise(res => {
      this.compter++;
      res();
    });
  }

  deleteElement(index, bfDataTabCompare) {
    return new Promise(res => {
      bfDataTabCompare.splice(index, 1);
      res(bfDataTabCompare);
    });
  }

  addToDataTab(date) {
    return new Promise(res => {
      this.dataTab.push({ "date": date, "bfQt": this.compter })
      this.compter = 0;
      res();
    });
  }
}
