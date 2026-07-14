import { CommonModule } from '@angular/common';
import { Component, input, NgModule, twoWayBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tutorialservice } from '../../services/tutorialservice';
import { provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tutorial',
  imports: [CommonModule, FormsModule],
  templateUrl: './tutorial.html',
  styleUrl: './tutorial.scss',
})
export class Tutorial {
  title = 'Tutorial'
  class1 = 'Interpolation'
  name = 'Bunny'
  public siteUrl = window.location.href;
  employeeData: any;
  greetUser() {
    return "Hello " + this.class1;
  }


  class2 = "property binding"
  myId = "test Id"
  isDisabled = "false"


  class3 = "class binding"
  successclass = "text-success"
  haserror = true
  color_b = "blue"
  align = "center"


  class4 = "style binding"
  stylebinding = {
    'text-align': this.align,
    'background-color': this.color_b
  }
  classbinding = {
    'text-success': false,
    'text-special': this.haserror
  }


  highlightcolor = "orange"
  titlestyles = {
    color: "blue",
    fontStyle: "italic"
  }

  class5 = "event binding"
  greeting = ""
  onclick() {
    console.log('welcome to event binding')
    this.greeting = "welcome to event binding";
  }


  class6 = "template reference variables"
  logmessage() {
    console.log()
  }


  class7 = "Two Way Binding"
  _name = "";


class8="structural directives";
displayname="true";


class9="switch directive";
color="red"

class10="for directive"
colors=["blue","green","red","yellow"];


class11="component interaction"
_title='app'
Name="dss"

class12="serviecs"
employee:any[]=[];
constructor(private employeeService:Tutorialservice){ }
class13="http"
ngOnInit(){
this.employeeService.GetEmployeehttp().subscribe((data => this.employee = data))  
}

// getTheEmployeeData(){
//  this.employeeData= this.employeeService.getEmployee();
//  console.log(this.employeeData,94)
// }

}