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
    });
  }

  ionViewWillEnter() {
    this.bfserv.getList().then(() => {
      this.list = this.bfserv.breastfeedList;
    });
  }

  /**
   * @function Delete fonction
   * Gestion de la suppression des données
   * @param pos 
   */
  public delete(pos) {
    this.bfserv.breastfeedList.splice(pos, 1);
    this.bfserv.recList()
    this.bfserv.presentToast('Allaitement supprimé');
  }

  /**
   * @function Update fonction
   * Gestion de la mise à jour des données
   * @param $ev 
   * @param pos 
   * @param item 
   */
  public update($ev, pos, item) {
    if (item == 1) {
      let newDate = new Date($ev.detail.value);
      this.bfserv.breastfeedList[pos].date = newDate;
    } else if (item == 2) {
      let newComment = $ev.detail.value;
      this.bfserv.breastfeedList[pos].comment = newComment;
    } else if (item == 3) {
      let newBfMode = $ev.detail.value;
      this.bfserv.breastfeedList[pos].breast = newBfMode;
    } else if (item == 4) {
      let newVisibility = false;
      if ($ev == null) {
        newVisibility = true;
      } else {
        if ($ev == false) {
          newVisibility = true;
        } else {
          newVisibility = false;
        }
      }
      this.bfserv.breastfeedList[pos].visible = newVisibility;

    }
    this.bfserv.presentToast('Allaitement modifié');
    this.bfserv.recList();
  }

  public switchVisibilityComment() {

  }

}


