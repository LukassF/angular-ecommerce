import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "eCommerce";

  ngOnInit(): void {
    // window.open("https://ngecommerce.onrender.com/api/clothes", "_blank");
  }
  openServer() {
    window.open("https://ngecommerce.onrender.com/api/clothes", "_blank");
    if (document.getElementById("alert")) {
      document.getElementById("alert")!.style.opacity = "0";
      setTimeout(() => {
        document.getElementById("alert")!.style.display = "none";
      }, 500);
    }
  }
}
