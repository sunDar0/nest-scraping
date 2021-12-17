import * as cheerio from "cheerio";


export abstract class BaseScraping{
  protected $: cheerio.CheerioAPI;
  constructor()
  {
    this.$ = cheerio;
    
  }

  abstract parsedData(data);

}