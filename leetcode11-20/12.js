/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    console.log(num);
    let str2num = {"1":"I", "5":"V", "10":"X", "50":"L", "100":"C", "500":"D", "1000":"M"};
    let ret = '';

    function getString(number){
        let ret_string = '';
        
        return ret_string;
    }

    function getmoreString(number){
        let ret_string= '';

        return ret_string;
    }

    var current = 0;
    var mod_num = 10;
    
    var current_num = num.toString();
    console.log(current_num.length);
    var current_length = current_num.length-1;

    for(var i = 0; i < current_num.length; i++){
        let real_number;
        real_number = int(current_num[i]) * current_length;
        
        if(int(current_num[i] > 5)){
            //run more than 5
        }
        else{
            //run less than 5
        }
        
        current_length -= 1
    }
};

intToRoman(1234)