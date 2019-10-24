/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    console.log(num);
    let str2num = {"1":"I", "5":"V", "10":"X", "50":"L", "100":"C", "500":"D", "1000":"M"};
    let ret = '';

    function getString(real_number, bracket){
        //bracket is 10 to the power
        let ret_string = '';
        let number = real_number / bracket;
        let count = number;
        let numString = bracket.toString();

        if(number === 4){
            //do 4
            ret_string = str2num[numString]+str2num[(bracket*5).toString()];
        }
        else if(number === 5){
            //do 5
            ret_string = str2num[(bracket*5).toString()];
        }
        else{
            //do others
            ret_string = str2num[numString].repeat(count);
        }

        return ret_string;
    }

    function getmoreString(real_number, bracket){
        //bracket = 100, 1000 , etc
        let ret_string= '';
        let number = real_number / bracket;
        let count = (number - 5)
        let numString = bracket.toString();

        if(number === 9){
            let tenNum = (10 * bracket).toString();
            ret_string = str2num[numString]+str2num[tenNum];
            //do 9
        }
        else{
            // do 10
            ret_string = str2num[(bracket*5).toString()] + str2num[numString].repeat(count)
        }
        return ret_string;
    }

    var current = 0;
    var mod_num = 10;
    
    var current_num = num.toString();
    console.log(current_num.length);
    var current_length = current_num.length-1;
    console.log('in the for loop');
    for(var i = 0; i < current_num.length; i++){
        console.log(current_num);
        let real_number;
        let number_bracket = 10 ** current_length;
        real_number = parseInt(current_num[i]) * number_bracket;
        console.log('here is: ',current_num[i]);
        if(parseInt(current_num[i]) > 5){
            console.log('number of get more string gets called should be none');
            //run more than 5
            ret += getmoreString(real_number/number_bracket, number_bracket);
        }
        else{
            console.log('here comes a lot');
            console.log(real_number, number_bracket);
            //run less than 5
            ret += getString(real_number, number_bracket);
        }
        
        current_length -= 1
    }

    console.log(ret);
    return ret;
};

intToRoman(1994)