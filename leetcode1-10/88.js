var myAtoi = function(str){
    str = str.trim()
//    var regex_negative = new RegExp("^[0-9]*");
    var regex_negative = /^[0-9]*/;
    var regex_negative = /[0-9]/;

    console.log(regex_negative.exec('123'))
    console.log(regex_negative.text('123'));
    
    if (str[0] == "-"){
        //this is negative num
    }
    else{
        //this is positive num
    }
    for (let i = 0; i < str.length; i++){
        return 0;
    }
}