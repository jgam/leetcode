var generateParenthesis = function(n) {
    //just like fibonacci
    //4 -> 5
    let current = 0;
    var result = []
    var array = []

    var stack_num = 0;
    var stack_length = n * 2;

    var current_string = '(';

    function generating(stack_num, added_string, current_string){
        if (stack_num < 0){
            return null;
        }
        else{
            if(stack_num === 0 && current_string.length() === n*2){
                array.add(current_string);
            }
            else if(stack_num > 0){
                current_string += added_string;
                generating(stack_num+1, '(', current_string);
            }
            else{
                current_string += added_string;
                generating(stack_num+1, '(', current_string);
                generating(stack_num-1, ')', current_string);
            }
        }
    }

    generating()


    
    console.log(array)
    
    

};

console.log(generateParenthesis(3));