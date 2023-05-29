(function main() {
    console.log('Hello LeetCoder');

    let arr = [];


    for(let i = 0; i < 3; i++){
        let current = [];
        for(let j = 0; j < 5; j++){
            current.push("white");
        }
        arr.push(current);
    }

    console.log(arr);

    let queries = ["v 1 2", "x 2 2", "v 1 2", "> 2 1", "x 2 3", "> 2 1", "< 2 0"];

    let ret = [];
    for(let query of queries){
        let [operation, x, y] = query.split(" ");
        x = parseInt(x);
        y = parseInt(y);

        if(operation === "v"){
            //code
            // x, y
            let pushed = false;
            console.log(x,y, arr.length)
            for(let i = x+1; i < arr.length; i++){
                // 1,2,3....
                if(arr[i][y] === "white"){
                    ret.push([i,y]);
                    pushed = true;
                    break;
                }
            }

            if(!pushed){
                ret.push([-1,-1]);
            }
        }else if(operation === "<"){
            //code
            let pushed = false;
            for(let i = y-1; i > -1; i--){
                // 1,2,3....
                if(arr[x][i] === "white"){
                    ret.push([x,i]);
                    pushed = true;
                    break;
                }
            }

            if(!pushed){
                ret.push([-1,-1]);
            }
        }else if(operation === ">"){
            //code
            let pushed = false;
            for(let i = y+1; i < arr[0].length; i++){
                // 1,2,3....
                if(arr[x][i] === "white"){
                    ret.push([x,i]);
                    pushed = true;
                    break;
                }
            }

            if(!pushed){
                ret.push([-1,-1]);
            }
        }else if(operation === "^"){
            let pushed = false;
            for(let i = x-1; i > -1; i--){
                // 1,2,3....
                if(arr[i][y] === "white"){
                    ret.push([i,y]);
                    pushed = true;
                    break;
                }
            }

            if(!pushed){
                ret.push([-1,-1]);
            }
        }else{
            // color
            arr[x][y] = "black";
        }
    }

    console.log(ret);
}());
