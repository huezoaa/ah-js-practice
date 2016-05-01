var x = {
      name:"John",age:20
        };

if(x.test){
  console.log("Exists");
}else{
  console.log("Its undefined");
}

if(x.test !== undefined){
  console.log("Exists II");
}else{
  console.log("Its undefined II");
}

if(typeof x.test !== "undefined"){
  console.log("Exists III");
}else{
  console.log("Its undefined III");
}


var y = x.test || "Was undefined until now";
console.log(y);