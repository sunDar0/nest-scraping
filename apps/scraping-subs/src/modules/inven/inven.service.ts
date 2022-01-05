import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ranks, RanksDocument } from './entity/inven.rank.entity';

@Injectable()
export class InvenService {
  constructor(@InjectModel(Ranks.name) private readonly ranksModel: Model<RanksDocument>)
  {}

  async addInvenRank(data: Ranks)
  {
    return await new this.ranksModel({ranks:data}).save();
  }
  
}
