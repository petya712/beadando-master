import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  categories: Category[];

  newCategoryTitle: string;

  constructor(private categoryService: CategoryService) { }

  //async ngOnInit() {
    //this.categories = await this.categoryService.getAll();
  //}
ngOnInit(): void {
  this.categoryService.getAll().subscribe((category)=>this.categories = category);
}


   async createCategory() {
     const newCategory = await this.categoryService.createCateg({
       id: null,
       title: this.newCategoryTitle
     });
     this.categories.push(newCategory);
  }

  

  async deleteCategory(id: number) {
    await this.categoryService.deleteCateg(id);
    this.categoryService.getAll().subscribe((category)=>this.categories = category);
  }

}
