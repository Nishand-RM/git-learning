//print odd numbers in array
//output : odd,odd,even,even,[5,7,2,4,8]
var res = function(arr)
{
  for(var i =0;i<arr.length;i++)
  {
    if(arr[i]%2 ==0)
    {
      console.log("even");
    }
    else
    {
      console.log("odd");
    }
  }
  return arr;
}
console.log(res([5,7,2,4,8]));

//sum of array
//output: 20
var sum =0;
var num =function(arr)
{
  for(var i=0;i<arr.length;i++)
  {
    sum+= arr[i];
  }
  return sum;
}
console.log(num([2,3,4,5,6]));

//prime number or not
//output: not prime number //input: 11
var res = function(num)
{
  if(num == 1)
  {
    console.log("1 is neither prime nor composite");
  }
  else if(num > 1)
  {
    for(var i =2; i<num;i++)
    {
      if(num % i==0)
      {
        console.log("prime number");
      }
      else{
        console.log("not prime number");
      }
    }
  }
  return num;
}
console.log(res(11));

//remove duplicate from array
//output : ["apple","mango","orange"]
var arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

var res = function (arr) {
var unique = [];
for (var i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
  }
}
return unique;
}
console.log(res(arr));

//string title caps
//input: hi hello everyone 
//output: Hi Hello Everyone
let res = function Case(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log(res("hi hello everyone"));

  //palindrome
  //input: mom,cat
  //output: mom
  let res = function pal(arr) {
    const palindromes = [];
    for (const element of arr) {
      const reversedElement = element.split("").reverse().join("");
      if (element === reversedElement) {
        palindromes.push(element);
      }
    }
    return palindromes;
  }
  console.log(res(["mom","cat"]));
