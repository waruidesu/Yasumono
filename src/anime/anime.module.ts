import { Module } from '@nestjs/common';
import {AnimeUpdate} from "./anime.update";
import {AnimeService} from "./anime.service";
import {HttpModule} from "@nestjs/axios";

@Module({
    imports:[HttpModule],
    providers:[AnimeUpdate, AnimeService]
})
export class AnimeModule {}
