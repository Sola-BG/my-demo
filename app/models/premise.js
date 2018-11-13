import DS from 'ember-data';
const { Model } = DS;
import {attr, belongsTo} from '@ember-decorators/data'

export default class PremiseModel extends Model {
  @attr('string') address;
  @belongsTo('customer') customer;
}
