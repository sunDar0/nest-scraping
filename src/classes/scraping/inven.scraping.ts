import { Injectable } from "@nestjs/common";
import { BaseScraping } from "./base.scraping";

@Injectable()
export class InvenScraping extends BaseScraping{
  constructor(){
    super();
  }

  async parsedData(data):Promise<void>
  {
    this.$.load(data);
    const rankElements = this.$('.menuGroup.openCritic > .rankBox > ul > li');
    await this.parsedRankData(rankElements);
    
  }

  private async parsedRankData(baseData): Promise<rankDto[]>{
    let parsed:rankDto[] = [];
    
    baseData.each(async (idx, el)=>{
      let gameName = String(this.$(el).find('a > span.gameName').text());
      let score = String(this.$(el).find('a > span.invenpoint').text());
      let rankDto:rankDto = {gameName, score};
      parsed.push(rankDto);
    })
    
    return parsed;

  }
}


export interface rankDto
{
  gameName: string;
  score: string;
}