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
      this.dataTab = this.bfserv.dataTab
    }, 100);
  }
}
