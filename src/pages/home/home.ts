import { AboutusPage } from './../aboutus/aboutus';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { NewsDetailPage } from '../news-detail/news-detail';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  brnews:any=[];
  data:any=[];
  constructor(public navCtrl: NavController,public newsservice:NewsProvider,public firestore: AngularFirestore) {

  }

   ionViewDidLoad(){
    this.firestore.collection('newsList', ref => ref.orderBy('date','desc') ).valueChanges().subscribe((data)=>{
      data.forEach(element=>{
      this.brnews.push(element);

      })
      console.log(this.brnews);
    });
      }

      detail(data){
        this.navCtrl.push(NewsDetailPage,{'news':data});
      }
      next(){
        this.navCtrl.push(AboutusPage);
      }
   

}