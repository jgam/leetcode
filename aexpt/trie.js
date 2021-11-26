
class Node {
  constructor(ch) {
    this.val = ch;
    this.children = new Map();
    this.isEnd = false;
  }
}

var Trie = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curIndex = 0;
    let curHead = this.root;
    
    while(curIndex < word.length){
        if(curHead.children.has(word[curIndex])){
            curHead = curHead.children.get(word[curIndex])
        }else{
            curHead.children.set(word[curIndex], new Node(word[curIndex]))
            curHead = curHead.children.get(word[curIndex]);
        }
        curIndex += 1
    }
    curHead.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curIndex = 0;
    let curHead = this.root;
    
    while(curIndex < word.length){
        if(curHead.children.has(word[curIndex])){
            curHead = curHead.children.get(word[curIndex])
        }else{
            return false
        }
        curIndex += 1;
    }
    return curHead.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(word) {
    let curIndex = 0;
    let curHead = this.root;
    
    while(curIndex < word.length){
        if(curHead.children.has(word[curIndex])){
            curHead = curHead.children.get(word[curIndex])
        }else{
            return false
        }
        curIndex += 1
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
