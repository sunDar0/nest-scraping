import { HttpService, Injectable } from '@nestjs/common';
import { InvenScraping } from '@parser/inven.scraping';


export interface intefaceBaseScrapingService{
  scraping():any;
}

@Injectable()
export class InvenService implements intefaceBaseScrapingService{
  constructor(
    private readonly httpService: HttpService,
    private readonly invenScraping: InvenScraping
    )
  { }
  

  async scraping()
  {
    const response = await this.httpService.get('https://inven.co.kr').toPromise();
    await this.invenScraping.parsedData(response.data);
  }
}
