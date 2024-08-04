import {  Injectable } from "@angular/core";
import { HttpService } from "./http-service.service";
// import { HttpService } from "@app/shared/services/http-service.service";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  envir = "https://hackthon-fqd6.vercel.app/";

  constructor(
    private httpService :HttpService
  ) {}

  getAlertsList() {
    return this.httpService.getData({apiUrl: `${this.envir}alerts`});
  }

  createAlert(payload) {
    return this.httpService.postData({apiUrl: `${this.envir}alert`, body: payload});
  }

  updateAlert(payload) {
    return this.httpService.putData({apiUrl: `${this.envir}alert/${payload._id}`, body: payload});
  }

}
