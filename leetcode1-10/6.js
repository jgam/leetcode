var convert = function(s, numRows) {
    //num rows
    let vertical = (numRows-2)*2+2
    var arr = Array(numRows).join(".").split(".");

    console.log(arr)
    for(let i = 0; i<s.length; i+=vertical){
        for(let j = vertical-1; j>i; j--){//j>i needs to be defined

        }
        s[i]
    }
    //outer for loop of num Rows and each for loop inside should have 
    //for loop through vertical number and att it to the return string
    //after the first loop, 
    return s;
};

console.log(convert("paypalishiring",3))//PINALSIGYAHRPI