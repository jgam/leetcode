var ways = function(pizza, r) {
    if(r < 2){
        return r;
    }

    // create matrix
    let matrix = [];
    for(let i = pizza.length-1; i > -1; i--){
        let arr = [];
        let value = 0;
        for(let j = pizza[i].length-1; j > -1; j--){
            if(pizza[i][j] === '.'){
                // add 0
                if(i === pizza.length-1){
                    arr.unshift(value)
                }else{
                    arr.unshift(matrix[0][j] + value)
                }
            }else{
                // add 1
                value += 1;
                if(i=== pizza.length-1){
                    arr.unshift(value)
                }else{
                    arr.unshift(matrix[0][j] + value)
                }
            }
        }
        matrix.unshift(arr);
    }


    let visited = {};

    function dp(i,j,k){
        let key = [i,j,k].join(',,');
        if(key in visited){
            return visited[key];
        }

        if(matrix[i][j] === 0){
            return 0
        }

        if(k===0){
            return 1;
        }

        let ans = 0;

        //horizontal
        for(let x = i+1; x < pizza.length; x++){
            if(matrix[i][j] - matrix[x][j] > 0){
                ans += dp(x,j,k-1)
            }
        }

        //vertical
        for(let y = j+1; y < pizza[0].length; y++){
            if(matrix[i][j] - matrix[i][y] > 0){
                ans += dp(i,y,k-1);
            }
        }

        visited[key] = ans;
        return ans;
    }

    let ret = dp(0,0,r-1);
    return ret % (10**9 + 7);

};
