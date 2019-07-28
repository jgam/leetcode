function solution(numbers) {
    var a = numbers.sort(function(i, j){
        return (
        String(j).length < 2 ? j+ '0' : j) - (String(i).length < 2 ? i + '0' : i);
    })
    return a.map(convert => String(convert)).reduce((k,z) => k+z);
}