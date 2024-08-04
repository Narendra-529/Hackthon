import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { BreadcrumbService } from 'xng-breadcrumb';
import { routingUrls } from '../../../app.constants';
import { CommonService } from '../../../shared/services/common.service';
import { HeaderService } from '../../../shared/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-config-container',
  templateUrl: './master-config.component.html',
  styleUrls: ['./master-config.component.scss']
})
export class MasterConfigurationContainerComponent implements OnInit {
  currentRouteUrl$: Observable<string>;
  readonly routingUrls = routingUrls;
  private destroy$ = new Subject<void>();

  constructor(private commonService: CommonService, private router: Router) {}
  ngOnInit(): void {
    this.commonService.currentRouteUrlAction$
      .pipe(
        takeUntil(this.destroy$),
        tap((currentRouteUrl) => {
          if (currentRouteUrl === routingUrls.masterConfiguration.url) {
            this.router.navigate(['/master-configuration/alerts']);
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
