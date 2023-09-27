interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Owner',
    'Fleet Manager',
    'Admin',
    'Business Owner',
    'Operations Manager',
    'Operations Staff',
    'Customer Service Representative',
    'End Customer',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View car status', 'View user location', 'View booking history', 'View car inventory'],
  ownerAbilities: [
    'Manage operation staff',
    'Manage car status',
    'Manage user location',
    'Manage booking history',
    'Manage car inventory',
    'Manage user',
    'Manage company',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6c4bfbbd-5c57-460f-b92a-4b8a12661786',
};
