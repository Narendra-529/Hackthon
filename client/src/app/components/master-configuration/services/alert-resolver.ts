import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Resolve, Router } from '@angular/router';
// import { RiskMatrixModuleState } from '../state/risk-matrix/risk-matrix.selectors';
import { Observable, of } from 'rxjs';
// import { RiskMatrixService } from './risk-matrix.service';
import { catchError, filter, first, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RiskMatirxResolverService
  implements Resolve<any> {
  riskMatrixData: any = {};
  constructor(private router: Router,) { }

  resolve(router: ActivatedRouteSnapshot): Observable<any> {
    const nav = this.router.getCurrentNavigation();

    if (nav?.extras?.state?.['formData']) {
      this.riskMatrixData = Object.assign(nav.extras.state['formData'], {});
      nav.extras.state['formData'] = null;

    //   if (typeof this.riskMatrixData.tags === 'string' && this.riskMatrixData.tags.length > 0) {
    //     this.riskMatrixData.tags = this.riskMatrixData.tags.split(',').map((tag: string) => tag.trim());
    //   } else if (!Array.isArray(this.riskMatrixData.tags)) {
    //     this.riskMatrixData.tags = [];
    //   }
      return of(
        this.riskMatrixData
      ) as Observable<any>;
    } else {
   

      this.router.navigate(['/master-configuration/alerts']);
      return of(null);
    }
  }
}
