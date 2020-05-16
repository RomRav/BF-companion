import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { BfServService } from '../bf-serv.service';

@Component({
  selector: 'app-bf-list',
  templateUrl: './bf-list.page.html',
  styleUrls: ['./bf-list.page.scss'],
})
export class BfListPage {

  public showTexte = false;
  private commentInput = null;
  public list = [];
  constructor(private bfserv: BfServService, private storage: Storage) { }

  ionViewWillEnter() {
    this.bfserv.getList().then(() => {
      this.bfserv.lastBreastfedCheck();
      // this.bfserv.todayBfCompter();
      this.list = this.bfserv.listSchedul(this.bfserv.breastfeedList);
    });
  }

  public delete(pos) {
    //supprimer la tâche
    this.list.splice(pos, 1);
    this.bfserv.breastfeedList = this.bfserv.listSchedul(this.list);
    //sauvegarde 
    this.bfserv.recList()
    this.bfserv.lastBreastfedCheck();
    this.bfserv.presentToast('Allaitement supprimé');
  }

  public update($ev, pos, item) {
    if (item == 1) {
      let newDate = $ev.detail.value;
      this.list[pos].date = newDate;
      this.bfserv.breastfeedList=this.bfserv.listSchedul(this.list);
    } else {
      let newComment = $ev.detail.value;
      this.list[pos].comment = newComment;
      this.bfserv.breastfeedList=this.bfserv.listSchedul(this.list);
    }
    this.bfserv.recList();
  }

}
