import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sensitivity} from "../models/sensitivity";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SensitivityService {

  private baseUrl = 'http://localhost:12322/sensitivities';

  constructor(private http: HttpClient) { }

  getSensitivities(): any{

    let urlToCall = this.baseUrl;
    return this.http.get(urlToCall)
      .pipe(map(responseData => {
        const rawSensitivities: Sensitivity[] = [];
        let responseDataStr = JSON.stringify(responseData);
        let finalResponse = JSON.parse(responseDataStr);
        for(const key in finalResponse){
          // @ts-ignore
          if(finalResponse.hasOwnProperty(key)){

            const questionId: number = finalResponse[key]["questionId"];
            const gameName: string = finalResponse[key]["gameName"];
            const sensitivityValue: number = finalResponse[key]["sensitivityValue"];
            const resolutionValue: string = finalResponse[key]["resolutionValue"];
            const playerName: string = finalResponse[key]["playerName"];
            const sensitivity: Sensitivity = new Sensitivity();
            sensitivity.sensitivityValue = sensitivityValue;
            sensitivity.resolutionValue = resolutionValue;
            sensitivity.playerName = playerName;
            sensitivity.questionId = questionId;
            sensitivity.gameName = gameName;
            rawSensitivities.push(sensitivity);
          }
        }
        return rawSensitivities;
      }))
  }


}
