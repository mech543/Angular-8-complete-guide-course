import { Component } from "@angular/core";

@Component({
    selector:'purple-component',
    templateUrl: './purple.component.html',
    styleUrls: ["./purple.component.css"]
})
export class PurpleComponent {
    color: String = "purple";

}