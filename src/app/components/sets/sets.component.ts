import {Component, OnInit} from '@angular/core';
import {SetService} from "../../services/set.service";
import {ISet} from "../models/set";


@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit{
  constructor(private setService: SetService) {}
  public  sets: ISet[] = []
  private abcTunes:[]=[]
  ngOnInit() {
    this.setService.getAll().subscribe(sets => {
      this.sets = sets.data
      console.log('sets', this.sets)
    })
  }

}
