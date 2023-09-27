import queryString from 'query-string';
import { BookingHistoryInterface, BookingHistoryGetQueryInterface } from 'interfaces/booking-history';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBookingHistories = async (
  query?: BookingHistoryGetQueryInterface,
): Promise<PaginatedInterface<BookingHistoryInterface>> => {
  return fetcher('/api/booking-histories', {}, query);
};

export const createBookingHistory = async (bookingHistory: BookingHistoryInterface) => {
  return fetcher('/api/booking-histories', { method: 'POST', body: JSON.stringify(bookingHistory) });
};

export const updateBookingHistoryById = async (id: string, bookingHistory: BookingHistoryInterface) => {
  return fetcher(`/api/booking-histories/${id}`, { method: 'PUT', body: JSON.stringify(bookingHistory) });
};

export const getBookingHistoryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/booking-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBookingHistoryById = async (id: string) => {
  return fetcher(`/api/booking-histories/${id}`, { method: 'DELETE' });
};
