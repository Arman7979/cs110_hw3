<script>
const space = function(z){
	let nth = "" ;
	for(let i = 1 ; i<=z ; i++ ) {
		nth = nth + " ";
	}
	return nth;
}
	
const stars = function(z){
	let nth = "" ;
	for(let i = 1 ; i<=z ; i++ ) {
		nth = nth + "*";
	}
	
	return nth;
}

const diamond = function(n) {
let y = ""
	if(n%2 === 0) {
		n = n + 1;
	}
	for (let i = 1; i<n; i=i+2){
		y = y + space((n-i)/2) + stars(i)+"\n";
	}
	d = d + stars(n)+"\n";
	for (let i = n-2; i>=1; i=i-2){
		y = y + space((n-i)/2) + stars(i)+"\n";
	}
	return y;

}
let size=8;
console.log(diamond(size));
</script>