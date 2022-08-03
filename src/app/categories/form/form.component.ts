import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() back = new EventEmitter();

  @Output() save = new EventEmitter<Category>();
  @Input() loading:Boolean=false;

//   categoryForm : any=new FormGroup({
//   id: new FormControl(''),
//   name: new FormControl('',[Validators.required,Validators.minLength(3)]),
//   description : new FormControl('')
// })
categoryForm : any = this.fb.group(
  {
    id:[''],
    name:['',[Validators.required, Validators.minLength(3)]],
    description:['']
  }
)

@Input() set category(category :Category){
  this.categoryForm.setValue(category);
}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
      console.log('Submit',this.categoryForm.value);

   //  this.save.emit(this.categoryForm.value);
}
onBack(){
  this.back.emit();
}

}
