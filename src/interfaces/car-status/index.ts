import { GetQueryInterface } from 'interfaces';

export interface CarStatusInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CarStatusGetQueryInterface extends GetQueryInterface {
  id?: string;
}
