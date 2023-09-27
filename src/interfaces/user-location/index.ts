import { GetQueryInterface } from 'interfaces';

export interface UserLocationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserLocationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
