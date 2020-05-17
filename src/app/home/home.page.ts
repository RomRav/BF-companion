import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { BfServService } from '../bf-serv.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private breastfed = {
    date: null,
    breast: null,
    comment: null
  };
  public lastBfTimer = null;
  public showTime = {
    hours: null,
    minuts: null,
    seconds: null
  };

  constructor(
    private storage: Storage,
    private router: Router,
    public bfserv: BfServService
  ) {
    // this.storage.clear();
  }

  ngOnInit() {
    window.setInterval(() => {
      this.lastBfTimer = new Date(Date.now() - new Date(this.bfserv.lastBreastfed.date).getTime());
      this.showTime.hours = this.lastBfTimer.getHours() - 1;
      if (this.showTime.minuts < 10) {
        this.showTime.minuts = '0' + this.lastBfTimer.getMinutes();
      } else {
        this.showTime.minuts = this.lastBfTimer.getMinutes();
      }
      if (this.showTime.seconds = this.lastBfTimer.getSeconds() < 10) {
        this.showTime.seconds = '0' + this.lastBfTimer.getSeconds();
      } else {
        this.showTime.seconds = this.lastBfTimer.getSeconds();
      }
    }, 1000);
  }

  ionViewWillEnter() {
    this.bfserv.lastBreastfedCheck();
  }

  public addBreastfeeding(breastSide: string) {
    this.breastfed.breast = breastSide;
    this.breastfed.date = new Date;
    this.bfserv.breastfeedList.unshift(this.breastfed);
    this.bfserv.recList();
    this.bfserv.lastBreastfedCheck();
    this.bfserv.presentToast('Allaitement bien enregistré');
    this.router.navigateByUrl("bf-list");
  }
}
