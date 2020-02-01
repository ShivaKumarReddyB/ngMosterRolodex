import { Component, OnInit,OnChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit, OnChanges {
  public moster = [];

  searchText = '';
  filterMonsters;

  constructor(private data: DataService) {
    console.log(this.moster);

  }

  ngOnInit() {
    this.data.getConfig().subscribe(val => (this.moster = val));
    console.log('cardlist', this.moster);
  }
  ngOnChanges(){
    this.filterMonsters = this.moster.filter(m =>
      m.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    console.log(this.filterMonsters,'lifecyle')
  }

}
