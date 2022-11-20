import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {

  contactForm!:FormGroup;



  constructor(private readonly fb:FormBuilder) {



  }

  ngOnInit(): void {

    this.contactForm= this.initForm();
    this.onPathValue();
    this.onSetValue();
  }

  onPathValue():void{
    this.contactForm.patchValue({name:'Alan'})
  }

  onSetValue():void{
    this.contactForm.setValue({comment:'Un comentario...'})
  }

  onSubmit():void{
    console.log('Form ->');
  }

  initForm():FormGroup{
   return this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      checkAdult: ['',[Validators.required]],
      department: [''],
      comment: ['',[Validators.required]],
    })
  }

}
