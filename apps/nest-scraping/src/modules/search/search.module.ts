import { Module } from '@nestjs/common';
import { FileModule } from '../file/file.module';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({
  imports:[FileModule],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
