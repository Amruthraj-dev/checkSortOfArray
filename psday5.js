//Program to check array of numbers are sorted (ascending or decending order) 


function orderCheck(arr){
if (arr[1] > arr[0]) {
    c = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i + 1] >= arr[i]) {
            c++
        }

    }
    if (c == arr.length - 1) {
        console.log("array is in increasing order")
    }
    else{
        console.log("array is unsorted")
    }
}
//second
else if(arr[1]<arr[0])
{
    c = 0
    for (j = 0; j < arr.length; j++) {
        if (arr[j + 1] <= arr[j]) {
            c++
        }
    }
    if (c == arr.length - 1) {
        console.log("array is in decreasing order")
    }
    else {
        console.log("array is unsorted")
    }
}
//third
else if(arr[1]==arr[0]){
let countPos=0
let countNeg=0
let countZero=0
let s=""
let t=""
for(k=0;k<arr.length-1;k++)
    {
        diff=arr[k+1]-arr[k]
        

        if(diff>0){
            countPos++

        }
        else if(diff<0){
            countNeg++
        }
        else if(diff==0){
            countZero++

        }
    }

if(countZero==arr.length-1){
    console.log("array is sorted")
}
else if((countPos+countZero)==arr.length-1){
    console.log("Array is in ascending order")
}
else if((countNeg+countZero)==arr.length-1){
    console.log("Array is in decending order")
}
else{
    console.log("Array is unsorted")
}

}
}
orderCheck([1,2,3,4,4,5])
orderCheck([5,4,3,3,2,1])
orderCheck([5,5,3,3,2,1])
orderCheck([10,10,10,10])




