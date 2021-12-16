// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor(){
		this.stack = [];
		this.minmaxStack = [];
	}
  peek() {
    // Write your code here.
		return this.stack[this.stack.length-1];
  }

  pop() {
    // Write your code here.
		
		let poppedNum = this.stack.pop();
		
		let idx = this.findValue(poppedNum);
		console.log('poppedNum', poppedNum, idx, this.minmaxStack)

		this.minmaxStack.splice(idx,1);
		console.log('popped', this.stack, this.minmaxStack)
		
		return poppedNum;
  }

  push(number) {
    // Write your code here.
		this.stack.push(number);
		this.pushSort(number);
		
		return;
  }

  getMin() {
    // Write your code here.
		console.log('current arr', this.minmaxStack)
		return this.minmaxStack[0];
  }

  getMax() {
    // Write your code here.
		return this.minmaxStack[this.minmaxStack.length-1]
  }
	
	findValue(num){
		//finds value in logN of minmaxStack
		let start = 0;
		let end = this.minmaxStack.length-1;
		let mid = Math.floor((end+start)/2);

		while(end >=start){
				mid = Math.floor((end+start)/2);
				if(this.minmaxStack[mid] === num){
						return mid
				}else if(this.minmaxStack[mid] >= num){
						end = mid-1;
				}else{
						start = mid + 1;
				}
		}

		if(this.minmaxStack[mid] < num){
				return mid+1;
		}else{
				return mid;
		}
	}
	pushSort(num){
		//push in sorted manner to this.minmaxStack
		let curHalfIdx = this.findValue(num);
		if(this.minmaxStack.length === curHalfIdx){
			this.minmaxStack.push(num)
		}else{
			this.minmaxStack.splice(curHalfIdx,0,num)
		}
		return;
	}
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
