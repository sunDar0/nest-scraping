export abstract class BaseScraping{
  constructor(private readonly url:string)
  {}

  abstract parsedData();
  
  abstract response();
}