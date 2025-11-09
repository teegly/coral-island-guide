import { Injectable } from '@angular/core';
import { BaseChecklistService } from "./base-checklist.service";

@Injectable({
    providedIn: 'root'
})
export class FishCaughtChecklistService extends BaseChecklistService {

    constructor() {
        super('fish-caught')
    }
}
