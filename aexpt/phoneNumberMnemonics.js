function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
	const numAlphabets = {
		'2' : ['a','b','c'],
		'3' : ['d','e','f'],
		'4' : ['g','h','i'],
		'5' : ['j','k','l'],
		'6' : ['m','n','o'],
		'7' : ['p','q','r','s'],
		'8' : ['t','u','v'],
		'9' : ['w','x','y','z'],
		'1' : ['1'],
		'0' : ['0'],
	}
	
	console.log(phoneNumber)
	
	let solution = [];
	
	phoneNumberHelper(numAlphabets, phoneNumber, 0,"",solution)

  return solution
}

function phoneNumberHelper(curObj, phoneNumber, curIdx, curVals, solution ){
	if(curIdx === phoneNumber.length){
		solution.push(curVals);
	}else{
		for(let i = 0; i < curObj[phoneNumber[curIdx]].length; i++){
			phoneNumberHelper(curObj, phoneNumber, curIdx + 1, curVals + curObj[phoneNumber[curIdx]][i], solution)
		}
	}
}


// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
