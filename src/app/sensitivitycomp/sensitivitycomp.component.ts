import { Component, OnInit } from '@angular/core';
import {SensitivityService} from "../services/sensitivity.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Sensitivity} from "../models/sensitivity";


@Component({
  selector: 'app-sensitivitycomp',
  templateUrl: './sensitivitycomp.component.html',
  styleUrls: ['./sensitivitycomp.component.css'],
  providers: [SensitivityService]
})
export class SensitivitycompComponent implements OnInit {

  private _sensitivities: Sensitivity[] = [];

  constructor(private http: HttpClient, private sensitivityService:SensitivityService) { }

  ngOnInit(): void {

    this.sensitivityService.getSensitivities().subscribe((sensitivities: Sensitivity[]) => {
      for(const key in sensitivities){
        this._sensitivities.push(sensitivities[key]);
      }
    });
  console.log(this._sensitivities)
  }


  get sensitivities(): Sensitivity[] {
    return this._sensitivities;
  }

  returnSensitivitiesById(i: number){
    return this._sensitivities[i].toString();
  }

}
