import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss'],
})
export class BasicDetailsComponent implements OnInit {
  BasicDetails: FormGroup; //naming the form
  submitted:boolean=false;
      //adding the form builder service to the constructor
      constructor(private FBObject:FormBuilder) 
      {

       }

  ngOnInit() {
    //making use of form builder
this.BasicDetails=this.FBObject.group({
  Employee_Name:[null,[Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
  Employee_Gender:[null,[Validators.required]],
  Employee_Phone:[null,[Validators.required,Validators.maxLength(11),Validators.minLength(10),Validators.pattern("[0-9]")]],
  Employee_Address:['',],
  Employee_Type:[null,[Validators.required]]
})    

  }
  
  
  // convenience getter for easy access to form fields
  //get f() { return this.BasicDetails.controls; }

  onSubmit(){ 
    this.submitted=true;
    alert("Submit is clicked");
    
    let x=JSON.stringify(this.BasicDetails.value); //converting to JSON string
    alert("Submitted"+x);
    
   
    if(this.BasicDetails.value.invalid){
      alert("invalid")
      return ;


    }
    else{
      alert("Success");
    }
  







  }

  Reset(){
    this.submitted=false;
alert("rest clicked "+this.submitted);

this.BasicDetails.reset();
this.BasicDetails.clearValidators();
//this.BasicDetails.cle
  }
  
}

