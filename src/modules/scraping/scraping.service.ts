import { HttpService, Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';



@Injectable()
export class ScrapingService {

  

  constructor(private readonly httpSerivce: HttpService)
  {
    
  }

  async scrapingData():Promise<any>
  {
    
    const response = await this.httpSerivce.get('https://inven.co.kr').toPromise();

    const $ = cheerio.load(response.data);
    const rankElements = $('.menuGroup.openCritic > .rankBox > ul > li');
    let parsed = [];
    const maped = rankElements.each(async (idx, el)=>{
      let name = String($(el).find('a > span.gameName').text());
      let score = String($(el).find('a > span.invenpoint').text());
    
      parsed.push({name, score});
    })
    
    return parsed;
    
  }
}
