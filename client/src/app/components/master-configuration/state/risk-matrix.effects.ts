// import { Injectable } from '@angular/core';
// import { Actions, ofType, createEffect } from '@ngrx/effects';
// import { mergeMap, catchError, tap, map } from 'rxjs/operators';
// import { EMPTY, NEVER, of } from 'rxjs';
// // import * as BuilderActions from './builder.actions';
// // import { WorkOrderBuilderService } from '../../services/workorder-builder.service';
// import { formConfigurationStatus } from '../../../../app.constants';
// import {
//   // riskMatrixUpdateDetail,
//   // riskMatrixUpdateDetailStatus
// } from './risk-matrix.actions';
// // import { RiskMatrixService } from '../../services/risk-matrix.service';
// // import { formDetailUpdateStatus } from 'src/app/components/workorder/state/builder/builder.actions';

// @Injectable()
// export class RiskMatrixEffects {
//   updateDataToDraft$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(riskMatrixUpdateDetail),
//       mergeMap((action) =>
//         this.riskMatrixService
//           .updateMatrix(action.riskMatrixConfiguration)
//           .pipe(
//             map((data) =>
//               riskMatrixUpdateDetailStatus({
//                 formSaveStatus: formConfigurationStatus.saved
//               })
//             ),

//             catchError((error) =>
//               of(
//                 riskMatrixUpdateDetailStatus({
//                   formSaveStatus: formConfigurationStatus.saved
//                 })
//               )
//             )
//           )
//       )
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private riskMatrixService: RiskMatrixService
//   ) {}
// }
