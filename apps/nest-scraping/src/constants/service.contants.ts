export const INVEN_SERVICE = 'invenService';
export const NAVER_SERVICE = 'naverService';
export const DOGDRIP_SERVICE = 'dogdripService';

export type ScrapingType = 
  typeof INVEN_SERVICE
  | typeof NAVER_SERVICE
  | typeof DOGDRIP_SERVICE