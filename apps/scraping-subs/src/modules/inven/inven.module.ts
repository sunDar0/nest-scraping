import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Rank, RankSchema } from './entity/inven.rank.entity';
import { InvenService } from './inven.service';
import { InvenController } from './inven.controller';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Rank.name, schema: RankSchema}])
  ],
  providers: [InvenService],
  controllers: [InvenController]
})
export class InvenModule {}
