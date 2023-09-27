import queryString from 'query-string';
import { CarStatusInterface, CarStatusGetQueryInterface } from 'interfaces/car-status';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCarStatuses = async (
  query?: CarStatusGetQueryInterface,
): Promise<PaginatedInterface<CarStatusInterface>> => {
  return fetcher('/api/car-statuses', {}, query);
};

export const createCarStatus = async (carStatus: CarStatusInterface) => {
  return fetcher('/api/car-statuses', { method: 'POST', body: JSON.stringify(carStatus) });
};

export const updateCarStatusById = async (id: string, carStatus: CarStatusInterface) => {
  return fetcher(`/api/car-statuses/${id}`, { method: 'PUT', body: JSON.stringify(carStatus) });
};

export const getCarStatusById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/car-statuses/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCarStatusById = async (id: string) => {
  return fetcher(`/api/car-statuses/${id}`, { method: 'DELETE' });
};
