let array=[1,[2,[3,4],5,6]];
let res=[];
let flatternAnArray=(array)=>{
	for(let value of array){
		if(Array.isArray(value)){
			flatternAnArray(value);
		}else{
			res.push(value);
		}
	}
}
flatternAnArray(array);
console.log(res);
