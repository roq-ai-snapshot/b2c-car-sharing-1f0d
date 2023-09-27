import queryString from 'query-string';
import { OperationStaffInterface, OperationStaffGetQueryInterface } from 'interfaces/operation-staff';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOperationStaffs = async (
  query?: OperationStaffGetQueryInterface,
): Promise<PaginatedInterface<OperationStaffInterface>> => {
  return fetcher('/api/operation-staffs', {}, query);
};

export const createOperationStaff = async (operationStaff: OperationStaffInterface) => {
  return fetcher('/api/operation-staffs', { method: 'POST', body: JSON.stringify(operationStaff) });
};

export const updateOperationStaffById = async (id: string, operationStaff: OperationStaffInterface) => {
  return fetcher(`/api/operation-staffs/${id}`, { method: 'PUT', body: JSON.stringify(operationStaff) });
};

export const getOperationStaffById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/operation-staffs/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteOperationStaffById = async (id: string) => {
  return fetcher(`/api/operation-staffs/${id}`, { method: 'DELETE' });
};
