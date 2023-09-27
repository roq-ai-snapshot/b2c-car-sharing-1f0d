import { GetQueryInterface } from 'interfaces';

export interface OperationStaffInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface OperationStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
}
