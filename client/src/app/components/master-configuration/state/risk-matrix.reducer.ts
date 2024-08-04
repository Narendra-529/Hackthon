/* eslint-disable no-underscore-dangle */
import { createReducer, on } from '@ngrx/store';
import * as RiskMatrixActions from './risk-matrix.actions';
import { cloneDeep } from 'lodash';
// import { IRiskMatrixState } from '../../interfaces/risk-matrix';
import { formConfigurationStatus } from '@app/app.constants';

const initialState = {
  name: '',
  description: '',
  plantInfo: null,
  location: null,
  asset: null,
  status: formConfigurationStatus.draft,
  formSaveStatus: formConfigurationStatus.saving,
  lowestPriorityCheck: false,
};

export const riskMatrixConfigurationReducer = createReducer<any>(
  initialState,
  on(RiskMatrixActions.updateMatrixHeaderForm, (state, action) => {
    const newState = cloneDeep(state);
    newState.name = action.name;
    newState.description = action.description;
    newState.plantInfo = action.plantInfo;
    newState.location = action.location;
    newState.asset = action.asset;
    // action.categories.map((category, index) => {
    //   newState.categories[index].name = category;
    // });
    newState.formSaveStatus = formConfigurationStatus.saving;
    return newState;
  }),
  on(RiskMatrixActions.resetRiskMatrixConfig, (state) => initialState)
);
