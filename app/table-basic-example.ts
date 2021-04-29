import { Component , ViewChild} from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

/**
 * @title Basic table
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  patientCategory: FormGroup;

  patientCategories=[{
    id:1,
    name:'name 1',
    description:'description 1'
  },{
    id:2,
    name:'name 2',
    description:'description 2'
  },{
    id:3,
    name:'name 3',
    description:'description 3'
  }]

  constructor(private fb: FormBuilder){}

  ngOnInit() {

		this.patientCategory = this.fb.group({
			patientCategory: [null, Validators.required]
		});

    const toSelect = this.patientCategories.find(c => c.id == 2);
      this.patientCategory.get('patientCategory').setValue(toSelect);
	}
}