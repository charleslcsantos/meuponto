import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAG7SiJpRPyCuNKOnC3MWh3bsxrjF3MkX8',
  authDomain: 'meuponto-22c8a.firebaseapp.com',
  databaseURL: 'https://meuponto-22c8a.firebaseio.com',
  projectId: 'meuponto-22c8a',
  storageBucket: 'meuponto-22c8a.appspot.com',
  messagingSenderId: '453391659544',
  appId: '1:453391659544:web:ffcce5de0317526828c96d',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'meuponto';

  async ngOnInit(): Promise<void> {
    const querySnapshot = await getDocs(collection(db, 'registros'));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  }
}
