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
            if (start == j){
                arr[arr_index] = s[start];
                break;
            }
            //try and except for the last loop - kinda long but whatever
            try{
                arr[arr_index]+=s[start];
            }
            finally{
                continue;
            }

            try{
                arr[arr_index]+=s[start+j];
            }
            finally{
                continue;
            }

            

        }
        console.log(arr);
    }
    //outer for loop of num Rows and each for loop inside should have 
    //for loop through vertical number and att it to the return string
    //after the first loop, 
    return s;
};

console.log(convert("paypalishiring",3))//PAHNAPLSIIGYI, PINALSIGYAHRPI