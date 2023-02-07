import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.scss']
})
export class DetailsComponentComponent implements OnInit {

  id: any;
  title: any;
  description: any;
  image: any;
  data: any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')
    this.dataService.getDatabyid(this.id).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
    console.log(this.id);
  }
}
