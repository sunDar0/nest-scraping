import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, Document } from "mongoose";

export type RankDocument = Ranks & Document;


class Rank {
    @Prop()
    rank: number;

    @Prop()
    gameName: string;

    @Prop()
    score: string;

    @Prop()
    created: string;
}

@Schema({
    collection: 'ranks',
})
export class Ranks {
    @Prop()
    created:Date;
    @Prop()
    ranks: Rank[]
}

export const RankSchema = SchemaFactory.createForClass(Ranks);