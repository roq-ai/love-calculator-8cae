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
  ownerRoles: ['Guest User'],
  customerRoles: [],
  tenantRoles: ['Guest User'],
  tenantName: 'Team',
  applicationName: 'love calculator app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['View shared results', 'View love calculations', 'View user preferences', 'View device info'],
  getQuoteUrl: 'https://app.roq.ai/proposal/73dd5874-52f7-447e-bad5-400978ccdda1',
};
