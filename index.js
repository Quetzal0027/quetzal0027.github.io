let matrix = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
];

let positionInitial = matrix[0][0];
let positionFinal = matrix[2][3];

// Encontrará los caminos horizontales (5 caminos)
let pos_init = {x: 0, y: 0};
let pos_final = {x: 4, y: 5};

let pos_one = {...pos_init};
let array_way_one = [{...pos_one}]
// first_step pos_one.x == 0
console.log(pos_one)

while(pos_one.x !== pos_final.x){
  if(pos_one.x > pos_final.x)   pos_one.x--
  else                          pos_one.x++
  array_way_one.push({...pos_one});
}

while(pos_one.y !== pos_final.y){
  if(pos_one.y > pos_final.y)   pos_one.y --
  else                          pos_one.y ++
  array_way_one.push({...pos_one});
}


// let pos_two = {...pos_init};
// let array_way_two = [{...pos_two}];
// // first step pos_two.x == 1
// while(pos_two.x !== 1){
//   if(pos_two.x > 1) pos_two.x++
//   else pos_two.x--
//   array_way_two.push({...pos_two})
// }

// let pos_three = {x: 0, y: 0};
// let way_three = matrix.slice(0);

// let pos_four = {x: 0, y: 0};
// let way_four = matrix.slice(0);

// let pos_five = {x: 0, y: 0};
// let way_five = matrix.slice(0);

console.log(array_way_one)
// console.log(array_way_two);


