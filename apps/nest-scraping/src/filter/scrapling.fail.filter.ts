import { HttpException } from '@nestjs/common';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { ScrapingFailException } from '@scraper/exception/scraping.fail.exception';
import { FileService } from '@scraper/modules/file/file.service';

@Catch(ScrapingFailException)
export class ScrapingFailFilter implements ExceptionFilter {
  constructor(private readonly fileService: FileService){

  }
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    // this.fileService.makeFile('storage/file/history/'+this.logType,{
    //   total: history.total + 1,
    //   success: history.success + 1,
    //   fail : history.fail,
    //   startDate: startTime,
    //   endDate: endTime,
    // });

    response.status(status)
    .json({
      statusCode: status,
      timestamp: new Date().toISOString()
    });

  }
}
