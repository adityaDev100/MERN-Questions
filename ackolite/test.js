// Create Flat Map

let arr=[1,2,3,[4,5,[6,[7,8,[9,10,[11,12]]]]]];
//out=[1,2,3,4,5,..]

let output = []

function doFlatMap(arr){
   for(let i=0 ; i < arr.length; i++){
    
    if(!Array.isArray(arr[i])){
       output.push(arr[i])
    }else{
      doFlatMap(arr[i])
    }
    
   }
}

doFlatMap(arr)
console.log("d",output)


// Grouping


let user =[
{group:"ABc",userId:1212,userName:"JohnDoe "},
{group:"PQR",userId:1213,userName:"JaneDoe "},
{group:"ABc",userId:1214,userName:"Peter"},
{group:"PQR",userId:1215,userName:"lorum"},
{group:"ABc",userId:1216,userName:"Jam"}
]

// o/p> {
// abc:[],
// pqr:[]
// }
let output1 ={};
for(let i=0; i<user.length;i++){
    if(output[user[i].group]){
        output[user[i].group].push(user[i]);
    }
    else{
        output[user[i].group] = [user[i]];
    }
}

console.log(output1);









let ttt=[1,2,3,[4,5,[6,[7,8,[9,10,[11,12]]]]]];



