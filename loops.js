for (var i = 1; i < 100; i++) {
  console.log( "Hello World the " + i + " time" );
}
function forLoop(array){
  for (var i = 0; i < 25; i++){
    if (i === 1){
    array.push("I am 1 strange loop.")
  }else{
    array.push("I am ${i} strange loops.")
  }
}
return array  

}
function whileLoop(number){
  let number = 100;
  while( number > 0){
    console.log(--number)
  }
  return "done"
}
