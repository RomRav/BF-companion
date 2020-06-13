import { Component, OnInit } from '@angular/core';
import { BfServService } from '../bf-serv.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { promise, element } from 'protractor';
import { async, TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-bf-state',
  templateUrl: './bf-state.page.html',
  styleUrls: ['./bf-state.page.scss'],
})
export class BfStatePage implements OnInit {

  public dataTab = [];
  public compter = 0;
  constructor(private storage: Storage,
    private router: Router,
    public bfserv: BfServService) { }

  ngOnInit() {
    window.setTimeout(() => {
      // this.numberBfPerDay();
      this.dataTab = this.bfserv.dataTab
    }, 100);
  }

  // public async numberBfPerDay() {
  //   let i = 0;
  //   let bfDataTab: any = this.bfserv.breastfeedList;
  //   console.log(bfDataTab);
  //   while (i < bfDataTab.length - 1) {
  //     let elementDate = new Date(bfDataTab[i].date);
  //     console.log(elementDate);
  //     await this.compareBf(elementDate, i);
  //     await this.addToDataTab(elementDate);
  //     i++;
  //   }
  //   // this.bfserv.breastfeedList.forEach(async (element, index) => {
  //   //   compter = 0;
  //   //   let elementDate = new Date(element.date);
  //   //   bfDataTabCopie = await this.compareBf(elementDate, bfDataTabCopie);
  //   //   await this.addToDataTab(elementDate, this.compter);
  //   // });
  // }

  // compareBf(elementDate, index) {
  //   return new Promise(async (res) => {
  //     let bfDataTabCompare: any = this.bfserv.breastfeedList;
  //     let i = 0;
  //     while (i < bfDataTabCompare.length - 1) {
  //       let elementDateCompare = new Date(bfDataTabCompare[i].date);
  //       console.log(bfDataTabCompare);
  //       console.log("index:" + i);
  //       console.log(elementDateCompare);
  //       // console.log("dateA:" + elementDate + " DateB " + elementDateCompare);

  //       if (elementDate.getDate() == elementDateCompare.getDate() && elementDate.getMonth() == elementDateCompare.getMonth() && elementDate.getFullYear() == elementDateCompare.getFullYear()) {
  //         // console.log(elementDateCompare);
  //         await this.compteBf();
  //         bfDataTabCompare = await this.deleteElement(index, bfDataTabCompare);
  //       }
  //       i++;
  //     }
  //     // this.bfDataTabCompare.forEach(async (element, index) => {
  //     //   let elementDateCompare = new Date(element.date);
  //     //   // let stringDateCompare = this.stringDateBuilder(elementDateCompare);
  //     //   // console.log("date:" + elementDate.getDate() + " / " + elementDateCompare.getDate());
  //     //   // console.log("month" + elementDate.getMonth() + " / " + elementDateCompare.getMonth());
  //     //   // console.log("year" + elementDate.getUTCFullYear() + " / " + elementDateCompare.getUTCFullYear());
  //     //   if (elementDate.getDate() == elementDateCompare.getDate() && elementDate.getMonth() == elementDateCompare.getMonth() && elementDate.getFullYear() == elementDateCompare.getFullYear()) {
  //     //     this.bfDataTabCopie = await this.compteBf(compter);
  //     //     res();
  //     //   }
  //     // });
  //     res();
  //   });
  // }

  // compteBf() {
  //   return new Promise(res => {
  //     this.compter++;
  //     console.log(this.compter);
  //     res();
  //   });
  // }

  // deleteElement(index, bfDataTabCompare) {
  //   return new Promise(res => {
  //     bfDataTabCompare.splice(index, 1);
  //     res(bfDataTabCompare);
  //   });
  // }

  // addToDataTab(date) {
  //   return new Promise(res => {
  //     this.dataTab.push({ "date": date, "bfQt": this.compter })
  //     this.compter = 0;
  //     console.log(this.dataTab);
  //     res();
  //   });
  // }





  // stringDateBuilder(elementDate) {
  //   let stringDate: string;
  //   let day = elementDate.getDate();
  //   let month = elementDate.getUTCMonth();
  //   let year = elementDate.getFullYear();
  //   stringDate = day + "/" + month + "/" + year;
  //   return stringDate;
  // }
}

