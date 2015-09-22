import {computedFrom} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
@inject(ObserverLocator )
export class Feed{

  constructor(observerLocator){
    this.observerLocator = observerLocator;
    this.heading = 'Discussion Feed';
   ;
  }

}
