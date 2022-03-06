import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { IApps } from "../../models/apps.interfaces";

@Injectable()
export class AppsService {

    constructor(public http: HttpClient) {

    }

    findAll(): Observable<IApps> {
        const userId = 1;
        return this.http.get<IApps>(`${API_CONFIG.baseUrl}/apps?user=${userId}`);
    }


}