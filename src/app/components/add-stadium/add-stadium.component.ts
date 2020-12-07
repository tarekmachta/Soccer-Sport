import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  stadium: any = {};
  stadiumForm: FormGroup;
  
  constructor(private formbuilder: FormBuilder, private stadiumService: StadiumService, private router: Router) { }

  ngOnInit() {
    this.stadiumForm = this.formbuilder.group({
      name: [''],
      country: [''],
      capacity: ['']
    
    })
  }

  addStadium() {
    console.log('this is my stadium', this.stadium);
    this.stadiumService.addStadium(this.stadium).subscribe(   
      () => {
        console.log('Stadium added successfully');
        this.router.navigate(['admin']);
      }
    )
  }
 

}
