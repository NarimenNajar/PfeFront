import * as moment from 'moment';
import _date = moment.unitOfTime._date;
import {ActiviteFormation} from './activiteFormation';

export class Event {
  title: string;
  start: Date;
  end: Date;
  activiteFormation: ActiviteFormation;


}
