function rectangleMania(coords) {
  // Write your code here.
	const coordsTable = getCoordsTable(coords);
	return getRectangleCount(coords, coordsTable);
}

function getCoordsTable(coords){
	const coordsTable = {x: {}, y: {}};
	for(const coord of coords){
		const [x,y] = coord;
		coordsTable.x[x] = coordsTable.x[x] || [];
		coordsTable.x[x].push(coord);
		coordsTable.y[y] = coordsTable.y[y] || [];
		coordsTable.y[y].push(coord);
	}
	return coordsTable;
}

function getRectangleCount(coords, coordsTable){
	let rectangleCount = 0;
	for(const coord of coords){
		const lowerLeftY = coord[1];
		rectangleCount += clockwiseCountRectangles(coord, coordsTable, UP, lowerLeftY);
	}
	return rectangleCount;
}

function clockwiseCountRectangles(coord1, coordsTable, direction, lowerLeftY){
	const [x1,y1] = coord1;
	if(direction === DOWN){
		const relevantCoords = coordsTable.x[x1];
		for(const coord2 of relevantCoords){
			const lowerRightY = coord2[1];
			if(lowerRightY === lowerLeftY) return 1;
		}
		return 0;
	}else{
		let rectangleCount = 0;
		if(direction ===UP){
			const relevantCoords = coordsTable.x[x1];
			for(const coord2 of relevantCoords){
				const y2 = coord2[1];
				const isAbove = y2 > y1;
				if(isAbove) rectangleCount += clockwiseCountRectangles(coord2, coordsTable, RIGHT, lowerLeftY);
			}
		}else if(direction ===RIGHT){
			const relevantCoords = coordsTable.y[y1];
			for(const coord2 of relevantCoords){
				const x2 = coord2[0];
				const isRight = x2 > x1;
				if(isRight) rectangleCount += clockwiseCountRectangles(coord2, coordsTable, DOWN, lowerLeftY);
			}
		}
		return rectangleCount
	}
}

const UP = 'up'
const RIGHT = 'right';
const DOWN = 'down';
// Do not edit the line below.
exports.rectangleMania = rectangleMania;
