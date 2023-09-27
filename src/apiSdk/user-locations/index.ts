import queryString from 'query-string';
import { UserLocationInterface, UserLocationGetQueryInterface } from 'interfaces/user-location';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserLocations = async (
  query?: UserLocationGetQueryInterface,
): Promise<PaginatedInterface<UserLocationInterface>> => {
  return fetcher('/api/user-locations', {}, query);
};

export const createUserLocation = async (userLocation: UserLocationInterface) => {
  return fetcher('/api/user-locations', { method: 'POST', body: JSON.stringify(userLocation) });
};

export const updateUserLocationById = async (id: string, userLocation: UserLocationInterface) => {
  return fetcher(`/api/user-locations/${id}`, { method: 'PUT', body: JSON.stringify(userLocation) });
};

export const getUserLocationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/user-locations/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteUserLocationById = async (id: string) => {
  return fetcher(`/api/user-locations/${id}`, { method: 'DELETE' });
};
