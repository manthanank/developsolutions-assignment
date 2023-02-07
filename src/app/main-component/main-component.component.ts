import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  items: any;
  itemsbyid: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.items = data;
    })

  }
  showDetails(item:any) {
    this.router.navigate(['/details/', item.id]);
  }
}
