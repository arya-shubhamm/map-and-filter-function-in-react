let arr=[ 1,2,3,4,5];
 let narr=[];

 // from using loop
//for(let i=0; i<arr.length; i++ ){
 //   narr[i]=arr[i]*2;
//}

// from map function

narr= arr.map((value, idx)=>{
    return value*2;
})


 console.log(arr);
 console.log(narr);