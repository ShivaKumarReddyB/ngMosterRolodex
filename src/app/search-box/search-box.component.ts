import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchEvent = new EventEmitter();

  searchField = '';
  monster = [];
  filterMonsters = [];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getConfig().subscribe(val => (this.monster = val));

  }
  searchChange() {
    this.filterMonsters = this.monster.filter(m =>
      m.name.toLowerCase().includes(this.searchField.toLowerCase())
    );
    console.log( 'filter',this.filterMonsters);
    this.searchEvent.emit(this.filterMonsters);
  }


  // console.log('searchText', this.searchField);
}
