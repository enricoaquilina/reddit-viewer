import { Component } from '@angular/core';
import {RedditService} from '../../app/services/reddit.service';
import { NavController } from 'ionic-angular';
import {RedditsPage} from '../reddits/reddits';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit: any;
  ranking: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }
  getDefaults() {
    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
    }
    else {
      this.category = 'machinelearning';
    }
    
    if(localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    }
    else{
      this.limit = 10;
    }

    if(localStorage.getItem('ranking') != null) {
      this.ranking = localStorage.getItem('ranking');
    }
    else{
      this.ranking = 'hot';
    }
  }
  setDefaults() {
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    localStorage.setItem('ranking', this.ranking);
    this.navCtrl.push(RedditsPage);
  }
}
