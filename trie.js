class TrieNode {
    constructor(value){
        this.value = value;
        this.children = {};
        this.end = false;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode("*");
    }

    addWord(word){

        let lastNode = this.root;

        for(let i=0; i < word.length; i++){
            let char = word[i];
            if(lastNode.children[char] === undefined){
                lastNode.children[char] = new TrieNode(char);
            }
            lastNode = lastNode.children[char];
            if(i == word.length - 1) lastNode.end = true;

        }
    }

    hasWord(word){ 
        let lastNode = this.root;
        for(let i = 0; i < word.length; i++){
            let char = word[i];
            if(lastNode.children[char] === undefined){
                return false //returns false if the word is not in the trie
            }
            else{
                lastNode = lastNode.children[char];
            }
            
            if(i == word.length - 1 && lastNode.end){ //true if has the word
                return true;
            }
            else if (i == word.length - 1){ //return lastNode if a word matches partially
                return lastNode
            }
        }
        
        return false;

    }
}

class StreamChecker{
    constructor(words){
        this.trie = new Trie();
        this.letters = [];
        
        for(let word of words){
            let reversedWord = word.split('').reverse().join('')
            this.trie.addWord(reversedWord);
        }
    }
    
    query(letter){
        this.letters.unshift(letter);
        let possibleWord = ""
        for(let letter of this.letters){
            possibleWord = possibleWord + letter;
            let trieWord = this.trie.hasWord(possibleWord);
            if(trieWord === true) return true;
            if(trieWord === false) return false;
        }
		
        return false;
        
    }
}
