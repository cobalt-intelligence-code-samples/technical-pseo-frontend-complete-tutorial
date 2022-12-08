import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {
  public state = '';
  public zipcode = '';
  public zipcodeDetails: any = {};

  constructor(private api: ApiService,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('params', params);
      this.state = params['state'];
      this.zipcode = params['zipcode'];
    });

    this.api.getFullZipCodeData(this.state, this.zipcode).subscribe((data: any) => {
      console.log(data);
      this.zipcodeDetails = data;
    });
  }

}
