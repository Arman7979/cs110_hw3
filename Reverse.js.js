<script>
const reverse = function(arr) {
let outarr=[];
	for(let i = arr.length - 1; i>=0; i--) {
	  j=arr.lenght - 1 - i;
	  outarr.push(arr[i]);
	}
return outarr;
};
let a=["q","w","e","r","t","y","u"];
console.log(reverse(a));
</script>