import DS from 'ember-data';
const { Model } = DS;
import {attr} from '@ember-decorators/data'

export default class CustomerModel extends Model {
  @attr('string') name;
  @attr('string') email;
}
