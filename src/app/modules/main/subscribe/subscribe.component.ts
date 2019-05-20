import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.scss"]
})
export class SubscribeComponent implements OnInit {
  constructor() {}
  errorMessage = "";
  noError = false;

  ngOnInit() {}

  showPopup(){
    this.noError = true;
    console.log($('input')[0]);
    $('input')[0].value = "";
  }

  subscribe(e) {
    const inputField = e.target.previousSibling;
    if (this.checkValidity(inputField)) {
      console.log("this happens");
      const s = document.querySelector(".Subscribe");
      e.preventDefault();
      s.classList.toggle("Subscribe--loading");
      setTimeout(() => {
        s.classList.remove("Subscribe--loading");
        s.classList.toggle("Subscribe--complete");
      }, 2000);
      setTimeout(() => {
        $("#myModal").modal("hide");
        s.classList.remove("Subscribe--complete");
        inputField.value = "";
      }, 5000);
      this.noError = true;
    } else {
      this.showInvalid(inputField);
      this.noError = false;
    }
    console.log("error message: " + this.errorMessage);
  }

  private checkValidity(inputField): boolean {
    const typedEmail = inputField.value;
    if (typedEmail === "") {
      this.updateError("Please type your email");
      return false;
    } else if (this.validateEmail(typedEmail)) {
      this.updateError("");
      return true;
    }
    this.updateError("Not a valid email");
    return false;
  }

  private updateError(msg){
    this.errorMessage = msg;
  }

  private validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  private showInvalid(inputField) {
    inputField.classList.add("bounce");
    setTimeout(function() {
      inputField.classList.remove("bounce");
    }, 1000);
  }
}
