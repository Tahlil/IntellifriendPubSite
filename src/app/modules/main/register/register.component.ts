import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }
  confirmPassErrMsg = "";
  noConfirmPassErr = true;
  noError = false;
  public validation = {
    test:true,
    CheckEmpty: (input) => input === "",
    UsernameValidate: (input) => input.length > 1, 
    UsernameErrMsg: "",
    UsernameNoErr: true,
    EmailValidate: (input) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input);
    }, 
    EmailErrMsg: "",
    EmailNoErr: true,
    PasswordValidate: (input) => input.length > 7, 
    PasswordErrMsg: "",
    PasswordNoErr: true
    
  }

  checkAllVaildity(e){
    console.log("hiiiiiiiiiiii"); 
    //console.log(this.validation.Username.errMsg);
    const inputFields = e.target.parentNode.getElementsByTagName('input');
    const userNameInput = inputFields[0].value, emailInput = inputFields[1].value, passInput = inputFields[2].value ,confirmPassInput = inputFields[3].value;
    const validUsername=this.userNameValidate(userNameInput), validEmail= this.emailValidate(emailInput), validPass =this.passValidate(passInput), validConfirmPass = this.confirmPassValidate(passInput, confirmPassInput);
    if(validUsername && validEmail && validPass  && validConfirmPass){
      // post
      e.target.setAttribute("type", "submit");
      console.log("success");
      this.noError = true;
    }
    return;
  }


  private userNameValidate(username):boolean {
    return this.validate("Username", username);
  }

  private emailValidate(email):boolean {
    console.log("start email validating");
    return this.validate("Email", email);
  }

  private passValidate(password):boolean {
    return this.validate("Password", password);
  }

  private confirmPassValidate(passInput, confirmPassInput):boolean {
    if(passInput !== ""){
      if(confirmPassInput === ""){
        this.confirmPassErrMsg = "Please retype password"
      }
      else if(passInput !== confirmPassInput){
        this.confirmPassErrMsg = "Password do not match"
      }
      else{
        this.noConfirmPassErr = true;
        this.confirmPassErrMsg = ""
        return true;
      }
     this.noConfirmPassErr = false;
     return false;
    }
    this.confirmPassErrMsg = "";
    this.noConfirmPassErr = true;
    return true;
  }

  private setErrorState(inputType:string, errMessage:string, noErr:boolean){
    this.validation[inputType+"ErrMsg"] = errMessage;
    this.validation[inputType+"NoErr"] = noErr;
    if(!noErr){
      console.log("There is an error");
    }
  }

  private validate(inputType:string, input:string):boolean{
    if(this.validation['CheckEmpty'](input)){
      this.setErrorState(inputType, inputType + " is required", false);
      return false;
    }
    else if(!this.validation[inputType+"Validate"](input)){
      console.log(inputType + " has an error.");

      this.setErrorState(inputType, inputType + " invalid", false);
      return false;
    }
    this.setErrorState(inputType, "", true);
    return true;
  }

  ngOnInit() {
  }

}
