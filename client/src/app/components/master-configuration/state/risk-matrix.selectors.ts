import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { IRiskMatrixState } from '../../interfaces/risk-matrix';
// import { RiskMatrixConfigResponse } from './risk-matrix-configs/risk-matrix-configs.reducer';

export interface RiskMatrixModuleState {
  riskMatrixConfiguration: any
}

export interface State {
  feature: RiskMatrixModuleState;
}

const selectRiskMatrixState =
  createFeatureSelector<RiskMatrixModuleState>('RiskMatrix');

const selectRiskMatrixConfigurationState = createSelector(
  selectRiskMatrixState,
  (state) => state.riskMatrixConfiguration
);

export const getRiskMatrixConfiguration = () =>
  createSelector(selectRiskMatrixConfigurationState, (state) => state);

export const getRiskMatrixCategory = (categoryIndex: number) =>
  createSelector(
    selectRiskMatrixConfigurationState,
    (state) => state.categories[categoryIndex]
  );

export const getRiskMatrixCategoriesNames = () =>
  createSelector(selectRiskMatrixConfigurationState, (state) =>
    state.categories.map((category) => category.name)
  );
