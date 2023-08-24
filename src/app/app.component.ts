import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl , Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm=new FormGroup({

      firstname: new FormControl(null,[ Validators.required, this.noSpaceAllowed]),
      lastname :  new FormControl(null, [Validators.required,this.noSpaceAllowed]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(null),
      country: new FormControl(null),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required)
        
      ])

    });
  }
  onSubmit(){
    console.log(this.reactiveForm);
  }

  noSpaceAllowed(control: FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {'noSpaceAllowed': true}
    }
    return null;

  }
}
