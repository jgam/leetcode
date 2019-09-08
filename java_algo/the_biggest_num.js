function solution(numbers) {
    var a = numbers.sort(function(i, j){
        return (
        String(j).length < 2 ? j+ '0' : j) - (String(i).length < 2 ? i + '0' : i);
    })
    console.log(a);
    return a.map(convert => String(convert)).reduce((k,z) => k+z);
}

console.log(solution([3, 30, 34, 5, 9]));

console.log([3, 30, 34, 5, 9].sort(function(i, j){
    //console.log('i, j ',i,j);
    return (
    String(j).length < 2 ? j+ '0' : j) - (String(i).length < 2 ? i + '0' : i);
}))

var a = function(i,j){
    return (String(j).length < 2 ? j+ '0' : j)-(String(i).length < 2 ? i + '0' : i);
}

console.log(a(30,3));