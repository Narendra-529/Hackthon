import { Injectable } from "@angular/core";
import { HttpService } from "./http-service.service";
import { ReplaySubject, Subject } from "rxjs";
// import { HttpService } from "@app/shared/services/http-service.service";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  envir = "https://hackthon-fqd6.vercel.app/";

  Changeddata = new ReplaySubject<any>(1);

  insertedData = new Subject<any>();

  constructor(private httpService: HttpService) {}

  getAlertsList() {
    return this.httpService.getData({ apiUrl: `${this.envir}alerts` });
  }

  createAlert(payload) {
    return this.httpService.postData({
      apiUrl: `${this.envir}alert`,
      body: payload,
    });
  }

  updateAlert(payload) {
    return this.httpService.putData({
      apiUrl: `${this.envir}alert/${payload._id}`,
      body: payload,
    });
  }

  count = 0;
  interval;
  // let count = 0;

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // let interval;

  // addRecord() {
  //   let value;
  //   console.log(this.count)
  //   if (this.count < 5) {
  //     // First 5 records: values less than 50
  //     value = this.getRandomInt(40, 49);
  //   } else if (this.count < 10) {
  //     // Next 5 records: values more than 50 and less than 60
  //     value = this.getRandomInt(51, 59);
  //   } else {
  //     // Subsequent records: values between 40 and 60
  //     value = this.getRandomInt(40, 60);
  //   }

  //   const record = {
  //     "parameter": "CH4 Emission level",
  //     "value": value,
  //     "assetId": "sdfsdfsasd2",
  //     "longerTime":5000  //millisconds
  //   }

  //   if(this.count >= 15){
  //     clearInterval(this.interval);
  //     console.log('Finished adding records');
  //     return;

  //   }
  //   this.createNewEmissionRecord(record)

  // //   {
  // //     "parameter": "CH4 Emission level",
  // //     "value": 56,
  // //     "assetId": "sdfsdfsasd2",
  // // "longerTime":5000  //millisconds
  // //   }

  // /// call your api...........

  //   // record.save()
  //   //   .then(doc => {
  //   //     console.log(`Record added: ${doc}`);
  //   //     count++;
  //   //     if (count >= 15) {
  //   //       clearInterval(interval);
  //   //       console.log('Finished adding records');
  //   //       mongoose.connection.close();
  //   //     }
  //   //   })
  //   //   .catch(err => {
  //   //       count++;
  //   //     console.error('Error adding record', err);
  //   //   });
  // }

  generateRecords(baseValue, duration, type, parameter, assetId) {
    const records = [];
    const totalRecords = duration * 3;
    const segment1 = Math.floor(totalRecords * (0.5 / 3));
    const segment2 = Math.floor(totalRecords * (2 / 3));
    const segment3 = totalRecords - segment1 - segment2;

    for (let i = 0; i < totalRecords; i++) {
      let value;

      // if (i < segment1) {
      //   value = this.getRandomInt(0, baseValue - 1);
      // } else if (i < segment1 + segment2) {
      //   value = this.getRandomInt(baseValue + 1, baseValue + 10);
      // } else {
      //   value = this.getRandomInt(0, baseValue - 1);
      // }

      if (type === "1") {
        if (i < segment1 || i >= segment1 + segment2) {
          value = this.getRandomInt(0, baseValue - 1);
        } else {
          value = this.getRandomInt(baseValue + 1, baseValue + 10);
        }
      } else if (type === "2") {
        if (i < segment1 || i >= segment1 + segment2) {
          value = this.getRandomInt(baseValue + 1, baseValue + 10);
        } else {
          value = this.getRandomInt(0, baseValue - 1);
        }
      }

      const record = {
        parameter: parameter,
        value: value,
        assetId: assetId,
        longerTime: duration * 1000,
      };

      records.push(record);
    }

    return records;
  }

  sendRecordsWithDelay(records) {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < records.length) {
        this.createNewEmissionRecord(records[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 1000); // 1-second delay
  }

  // Insert a record every 1.5 seconds
  startInsertingRecords(value, duration, type, parameter, assetId) {
    let max_duration = duration;
    // console.log("startInsertingRecords", value, duration, type);
    if (duration > 10) {
      max_duration = 10;
    }
    const records = this.generateRecords(
      value,
      max_duration,
      `${type}`,
      parameter,
      assetId
    );
    this.sendRecordsWithDelay(records);
    // this.interval =  setInterval(this.generateRecords, 800);
  }

  createNewEmissionRecord(payload) {
    // console.log("payload", payload);
    // this.httpService

    this.httpService
      .postData({ apiUrl: `${this.envir}emission`, body: payload })
      .subscribe({
        next: (data) => {
          // console.log("data", data);
          this.insertedData.next(payload);
        },
        error: (error) => {
          console.error("Error fetching emissions alerts", error);
        },
      });
  }
}
