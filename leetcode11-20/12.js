/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    console.log(num);
    let str2num = {"1":"I", "5":"V", "10":"X", "50":"L", "100":"C", "500":"D", "1000":"M"};
    let ret = '';

    function getString(number, bracket){
        //bracket is 10 to the power
        let ret_string = '';
        let count = number;
        let numString = bracket.toString();

        if(number === 4){
            //do 4
            ret += str2num[numString]+str2num[(bracket*5).toString()];
        }
        else{
            //do others
            ret += str2num[numString].repaet(count);
        }
        
        return ret_string;
    }

    function getmoreString(number, bracket){
        let ret_string= '';
        let count = (number - 5)

        if(number === 9){
            //do 9
        }
        else{
            // do 10
        }
        return ret_string;
    }

    var current = 0;
    var mod_num = 10;
    
    var current_num = num.toString();
    console.log(current_num.length);
    var current_length = current_num.length-1;

    for(var i = 0; i < current_num.length; i++){
        let real_number;
        let number_bracket = 10 ** current_length;
        real_number = int(current_num[i]) * number_bracket;
        
        if(int(current_num[i] > 5)){
            //run more than 5
            getmoreString(real_number/number_bracket, number_bracket);
        }
        else{
            //run less than 5
            getString(real_number, number_bracket);
        }
        
        current_length -= 1
    }
};

intToRoman(1234)