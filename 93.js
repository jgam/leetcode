/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ret = [];
    let current=[];
    backtrack(s,1);
    function backtrack(currentStr,curCount){
        if(currentStr.length === 0){
            return;
        }
        if(curCount===4){
            //termination needs to be checked with leading 0s
            if(currentStr.length!==1 && currentStr[0]==='0'){
                return;
            }
            if(parseInt(currentStr) <= 255){
                current.push(currentStr);
                ret.push(current.join('.'));
                current.pop();
            }
        }
        if(curCount < 4){
            for(let i = 1; i < 4; i++){
                let currentString = currentStr.substring(0,i);
                // check leading zeros
                if(i!==1 && (currentString.length!=="1" && currentString[0]==="0")){
                    continue;
                }

                //check value bigger than 255
                if(parseInt(currentString) > 255){
                    continue;
                }

                current.push(currentString);
                backtrack(currentStr.substring(i),curCount+1);
                current.pop();
            }
        }
    }
    return ret;
};
