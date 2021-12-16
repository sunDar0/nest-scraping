import { BaseScraping } from "./base.scraping";

export class InvenScraping extends BaseScraping{
  constructor(){
    
    super('https://inven.co.kr');
  }
  
  async response() 
  {
    
  }

  async parsedData()
  {

  }
  
}

export interface rankDto
{
  gameName: string;
  score: number;
}