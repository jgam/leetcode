var maximumBobPoints = function(numArrow, aliceArrows) {

    let newArr = []
    for(let i = 0; i < 12; i++){
        newArr.push(0)
    }
    
    let solution = dfs(11, numArrow, 0, newArr)
    console.log(solution[0])
    return solution[1]
    
    function dfs(curSection, numArrows, curScore, curArr){
        if(curScore ===43){
            console.log(numArrows,curSection, curArr)
        }
        
        
        if(numArrows === 0){
            return [curScore, curArr]
        }
        
        if(curSection === 0){
            // console.log('****', curScore,numArrows,curSection, curArr)
            let newArr = []
            for(let i = 0; i < curArr.length; i++){
                newArr.push(curArr[i])
            }
            newArr[0] = numArrows
            return [curScore, newArr];
        }
        
        
        
        
        
        if(aliceArrows[curSection] >= numArrows){
            return dfs(curSection-1, numArrows, curScore, curArr)
        }else{
            // take this section score or move on
            curArr[curSection] = aliceArrows[curSection] + 1;
            let first = dfs(curSection-1, numArrows-curArr[curSection], curScore+curSection,curArr);
            let firstArr = [];
            for(let i = 0; i < first[1].length;i++){
                firstArr.push(first[1][i]);
            }
            curArr[curSection] = 0;
            let second = dfs(curSection-1, numArrows, curScore, curArr);
            
            if(first[0] > second[0]){
                return [first[0], firstArr]
            }else{
                return [second[0], second[1]]
            }
        }
    }
};
