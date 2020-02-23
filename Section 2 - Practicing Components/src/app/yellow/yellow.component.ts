import { Component } from "@angular/core";

@Component({
    selector:'yellow-component',
    templateUrl: './yellow.component.html',
    styleUrls: ["./yellow.component.css"]
})
export class YellowComponent {
    color: String = "yellow";

}