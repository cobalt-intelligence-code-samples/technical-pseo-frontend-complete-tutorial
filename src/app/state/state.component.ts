import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  public state = '';
  public zipcodes: string[] = [];

  constructor(private api: ApiService,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('params', params);
      this.state = params['state'];
      this.api.getZipcodesByState(params['state']).subscribe((data: any) => {
        console.log(data);
        // Create array of strings from zipcodes that are formatted like this '00000#1'. Remove the '#1' from the end of each string.
        // Remove duplicates from the array
        const zipcodes = data.map((zipcode: any) => zipcode.zipcode.slice(0, -2)).filter((value: any, index: any, self: any) => self.indexOf(value) === index);
        this.zipcodes = zipcodes;
      });
    });
  }

}
