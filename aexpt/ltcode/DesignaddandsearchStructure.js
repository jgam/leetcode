
var TrieNode = function(){
    this.key = new Map();
    this.isEnd = false;
}

var WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word, node=this.root) {
    if(word.length === 0){
        node.isEnd = true;
        return;
    }else if(!node.key.has(word[0])){
        node.key.set(word[0], new TrieNode());
        return WordDictionary.prototype.addWord(word.substr(1), node.key.get(word[0]));
    }else{
        return WordDictionary.prototype.addWord(word.substr(1), node.key.get(word[0]));
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, node=this.root) {
    if(word.length ===0){
        return node.isEnd;
    }else if(word[0] === "."){
        // return WordDictionary.prototype.search(word.substr(1), node.key.get(word[0]))

        for(let eachKey of node.key.keys()){
            if(WordDictionary.prototype.search(word.substr(1), node.key.get(eachKey))){
                return true
            }
        }
        return false;
    }else if(!node.key.has(word[0])){
        return false
    }else{
        //node has
        return WordDictionary.prototype.search(word.substr(1), node.key.get(word[0]))
    }
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
