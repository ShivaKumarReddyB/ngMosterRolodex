import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';


@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {

 public moster=[]
 monster;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getConfig().subscribe((val)=>this.moster.push(val))
    this.monster=this.moster[0]

}


}
