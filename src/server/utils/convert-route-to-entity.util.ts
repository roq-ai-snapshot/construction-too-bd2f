const mapping: Record<string, string> = {
  companies: 'company',
  'rental-requests': 'rental_request',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
