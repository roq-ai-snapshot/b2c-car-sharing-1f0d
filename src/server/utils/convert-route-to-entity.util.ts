const mapping: Record<string, string> = {
  'booking-histories': 'booking_history',
  'car-inventories': 'car_inventory',
  'car-statuses': 'car_status',
  companies: 'company',
  'operation-staffs': 'operation_staff',
  users: 'user',
  'user-locations': 'user_location',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
