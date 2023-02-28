import { HttpService } from "@nestjs/axios";
import {ForbiddenException, Injectable} from "@nestjs/common";
import axios from "axios";
import * as dotenv from "dotenv";
import {notFound, regSyn, regSynF} from "../../constants/anime.constants";
import * as process from "process";
dotenv.config();
@Injectable()
export class AnimeSearchNameService {
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
        let synopsis = res.data?.data[0]?.synopsis
        if (synopsis != undefined) {
            let mutSynopsis = synopsis.replace(regSyn, "")
            let resSynopsis = mutSynopsis.replace(regSynF, "")
            // console.log(res.data?.data[0]?.images?.jpg?.image_url);
            const img = res.data?.data[0]?.images?.jpg?.image_url
            const eventual = `Title: ${res.data?.data[0].title}\r\nStatus: ${res.data?.data[0].status}\r\nRelease date: ${res.data?.data[0].aired.string}\r\nEpisodes: ${res.data?.data[0].episodes}\r\nGrade: ${res.data?.data[0].score}\r\nSynopsis: ${resSynopsis}\r\n${img}`
            console.log(eventual);
            return eventual;
        } else {
            return notFound;
        }
    }
}