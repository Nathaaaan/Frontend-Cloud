import { Component, OnInit } from '@angular/core';
import {SensitivityService} from "../services/sensitivity.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Sensitivity} from "../models/sensitivity";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-sensitivitycomp',
  templateUrl: './sensitivitycomp.component.html',
  styleUrls: ['./sensitivitycomp.component.css'],
  providers: [SensitivityService]
})
export class SensitivitycompComponent implements OnInit {

  private _sensitivities: Sensitivity[] = [];

  public questionnaireForm = this.fb.group({
    gameName: this.fb.control(''),
    playerName: this.fb.control(''),
    resolutionValue: this.fb.control(''),
    sensitivityValue: this.fb.control('')
  });

  public deleteForm = this.fb.group({
    idDelete: this.fb.control('')
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private sensitivityService: SensitivityService) {
  }

  ngOnInit(): void {

    this.sensitivityService.getSensitivities().subscribe((sensitivities: Sensitivity[]) => {
      for (const key in sensitivities) {
        this._sensitivities.push(sensitivities[key]);
      }
    });
    console.log(this._sensitivities)
  }


  get sensitivities(): Sensitivity[] {
    return this._sensitivities;
  }

  returnSensitivitiesById(i: number) {
    return this._sensitivities[i].toString();
  }

  returnSensitivityToString(s: Sensitivity){
    return s.toString();
  }

  returnSensitivityIdById(i: number){
    return this.sensitivities[i].questionId;
  }

  onClickForm() {

    let urltocall: string = 'http://localhost:12322/sensitivities?';
    urltocall += 'gameName=' + this.questionnaireForm.value["gameName"];
    urltocall += '&playerName=' + this.questionnaireForm.value["playerName"];
    urltocall += '&resolutionValue=' + this.questionnaireForm.value["resolutionValue"];
    urltocall += '&sensitivityValue=' + this.questionnaireForm.value["sensitivityValue"];

    this.http.post<Sensitivity>(urltocall, {title: 'Angular POST Request Example'}).subscribe(data => {
      console.log(data);
    });


  }

  deleteFromArray(id: number){
    console.log("Méthode delete from array")
    this._sensitivities = this._sensitivities.filter(s => s.questionId !== id);
  }

  onClickFormDelete(){
    //TODO Delete
    console.log(this.deleteForm.value["idDelete"]);
    let urltocall: string = 'http://localhost:12322/sensitivities/';
    urltocall += this.deleteForm.value["idDelete"];

    this.http.delete<Sensitivity>(urltocall).subscribe(data => {
      console.log(data);
      this.deleteFromArray(this.deleteForm.value["idDelete"])
    });


  }

}
