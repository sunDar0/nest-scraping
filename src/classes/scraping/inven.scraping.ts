import { Injectable } from "@nestjs/common";
import { FileService } from "src/modules/file/file.service";

import * as cheerio from "cheerio";
import { every } from "rxjs/operators";
import { of } from "rxjs";

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
  
  
  
  async parsedData(data): Promise<void>
  {
    this.$ = cheerio.load(data);
    const rankElements = this.$('.menuGroup.openCritic > .rankBox > ul > li');
    console.log(rankElements);
    await this.parsedRankData(rankElements);
    
  }



  private async parsedRankData(baseData): Promise<void>{
    let parsed:rankDto[] = [];
    
    baseData.each(async (idx, el)=>{
      let gameName = String(this.$(el).find('a > span.gameName').text());
      let score = String(this.$(el).find('a > span.invenpoint').text());
      let rankDto:rankDto = {gameName, score};
      parsed.push(rankDto);
    })
    await this.fileService.makeFile('scraping/inven.rank', parsed);
  }
}

export interface rankDto
{
  gameName: string;
  score: string;
}