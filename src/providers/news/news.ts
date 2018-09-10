import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { news } from '../../models/news';
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public firestore: AngularFirestore) { }
  getNews(): AngularFirestoreCollection<news> {
    return this.firestore.collection('newsList');
  }

  dataordered(res=[]){


  }

}
