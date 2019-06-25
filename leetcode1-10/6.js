var convert = function(s, numRows) {
    //num rows
    let vertical = (numRows-2)*2+2
    var arr = Array(numRows).join(".").split(".");
    let start = 0;

    console.log(arr)

    for(let i = 0; i<s.length; i+=vertical){
        start = i
        let arr_index = 0;
        arr[arr_index] += s[i]
        
        for(let j = vertical-1; j>0; j--){//j>i needs to be defined
            arr_index += 1;
            start+=1;
            if(arr_index == numRows){
                break;
            }
            
            if(start > s.length){
                break;
            }
            if (start == j){
                arr[arr_index] = s[start];
                break;
            }
            //try and except for the last loop - kinda long but whatever
            try{
                if(s[start]==undefined){
                    continue
                }
                
                console.log('here is b?')
                console.log(s[start])
                console.log(s[start+j-arr_index])
                console.log(start, j)
                console.log(start+j, s.length);//what if there is undefined, then don't add to the string
                
                arr[arr_index]+=s[start];//this needs to be fixed to pass the test
                //this needs to be fixed
                if(arr_index == numRows-1){
                    continue
                }

                if(start+j <= s.length){//changed to <= from <
                    arr[arr_index] += s[start+j-arr_index];
                }
            }
            finally{
                continue;
            }
            //this needs to be done
        }
        //console.log(arr);
    }
    //outer for loop of num Rows and each for loop inside should have 
    //for loop through vertical number and att it to the return string
    //after the first loop, 
    return arr.join('');
};

console.log(convert("ABCDE",4))//PAHNAPLSIIGYI, PINALSIGYAHRPI

//ABCD 3
//ABCDE 4

//p   a   h   n
//a p l s i i g
//y   i   r