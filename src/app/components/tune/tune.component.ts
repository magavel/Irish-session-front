import {Component, OnInit} from '@angular/core';
import {TuneService} from "../../services/tune.service";
import * as abcjs from "abcjs";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-tune',
  templateUrl: './tune.component.html',
  styleUrls: ['./tune.component.scss']
})
export class TuneComponent implements  OnInit {
  public tune: any

  constructor(private tuneService: TuneService,   private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')! as unknown as number;

    this.tuneService.get(id ).subscribe(tune => {
      this.tune = tune.data.attributes
      console.log('tune', this.tune)

    const cursorControl = {}

    const abcOptions = {add_classes: true};
    const audioParams = {chordsOff: true};

    if (abcjs.synth.supportsAudio()) {
      var synthControl = new abcjs.synth.SynthController();
      synthControl.load("#audio",
        cursorControl,
        {
          displayLoop: true,
          displayRestart: true,
          displayPlay: true,
          displayProgress: true,
          displayWarp: true
        }
      );

      const visualObj = abcjs.renderAbc("paper",
        this.tune.abc, abcOptions);
      const createSynth = new abcjs.synth.CreateSynth();
      createSynth.init({visualObj: visualObj[0]}).then(function () {
        synthControl.setTune(visualObj[0], false, audioParams).then(function () {
          console.log("Audio successfully loaded.")
        }).catch(function (error) {
          console.warn("Audio problem:", error);
        });
      }).catch(function (error) {
        console.warn("Audio problem:", error);
      });
    } else {
      console.log('zudio non supporté')
    }
    })


    //abcjs.renderAbc("paper", this.data.attributes.abc, {});
  }
}
