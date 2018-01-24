import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  productList:any[]
  productTotal = 0
  obj = <any>{};
  category
  productCategory = ["All Category", "Drama", "Adventure", "Mystery", "Travel"].sort()

  constructor(private http: Http, private actroute: ActivatedRoute) { 
    this.actroute.queryParams.subscribe(params => {
      this.category = params['category'];
      console.log(this.category); // Print the parameter to the console. 
  });
  }

  ngOnInit() {
    this.actroute.params.subscribe(params => {
      this.loadProductDetail(params['id'])
    })
  }

  loadProductDetail(id) {

    this.http.get("http://localhost:3000/api/product/"+id)
      .subscribe(
      result => {
        this.obj = result.json();
        console.log(this.obj)
      },
      error => {
        console.log("error")
      }
      )
  }

  

}
