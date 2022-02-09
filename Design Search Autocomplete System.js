/**
 * @param {string[]} sentences
 * @param {number[]} times
 */

class Trie{
    constructor(){
        this.obj = {}
    }
    
    insert(word,idx=0){
        let current = this.obj;
        while(!(idx >= word.length)){
            if(!(word[idx] in current)){
                current[word[idx]] = new ListNode(word[idx]);
            }
            current[word[idx]].originals.push(word)
            current = current[word[idx]].children;
            idx += 1;
        }
    }
}

class ListNode{
    constructor(val){
        this.val = val;
        this.children = {};
        this.originals = [];
    }
}


var AutocompleteSystem = function(sentences, times) {
    this.scoreObj = {}
    this.currentWord = ""
    this.customSort = (arr, obj) => {
        let solution = [];
        arr.sort((a,b) => obj[b] - obj[a]);
        if(arr.length === 1){
            return arr;
        }
        for(let i = 0; i < Math.min(3, arr.length); i++){
            if(obj[arr[i]] !== obj[arr[i+1]]){
                solution.push(arr[i])
            }else{
                
                let customArr = [];
                let customIdx = i;
                while(customIdx < arr.length-1){
                    if(obj[arr[customIdx]] === obj[arr[customIdx+1]]){
                        //if the score same
                        if(customIdx === arr.length-2){
                            // add both
                            customArr.push(arr[customIdx])
                            customArr.push(arr[customIdx+1])
                        }else{
                            customArr.push(arr[customIdx])
                        }
                    }else{
                        customArr.push(arr[customIdx]);
                        customIdx += 1;
                        break;
                        
                    }
                    
                    customIdx += 1;
                }
                //now we have same score of customArrs;
                customArr.sort();//lex sort
                let curIdx = 0;
                let limit = 3 - solution.length;
                while(curIdx < customArr.length && solution.length < 3){
                    solution.push(customArr[curIdx])
                    curIdx += 1;
                    i += 1;
                }
                i-=1;
                
            }
        }
        return solution
    }
    let prefixObj = {};
    let prefixKeys = [];
    let tree = new Trie();
    
    for(let i = 0; i < sentences.length; i++){
        // trie building
        tree.insert(sentences[i]);
        
        this.scoreObj[sentences[i]] = times[i]
        if(sentences[i][0] in prefixObj){
            prefixObj[sentences[i][0]].push(sentences[i]);
        }else{
            prefixKeys.push(sentences[i][0]);
            prefixObj[sentences[i][0]] = [sentences[i]];
        }
    }
    
    this.originalTree = tree;
    this.current = this.originalTree.obj;
    
};

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    if(c === '#'){
        if(!(this.currentWord in this.scoreObj)){
            this.scoreObj[this.currentWord] = 1;
            this.originalTree.insert(this.currentWord);
        }else{
            this.scoreObj[this.currentWord] += 1;
        }
        
        this.currentWord = "";
        this.current = this.originalTree.obj;
        return []
    }else{
        this.currentWord += c;
        if(c in this.current){
            let solution = this.current;
            this.current = this.current[c].children;
            return this.customSort(solution[c].originals, this.scoreObj)
        }else{
            this.current = {};
        }
        return [];
    }
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */
