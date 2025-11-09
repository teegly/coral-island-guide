import { Component, input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

export interface ItemStatusConfig {
  isInMuseum: boolean;
  isInOfferings: boolean;
  isCaught: boolean;
}

@Component({
    selector: 'app-item-status-badges',
    templateUrl: './item-status-badges.component.html',
    styleUrls: ['./item-status-badges.component.scss'],
    imports: [
        MatTooltip
    ]
})
export class ItemStatusBadgesComponent {
    readonly status = input.required<ItemStatusConfig>();
}
