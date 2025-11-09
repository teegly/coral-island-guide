import { Injectable } from '@angular/core';
import { BaseChecklistService } from "./base-checklist.service";

@Injectable({
    providedIn: 'root'
})
export class InsectsCaughtChecklistService extends BaseChecklistService {

    constructor() {
        super('insects-caught')
    }
}
