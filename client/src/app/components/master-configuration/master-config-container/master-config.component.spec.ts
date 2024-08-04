import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterConfigurationContainerComponent } from './master-config.component';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

import { CommonService } from '@app/shared/services/common.service';

describe('WorkorderContainerComponent', () => {
  let component: MasterConfigurationContainerComponent;
  let fixture: ComponentFixture<MasterConfigurationContainerComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterConfigurationContainerComponent],
      imports: [RouterModule, RouterTestingModule],
      providers: [
        BreadcrumbService,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        HttpClient,
        HttpHandler,
        CommonService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterConfigurationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
