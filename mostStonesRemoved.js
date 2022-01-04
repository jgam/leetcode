/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let ranks = {};
    let uniqueGroups = 0;
    
    function find(node){
        if(ranks[node]==null){
            uniqueGroups += 1;
            ranks[node] = node;
        }else if(ranks[node] !== node){
            //path compression
            ranks[node] = find(ranks[node])
        }
        return ranks[node];
    }
    
    function union(a,b){
        let p1 = find(a);
        let p2 = find(b);
        
        if(p1 !== p2){
            ranks[p2] = p1;
            uniqueGroups -= 1;
        }
    }
    
    for(let stone of stones){
        union(stone[0], ~stone[1]);
    }
    return stones.length - uniqueGroups
};
