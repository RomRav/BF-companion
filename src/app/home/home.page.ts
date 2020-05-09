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

  public hourSinceLastBf = null;
  public minutSinceLastBf = null;
  public secondSinceLastBf = null;

  constructor(
    private storage: Storage,
    private router: Router,
    public bfserv: BfServService
  ) {
    // this.storage.clear();
    // this.LastBfTimer();
  }

  ngOnInit() {
    window.setInterval(() => {
      let currentTime = new Date;
      this.lastBfTimer = new Date(Date.now() - this.bfserv.lastBreastfed.date.getTime());
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


      // console.log(Date.now());
      // console.log(this.bfserv.breastfeedList[this.bfserv.breastfeedList.length - 1].date.getMilliseconds());
    }, 1000);
  }




  public addBreastfeeding(breastSide: string) {
    this.breastfed.breast = breastSide;
    this.breastfed.date = new Date;
    this.bfserv.breastfeedList.push(this.breastfed);
    this.bfserv.recList();
    this.bfserv.presentToast('Allaitement bien enregistré');
    // this.bfserv.listSchedul();
    this.router.navigateByUrl("bf-list");
  }

}
