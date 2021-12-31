import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RankDocument = Rank & Document;

@Schema()
export class Rank{
    @Prop()
    id: number;

    @Prop()
    gameName: string;

    @Prop()
    score: string;
}

export const RankSchema = SchemaFactory.createForClass(Rank);