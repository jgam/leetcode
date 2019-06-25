var convert = function(s, numRows) {
    //exception of one row
    if(numRows==1){
        return s;
    }

    //getting loop addition variables
    let vertical = (numRows-2)*2+2
    var arr = Array(numRows).join(".").split(".");
    let start = 0;

    //for loop for starting the first or top row loop
    for(let i = 0; i<s.length; i+=vertical){
        start = i
        let arr_index = 0;
        arr[arr_index] += s[i]
        
        //starting the remaining arr_index rows loop
        for(let j = vertical-1; j>0; j--){//the looping range isn't important because it will break when arr_index == numRows
            arr_index += 1;
            start+=1;

            //check the break
            if(arr_index == numRows){
                break;
            }
            
            //check the break (not important, just in case)
            if(start > s.length){
                break;
            }

            //the last row needs to be added
            if (start == j){
                arr[arr_index] = s[start];
                break;
            }

            //try and except for the last loop - kinda long but whatever
            try{
                //first undefined then don't add
                if(s[start]==undefined){
                    continue
                }
                
                //adding
                arr[arr_index]+=s[start];
                
                //arr_index not to exceed the arr_index
                if(arr_index == numRows-1){
                    continue
                }
                
                //important check of whether the second letter should be added or not
                if(s[start+j-arr_index] == undefined){
                   continue
                }
                else{
                   arr[arr_index] += s[start+j-arr_index];
                }
            }
            finally{
                continue;
            }
        }
    }
    //joining the array into a string
    return arr.join('');
};

console.log(convert("PAYPALISHIRING",3))//PAHNAPLSIIGYI, PINALSIGYAHRPI