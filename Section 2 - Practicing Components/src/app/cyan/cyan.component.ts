import { Component } from "@angular/core";

@Component({
    selector:'cyan-component',
    templateUrl: './cyan.component.html',
    styleUrls: ["./cyan.component.css"]
})
export class CyanComponent {
    color: String = "cyan";
}