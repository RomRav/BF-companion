import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { BfServService } from '../bf-serv.service';

@Component({
  selector: 'app-bf-list',
  templateUrl: './bf-list.page.html',
  styleUrls: ['./bf-list.page.scss'],
})
export class BfListPage {
  public list = [];
  public showTexte = false;

  constructor(private bfserv: BfServService, private storage: Storage) { }

  ionViewWillEnter() {
    this.bfserv.getList().then(() => {
      // this.bfserv.lastBreastfedCheck();
      // this.bfserv.todayBfCompter();
      this.list = this.bfserv.breastfeedList;
    });
  }

  public delete(pos) {
    //supprimer la tâche
    this.bfserv.breastfeedList.splice(pos, 1);
    //sauvegarde 
    this.bfserv.recList()
    this.bfserv.presentToast('Allaitement supprimé');
  }

  public update($ev, pos, item) {
    if (item == 1) {
      let newDate = $ev.detail.value;
      this.bfserv.breastfeedList[pos].date = newDate;
    } else {
      let newComment = $ev.detail.value;
      this.bfserv.breastfeedList[pos].comment = newComment;
    }
    this.bfserv.presentToast('Allaitement modifié');
    this.bfserv.recList();
  }

}
