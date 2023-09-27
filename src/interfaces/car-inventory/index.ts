import { GetQueryInterface } from 'interfaces';

export interface CarInventoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CarInventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
