import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SetService } from '../../services/set.service';
import { Observable } from 'rxjs';
import { ISet } from '../models/set';
import { TuneService } from '../../services/tune.service';
import * as abcjs from 'abcjs';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
})
export class SetComponent implements OnInit {
  private name: any;
  public set!: ISet;
  public abcComplet: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private setservice: SetService,
    private tuneService: TuneService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.setservice.get(id).subscribe((set) => {
      this.set = set.data;
      console.log(this.set);
      this.set.attributes.tunes.forEach((tune) => {
        this.tuneService.get(tune.id).subscribe((tune) => {
          const abc = tune.data.attributes.abc;
          this.abcComplet += `${abc}  `;

          const abcOptions = {
            print: true
          };
            const visualObj = abcjs.renderAbc(
              'paper',
              this.abcComplet,
              abcOptions
            );
        });
      });
    });
    console.log('abc', this.abcComplet);
  }
}
