/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let adjacencyList = {};
    let ingredCount = new Map();

    for(let j = 0; j < ingredients.length; j++){    
        for(let i = 0; i < ingredients[j].length; i++){
            if(ingredients[j][i] in adjacencyList){
                adjacencyList[ingredients[j][i]].push(recipes[j]);
            }else{
                adjacencyList[ingredients[j][i]]= [recipes[j]];
            }
        }
        ingredCount.set(recipes[j],ingredients[j].length);
    }

    let ret = []
    
    while(supplies.length > 0){
        let popped = supplies.pop();
        if(popped in adjacencyList){
            for(let recipe of adjacencyList[popped]){
                let subtracted = ingredCount.get(recipe) - 1;
                if(subtracted === 0){
                    supplies.push(recipe);
                    ret.push(recipe)
                }
                ingredCount.set(recipe, subtracted);
            }
        }
    }
    return ret;


    
    // return ret;
};
