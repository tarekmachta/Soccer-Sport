import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  match: any = {};
  matchForm: FormGroup;
  imagePreview: any;

  constructor(private formbuilder: FormBuilder, private matchService: MatchService, private router: Router) { }

  ngOnInit() {
    this.matchForm = this.formbuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
      // image:['']

    })
  }

  addMatch() {
    console.log('this is my match', this.match);
    this.matchService.addMatch(this.match).subscribe(   //addMatch: fonction du service
      () => {
        console.log('Match added successfully');
        this.router.navigate(['admin']);
      }
    )
  }
  // multer
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.matchForm.patchValue({ image: file });
    this.matchForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}
