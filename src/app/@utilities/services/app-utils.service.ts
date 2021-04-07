import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { debug, time } from 'console';
import * as moment from 'moment';
import { ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AppUtilsService {

  constructor(private route: Router, private confirmationService: ConfirmationService) { }

  /**
   * This method used to set objects to autocomplete and to set selected values. Also we'll set the default value(id) to formcontrols
   * @param comboObj ComboArray which will display as the list in autocomplete.
   * @param hdrcacheObj  hdrcacheObj which has the id which needs to convert as value to assign ot to selected value of autocomplete
   * @param $scope  $scope scope(this) of the component
   * @param formName Form control name of the component
   */
  setAutoCompleteObjAndValue(comboObj, hdrcacheObj, $scope, key?){
    // Remap autocomplete object based on response and set default value.
    if (comboObj){
      $scope[key + 'Obj'] = comboObj;
      $scope[key.formControlId + 'SelVal']  = '';
    }

  }



  navigate(url, scope?)
  {
    if (scope && scope.serviceName && scope['serviceName'].setInitDetails instanceof Function) {
      scope['serviceName'].setInitDetails(null);
    }
    this.route.navigateByUrl(url);
  }

  /**
   *
   * @param scope$ : pass the scope of the controller
   * @param responseObj : response message
   * @param messageType : Error Type
   */
  dialogAlertMsg(scope$, responseObj, messageType?)
  {
    let responseMessage = '';
    if (responseObj['strFailureMsg']){
      messageType = 'Error';
      responseMessage = responseObj['strFailureMsg'];
    }
    else
    {
      messageType = 'Success';
      responseMessage = responseObj['strSuccessMsg'];
    }

    if (responseMessage){
      scope$.confirmationService.confirm({
        message: responseMessage,
        header: messageType,
        acceptLabel: 'OK',
        icon: 'fa fa-check-circle',
        rejectVisible: false
      });
    }
  }

  /**
   *
   * @param responseMessage Message to display in the alert
   * @param messageType Success or Error
   */
  okAlert(scope, responseMessage, messageType?){
    scope.confirmationService.confirm({
      message: responseMessage,
      header: messageType ? messageType : 'Success',
      acceptLabel: 'OK',
      icon: 'fa fa-check-circle',
      rejectVisible: false
    });
  }


}
