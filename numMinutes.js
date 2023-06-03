/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headId, manager, informTime) {
    let adjList = {};

    for(let i = 0; i < manager.length; i++){
        let currentManager = manager[i];

        if(currentManager !== -1){
            if(currentManager in adjList){
                adjList[currentManager].push(i);
            }else{
                adjList[currentManager] = [i];
            }
        }
    }

    let currentTime = 0;

    return dfs(headId, 0);

    function dfs(node, time){
        let localTime = 0;
        if(node in adjList){
            for(let localNode of adjList[node]){
                localTime = Math.max(localTime, dfs(localNode, time + informTime[node]));
            }
        }
        return localTime === 0 ? time : localTime;
    }
};
