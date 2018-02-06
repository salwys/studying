function getDigitsSum(num){
	var str=String(num)
	var sum=0
	for (var i=0;i<num.length;i++){
		sum+=Number(num[i])
	}
	return sum;
}
var k=215
document.write(getDigitsSum(k))