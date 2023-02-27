import { HttpService } from "@nestjs/axios";
import {ForbiddenException, Injectable} from "@nestjs/common";
import axios from "axios";
import * as dotenv from "dotenv";
import {regSyn, regSynF} from "./constants/anime.constants";
dotenv.config();
@Injectable()
export class AnimeService {
    constructor(private http: HttpService) {}
    async animeNameSearch(animeName: any){
        const res = await axios({
            method: "GET",
            url: process.env.API_URL_J + `anime?q=${animeName}&sfw`
        }).catch(() => {
            throw new ForbiddenException("API not available")
        });
        console.log(process.env.API_URL_J + `anime?q=${animeName}&sfw`);
        // const themes = res.data?.data[0].themes[0].name
        // console.log(themes)
        let synopsis = res.data?.data[0].synopsis
        let mutSynopsis = synopsis.replace(regSyn, "")
        let resSynopsis = mutSynopsis.replace(regSynF, "")
        // console.log("new syn:" + resSynopsis);
        const eventual = `Title: ${res.data?.data[0].title}\r\nStatus: ${res.data?.data[0].status}\r\nRelease date: ${res.data?.data[0].aired.string}\r\nEpisodes: ${res.data?.data[0].episodes}\r\nSynopsis: ${resSynopsis}\r\n`
        console.log(eventual);
        return eventual;
    }

    async animePictureSearch() {
        return "Search anime by pic"
    }
}