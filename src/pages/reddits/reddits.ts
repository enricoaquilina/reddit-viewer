import { Component } from '@angular/core';
import {RedditService} from '../../app/services/reddit.service';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../details/details';
@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;
  category: any;
  limit: any;
  ranking: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }
  ngOnInit() {
    this.getPosts(this.category, this.limit, this.ranking);
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
  getPosts(category, limit, ranking) {
    this.redditService.getPosts(category, limit, ranking)
      .subscribe(res => {
        this.items = res.data.children;
      });
  }
  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }
  changeCategory() {
    this.getPosts(this.category, this.limit, this.ranking);
  }
}
