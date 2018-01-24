import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


  productList:any[]
  productCategory = ["All Category", "Drama", "Adventure", "Mystery", "Travel"].sort()
  productTotal = 0
  category

  constructor(private http: Http, private route: Router, private actroute: ActivatedRoute) { 
    this.actroute.queryParams.subscribe(params => {
      this.category = params['category'];
      console.log(this.category); // Print the parameter to the console. 
      this.onChangeParam()
  });
  }

  ngOnInit() {
    this.loadProductList()  

  }

  loadProductList() {

    if(this.category != undefined){
      this.onChangeParam()
    }else{
      this.http.get("http://localhost:3000/api/product")
      .subscribe(
      result => {
        this.productList = result.json();
        this.productTotal= result.json().length
        console.log(this.productList);
      },
      error => {
        console.log("Get Productlist error");
      }
      )
    }
    
  };

  onChangeParam(){

    if(this.category == undefined){
      this.loadProductList()
    }else{
      this.http.get("http://localhost:3000/api/product?category="+this.category)
      .subscribe(
      result => {
        this.productList = result.json();
        this.productTotal= result.json().length
        console.log(this.productList);
      },
      error => {
        console.log("Get productList error");
      }
      )
    }
    
  }

  //untuk remove category duplicate

  remove_duplicates(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    arr = [];
    for (let key in obj) {
        arr.push(key);
    }
    return arr;
}

}
