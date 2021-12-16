import { HttpException, HttpService } from "@nestjs/common";
import { ScrapingFailException } from "src/exception/scraping.fail.exception";
import { FileService } from "./file/file.service";

export abstract class BaseService
{
  protected time: number;
  protected listUrl: string;
  protected detailUrl: string;
  protected logType: string;
  constructor(
    protected readonly httpService:HttpService,
    protected readonly fileService:FileService
  ){ }

  
}