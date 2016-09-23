import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo-finished',
    styles: [`.lessugly { font-style:oblique; }`],
    template: `
    <div class="lessugly">
    Danke für die Aufmerksamkeit! Fragen?
    </div>
    `
})
export class FinishComponent {}
