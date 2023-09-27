import queryString from 'query-string';
import { CarInventoryInterface, CarInventoryGetQueryInterface } from 'interfaces/car-inventory';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCarInventories = async (
  query?: CarInventoryGetQueryInterface,
): Promise<PaginatedInterface<CarInventoryInterface>> => {
  return fetcher('/api/car-inventories', {}, query);
};

export const createCarInventory = async (carInventory: CarInventoryInterface) => {
  return fetcher('/api/car-inventories', { method: 'POST', body: JSON.stringify(carInventory) });
};

export const updateCarInventoryById = async (id: string, carInventory: CarInventoryInterface) => {
  return fetcher(`/api/car-inventories/${id}`, { method: 'PUT', body: JSON.stringify(carInventory) });
};

export const getCarInventoryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/car-inventories/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCarInventoryById = async (id: string) => {
  return fetcher(`/api/car-inventories/${id}`, { method: 'DELETE' });
};
