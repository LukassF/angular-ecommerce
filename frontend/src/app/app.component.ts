import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "eCommerce";

  ngOnInit(): void {
    window.open("https://ngecommerce.onrender.com/api/clothes", "_blank");
  }
}
