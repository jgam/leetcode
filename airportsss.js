function airportConnections(airports, routes, startingAirport) {
  // Write your code here.
	let adj_list = {};
	
	
	for(let airport of airports){
		adj_list[airport] = [];
	}
	
	for(let route of routes){
		let [from, to] = route;
		adj_list[from].push(to);
	}
	
	let unvisited_airports = new Set(airports);
	
	// identify whcih airports need to be reached.
	find_unreachables(startingAirport);
	
	unvisited_airports = new Array(...unvisited_airports);
	
	let queues = [];
	let scores = {};
	
	
	
	for(let unvisited_airport of unvisited_airports){
		let score = get_scores(unvisited_airport, new Set(), 0);
		queues.push([unvisited_airport, score]);
	}
	
	// sort the queuest to get proper airports
	queues.sort((a,b) => b[1] - a[1])
	
	let numberPaths = 0;
	
	let alreadyVisited = new Set();
	
	// now dfs again to sort out alraedy visited and increase num paths
	for(let i = 0; i < queues.length; i++){
		let [deletingAirport, importance] = queues[i];
		
		if(alreadyVisited.has(deletingAirport)){
			continue
		}else{
			markVisitAirports(deletingAirport);
			numberPaths += 1;
		}
	}
	
	return numberPaths;
	
	function markVisitAirports(airport){
		if(alreadyVisited.has(airport)){
			return;
		}else{
			alreadyVisited.add(airport);
			for(let eachAirport of adj_list[airport]){
				markVisitAirports(eachAirport);
			}
			return;
		}
	}
	
	function find_unreachables(airport){
		if(unvisited_airports.has(airport)){
			unvisited_airports.delete(airport);
			for(let eachAirport of adj_list[airport]){
				find_unreachables(eachAirport);
			}
		}else{
			return
		}
	}
	
	function get_scores(airport, visited){
		//hnd
		if(visited.has(airport)){
			return 0;
		}else{
			let score = 0;
			visited.add(airport)
			for(let eachAirport of adj_list[airport]){
				if(eachAirport !== startingAirport){
					if(!(visited.has(eachAirport))){
						score += 1 + get_scores(eachAirport, visited);
					}
				}
			}
			scores[airport] = score;
			return scores[airport]
		}
	}
}

// Do not edit the line below.
exports.airportConnections = airportConnections;
