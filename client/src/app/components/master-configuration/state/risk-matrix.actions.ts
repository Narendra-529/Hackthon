import { createAction, props } from '@ngrx/store';
// import {
//   IRisKMatrixSubCategory,
//   IRiskMatrixCategory,
//   IRiskMatrixSeverityLevel,
//   IRiskMatrixState,
//   weightForm
// } from '../../interfaces/risk-matrix';

export const updateRiskMatrixConfiguration = createAction(
  '[Risk Matrix] updateRiskMatrixConfiguration',
  props<{
    riskMatrixConfiguration: any;
  }>()
);

export const updateMatrixHeaderForm = createAction(
  '[Risk Matrix] updateMatrixHeaderForm',
  props<{
    name: string;
    description: string;
    plantInfo: {
      plantId: string;
      plantName: string;
    };
    location: {
      locationId: string;
      locationName: string;
    };
    asset: {
      assetId: string;
      assetName: string;
    };
  }>()
);
export const resetRiskMatrixConfig = createAction(
  '[Risk Matrix] resetRiskMatrixConfiguration'
);

export const riskMatrixUpdateDetail = createAction(
  '[Risk Matrix] riskMatrixUpdateDetail',
  props<{
    riskMatrixConfiguration: any;
  }>()
);