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
                arr[arr_index]+=s[start];//this needs to be fixed to pass the test
                //this needs to be fixed
                if(arr_index == numRows-1){
                    continue
                }

                if(start+j < s.length){
                    arr[arr_index] += s[start+j-arr_index];
                }
            }
            finally{
                continue;
            }
            //this needs to be done
        }
        console.log(arr);
    }
    //outer for loop of num Rows and each for loop inside should have 
    //for loop through vertical number and att it to the return string
    //after the first loop, 
    return arr.join('');
};

console.log(convert("ABCD",3))//PAHNAPLSIIGYI, PINALSIGYAHRPI

//ABCD 3
//ABCDE 4