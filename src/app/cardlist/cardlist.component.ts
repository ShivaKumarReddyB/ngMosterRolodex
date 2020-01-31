import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';


@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {

 public moster=[]


  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getConfig().subscribe((val)=>this.moster=(val))
    console.log(this.moster)

}


}
