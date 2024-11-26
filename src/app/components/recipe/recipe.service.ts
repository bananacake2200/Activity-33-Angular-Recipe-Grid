import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeList: Recipe[] = [
    
    {
      recipeId: 1,
      name: 'Pancake',
      image: 'https://www.allrecipes.com/thmb/hB7uGW06pqyk6hApOfGxk5kG4SI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1-8fc3e06998fe4fe8b5f2ad6ba7e8ad46.jpg',
    },
    {
      recipeId: 2,
      name: 'Lemon Eton Mess',
      image: 'https://img.taste.com.au/UOkNsfUb/w720-h480-cfill-q80/taste/2020/08/5-ingredient-lemon-eton-mess-164715-2.jpg',
    },
    
    {
      recipeId: 3,
      name: 'Choc-Crackle Peanut Butter Cups',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aE_ZjNTQgJeEiApzwgUzzvM5L_r8oXDTwA&s',
    },
    {
      recipeId: 4,
      name: 'Choc-Crackle Peanut Butter Cups',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aE_ZjNTQgJeEiApzwgUzzvM5L_r8oXDTwA&s',
    },
    {
      recipeId: 5,
      name: 'Pancakes',
      image: 'https://www.allrecipes.com/thmb/hB7uGW06pqyk6hApOfGxk5kG4SI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1-8fc3e06998fe4fe8b5f2ad6ba7e8ad46.jpg',
    },
    {
      recipeId: 6,
      name: 'Lemon Eton Mess',
      image: 'https://img.taste.com.au/UOkNsfUb/w720-h480-cfill-q80/taste/2020/08/5-ingredient-lemon-eton-mess-164715-2.jpg',
    },
    {
      recipeId: 7,
      name: 'Pancakes',
      image: 'https://www.allrecipes.com/thmb/hB7uGW06pqyk6hApOfGxk5kG4SI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1-8fc3e06998fe4fe8b5f2ad6ba7e8ad46.jpg',
    },
    {
      recipeId: 8,
      name: 'Choc-Crackle Peanut Butter Cups',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aE_ZjNTQgJeEiApzwgUzzvM5L_r8oXDTwA&s',
    },
    
  ];

  getRecipe() {
    return this.recipeList;
  }
}
