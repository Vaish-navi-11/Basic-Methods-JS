//Array Created
var arrOfItems = ["Pencil","Pen","Bag","Laptop"];
////////////////////////////////////////////////////////////////////////

//1. Array Creation
function creation(){
    document.write(this.arrOfItems);
}
creation()
////////////////////////////////////////////////////////////////////////


//2.Array Manipulation
function manipulation(){
    this.arrOfItems.push("Marker");
    document.write("<br>"+this.arrOfItems);
}
manipulation()
function shifting(){
    var new1=this.arrOfItems.shift()
document.write("<br>"+new1);
}
shifting()
////////////////////////////////////////////////////////////////////////


//3. Array Searching
function search(){
    var indexNum=this.arrOfItems.indexOf("Bag");
    document.write("<br>"+"Index of Bag :"+indexNum);
}
search()
////////////////////////////////////////////////////////////////////////


//4. Array filtering
var numArr=[1,2,3,4,5,6,7,8,9];
function filtering(){
    var new2=this.numArr.filter(function(num)
    {
        return num%2!==0;
    });
    document.write("<br>"+new2);    
}
filtering()
/////////////////////////////////////////////////////////////////////// 


//5. Array Sorting
var arrOfItems2 = ["Pencil","Pen","Bag","Laptop"];
function sorting(){
    var new3=this.arrOfItems2.sort();
    document.write("<br>"+new3);
}
sorting()
//////////////////////////////////////////////////////////////////////

//6. Array Max&Min
var max=null;
for (let i of numArr)
max=Math.max(max,i);
document.write("<br>Max of NumArr: "+max);
var min=Math.min(...numArr);
document.write("<br>Min of NumArr: "+min);
/////////////////////////////////////////////////////////////////////

//7.Array Joining
var join=[];
for (let i of arrOfItems2){
    join=join+i+" ";
}
document.write("<br>The Joined Array: "+join)
////////////////////////////////////////////////////////////////////

//8. Array Concatenation
var arr1 = ["a", "b", "c"];
var arr2 = ["d", "e", "f"];
var arr3 = arr1.concat(arr2);
document.write("<br>Concatenated Array: "+arr3)
////////////////////////////////////////////////////////////////////

//9. Array Mapping
var arr4=[1,2,3,4,5];
var mappedArr=arr4.map(x=>x*2);
document.write("<br>Doubled Array: "+mappedArr);
////////////////////////////////////////////////////////////////////

//10. Array Destructions
let [first,second,...rest] = arrOfItems;
document.write("<br>First Element: "+first);
document.write("<br>Second Element: "+second);
document.write("<br>Rest of Array: "+rest);
///////////////////////////////////////////////////////////////////

//11.Array Spliting
let arr5=[56,25,98,77,54,13]
document.write("<br>Array using join function : ",arr5.join(" / "));
let arr6=arr5.join(" ")
document.write("<br>Array using split function : ",arr6.split(" "));
///////////////////////////////////////////////////////////////////

//12. Array Spreading
let arr7=[1,2,3,4,5];
let arr8=[...arr7,6,7,8];
document.write("<br>Spreading Array: ",arr8);
///////////////////////////////////////////////////////////////////

//13. Array Flattening
let arr9=[1,2,[3,4,[5,6]],7];
let arr10=arr9.flat();
document.write("<br>Flattened Array: ",arr10);
///////////////////////////////////////////////////////////////////

//14. Checking Array Elements
if(arrOfItems2.includes("Penl")){
    document.write("<br>Element is present in the array.");
}
else{
    document.write("<br>Element is not present in the array.");
}
//////////////////////////////////////////////////////////////////

//15. Array Deduplication
let arr11=[1,2,2,3,3,3,4,4,4,4,5];
let arr12=Array.from(new Set(arr11));
document.write("<br>Deduplicated Array: ",arr12);
////////////////////////////////////////////////////////////////////////
 
//16. Merging Array Elements
let arr13=[1,2,3];
let arr14=[4];
let mergedArray = [...arr13,...arr14];
///////////////////////////////////////////////////////////////////////

//17. Array Comparison
let arr15=[1,2,3];
let arr16=[1,2,3];
if(arr15.length===arr16.length && arr15.every((value, index) => value === arr16[index])){
    document.write("<br>Arrays are equal");
}
else{
    document.write("<br>Arrays are not equal");
}
///////////////////////////////////////////////////////////////////////

//18. Array Reversing
let arr17=[1,2,3,4,5];
let reversedArray = arr17.reverse();
document.write("<br>Reversed Array: ",reversedArray);
///////////////////////////////////////////////////////////////////////

//19. Array Rotation
let arr18=[1,2,3,4,5];
let rotatedArray = arr18.slice(2);
rotatedArray = rotatedArray.concat(arr18.slice(0,2));
document.write("<br>Rotated Array: ",rotatedArray);
////////////////////////////////////////////////////////////////////////

//20. Index of First Occurence
let arr19=[1,2,3,4,5,1,2,3,4,5];
let searchNum=2;
let index = arr19.indexOf(searchNum);
document.write("<br>Index of First Occurrence of "+searchNum+": ",index);
///////////////////////////////////////////////////////////////////////