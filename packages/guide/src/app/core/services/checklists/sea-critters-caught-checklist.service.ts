import { Injectable } from '@angular/core';
import { BaseChecklistService } from "./base-checklist.service";

@Injectable({
    providedIn: 'root'
})
export class SeaCrittersCaughtChecklistService extends BaseChecklistService {

    constructor() {
        super('sea-critters-caught')
    }
}
