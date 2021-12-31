import { Injectable } from "@nestjs/common";
import { FileService } from "@scraper/modules/file/file.service";

import * as cheerio from "cheerio";

@Injectable()
export class InvenScraping {
  private $;
  constructor(private readonly fileService: FileService ){
  
  }

  checkLastUpdate()
  {
    let rank = this.fileService.hasFile('scraping/inven.rank', 1);
    
    return rank
  }
  
  
  
  async parsedData(data: any): Promise<any>
  {
    this.$ = cheerio.load(data);
    const rankElements = this.$('.menuGroup.openCritic > .rankBox > ul > li');
    
    return await this.parsedRankData(rankElements);
    
  }



  private async parsedRankData(baseData): Promise<rankDto[]>{
    let parsed:rankDto[] = [];
    let created = new Date().toISOString();
    baseData.each(async (idx:number, el)=>{
      let gameName = String(this.$(el).find('a > span.gameName').text());
      let score = String(this.$(el).find('a > span.invenpoint').text());
      let rankDto:rankDto = {
        rank:idx, 
        gameName, 
        score, 
        created
      };
      parsed.push(rankDto);
    })
    await this.fileService.makeFile('scraping/inven.rank', parsed);

    return parsed;
  }
}

export interface rankDto
{
  rank : number;
  gameName: string;
  score: string;
  created: string;
}