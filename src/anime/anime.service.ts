import { HttpService } from "@nestjs/axios";
import {ForbiddenException, Injectable} from "@nestjs/common";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
@Injectable()
export class AnimeService {
    constructor(private http: HttpService) {}
    async animeNameSearch(animeName: any){
        const res = await axios({
            method: "GET",
            url: process.env.API_URL + `anime?q=${animeName}&sfw`
        }).catch(() => {
            throw new ForbiddenException("API not available")
        });
        console.log(process.env.API_URL + `anime?q=${animeName}&sfw`);
        const eventual = res.data?.data[0].title;
        console.log(eventual);
        return eventual;
    }

    async animePictureSearch() {
        return "Search anime by pic"
    }
}