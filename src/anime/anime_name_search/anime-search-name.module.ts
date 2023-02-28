import { Module } from '@nestjs/common';
import {AnimeSearchNameUpdate} from "./anime-search-name.update";
import {AnimeSearchNameService} from "./scenes/anime-search-name.service";
import {HttpModule} from "@nestjs/axios";
import {AnimeSearchNameScene} from "./scenes/anime-search-name.scene";

@Module({
    imports:[HttpModule],
    providers:[AnimeSearchNameUpdate, AnimeSearchNameService,AnimeSearchNameScene]
})
export class AnimeSearchNameModule {}
