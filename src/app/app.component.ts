import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arrayOfItems = [
    {
      title: 'red',
      subTitle: 'f00',
      description: 'toto lorem ispum soil t'
    },
    {
      title: 'blue',
      subTitle: 'aaas',
      description: 'toto lorem ispum soil t'
    },
    {
      title: 'toto',
      subTitle: 'f00',
      description: 'toto lorem ispum soil t'
    },
    {
      title: 'red',
      subTitle: 'toto',
      description: 'toto lorem toto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil t soil t'
    },
    {
      title: 'lorem',
      subTitle: 'toto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil t',
      description: 'toto lorem ispum soil t'
    },
    {
      title: 'red',
      subTitle: 'toto',
      description: 'toto lorem ispum soil t'
    },
    {
      title: 'lorem',
      subTitle: 'soil',
      description: 'toto lorem ispum toto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil t t'
    },
    {
      title: 'red',
      subTitle: 'toto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil t',
      description: 'toto lorem ispum soil t'
    },
    {
      title: 'lorem',
      subTitle: 'soil',
      description: 'toto lorem ispum soil t'
    },
    {
      title: 'red',
      subTitle: 'toto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil t',
      description: 'toto lorem ispum soil t'
    },
    {
      title: 'lorem',
      subTitle: 'soil',
      description: 'toto loremtoto lorem toto lorem ispum soil ttoto lo' +
        'rem ispum soil ttoto toto lorem ispum soil ttoto lorem ispum soil' +
        ' tlorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil ttoto lorem' +
        ' ispum soil t soil ttoto lorem ispum soil t ispum soil t'
    },
    {
      title: 'red',
      subTitle: 'toto',
      description: 'toto lorem ispum soil t'
    },
    {
      title: 'lorem',
      subTitle: 'soil',
      description: 'toto toto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil ttoto lorem ispum soil t ispum soil t'
    }
  ];
  newArray = [];

  ngOnInit() {

    for (let i = 0; i < this.arrayOfItems.length; i += 3) {

      this.newArray.push({ items: this.arrayOfItems.slice(i, i + 3) });
    }
  }
}
