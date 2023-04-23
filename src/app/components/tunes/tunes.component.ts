import {Component, OnInit} from '@angular/core';
import {TuneService} from "../../services/tune.service";

@Component({
  selector: 'app-tunes',
  templateUrl: './tunes.component.html',
  styleUrls: ['./tunes.component.scss']
})
export class TunesComponent implements OnInit{
  public tunes: any
  constructor(private tuneService: TuneService) {
    this.tuneService.getAll().subscribe(tunes => {
      this.tunes = tunes.data
    });
  }
  ngOnInit() {

  }
}
