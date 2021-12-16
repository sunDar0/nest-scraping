import * as cheerio from "cheerio";

export abstract class BaseScraping{
  protected readonly $: cheerio.CheerioAPI;
  constructor()
  {
    this.$ = cheerio;
  }

  abstract parsedData(data);
}