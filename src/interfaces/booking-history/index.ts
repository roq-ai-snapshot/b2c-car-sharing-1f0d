import { GetQueryInterface } from 'interfaces';

export interface BookingHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BookingHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
