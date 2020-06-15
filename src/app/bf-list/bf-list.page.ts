import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { BfServService } from '../bf-serv.service';

@Component({
  selector: 'app-bf-list',
  templateUrl: './bf-list.page.html',
  styleUrls: ['./bf-list.page.scss'],
})
export class BfListPage implements OnInit {
  public list = [];
  public showTexte = false;

  constructor(private bfserv: BfServService, private storage: Storage) { }

  ngOnInit() {
    this.bfserv.getList().then(() => {
      this.list = this.bfserv.breastfeedList;
    });
  }

  ionViewWillEnter() {
    this.bfserv.getList().then(() => {
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
      let newDate = new Date($ev.detail.value);
      this.bfserv.breastfeedList[pos].date = newDate;
    } else if (item == 2) {
      let newComment = $ev.detail.value;
      this.bfserv.breastfeedList[pos].comment = newComment;
    } else {
      let newBfMode = $ev.detail.value;
      this.bfserv.breastfeedList[pos].breast = newBfMode;
    }
    this.bfserv.presentToast('Allaitement modifié');
    this.bfserv.recList();
  }

}
