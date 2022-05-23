import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  categories = [
    {
      name : "animal"
    },
    {
      name : "arrow"
    },
    {
      name : "bicycle"
    },
    {
      name : "boat"
    },
    {
      name : "bus"
    },
    {
      name : "car"
    },
    {
      name : "crane"
    },
    {
      name : "default"
    },
    {
      name : "helicopter"
    },
    {
      name : "motorcycle"
    },
    {
      name : "offroad"
    },
    {
      name : "person"
    },
    {
      name : "pickup"
    },
    {
      name : "plane"
    },
    {
      name : "scooter"
    },
    {
      name : "ship"
    },
    {
      name : "tractor"
    },
    {
      name : "train"
    },
    {
      name : "tram"
    },
    {
      name : "trolleybus"
    },
    {
      name : "truck"
    },
    {
      name : "van"
    }
  ];

  getCategories(){
    return this.categories;
  }
}
