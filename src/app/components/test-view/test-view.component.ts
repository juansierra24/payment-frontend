import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {

  constructor() { 
    console.log("funciona");
  }

  ngOnInit(): void {
    console.log("funciona");
  }

}
