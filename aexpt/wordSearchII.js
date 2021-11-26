/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class Node{
    constructor(ch){
        this.val = ch;
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }
    
    insert(word){
        let curIndex = 0;
        let curNode = this.root;
        
        while(curIndex < word.length){
            if(!curNode.children.has(word[curIndex])){
                curNode.children.set(word[curIndex], new Node(word[curIndex]));
            }
            curNode = curNode.children.get(word[curIndex]);
            curIndex += 1;
        }
        curNode.isEnd = true;
    }
    
    search(word){
        let curIndex = 0;
        let curNode = this.root;
        
        while(curIndex < word.length){
            if(!curNode.children.has(word[curIndex])){
                return false
            }
            curNode = curNode.chidlren.get(word[curIndex]);
            curIndex += 1;
        }
        return curNode.isEnd;
    }
    
    startsWith(word){
        let curIndex = 0;
        let curNode = this.root;
        
        while(curIndex < word.length){
            if(!curNode.children.has(word[curIndex])){
                return false
            }
            curNode = curNode.children.get(word[curIndex]);
            curIndex += 1;
        }
        return curNode
    }
    
    
}

var findWords = function(board, words) {
    let newTrie = new Trie();
    for(let word of words){
        newTrie.insert(word);
    }
    let solution = new Set();
    
    //dfs
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            dfs(board,i,j, '', newTrie,true)
        }
    }
    
    return [...solution]
    
    function dfs(board,i,j,curStr,currentTrie,init){
        if(i < 0 || i > board.length-1){
            return;
        }
        
        if(j < 0 || j > board[0].length -1){
            return;
        }
        
        if(board[i][j] === -1){
            return;
        }
        let nextTrie = init ? currentTrie.startsWith(board[i][j]): currentTrie.children.get(board[i][j])
        init = false;
        
        if(nextTrie){
            curStr += nextTrie.val;
            
            if(nextTrie.isEnd){
                solution.add(curStr)
            }
            
            let temp = board[i][j];
            board[i][j] = -1;
            
            //dfs
            dfs(board,i+1,j,curStr,nextTrie,init) + dfs(board,i-1,j,curStr,nextTrie,init) + dfs(board,i,j+1,curStr,nextTrie,init) + dfs(board,i,j-1,curStr,nextTrie,init)
            
            board[i][j] = temp;
            return;
            
        }else{
            return;
        }
            
    }
};

