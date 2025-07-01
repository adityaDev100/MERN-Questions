function isValid(string){
    let stackArr = []
    let dic = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
 for(i=0;i<string.length;i++){
    let key = string[i]
    if(key==='(' || key ==='[' || key==='{'){
        stackArr.push(dic[key])
    }
    else{
        //stack.pop is last inserted element in stack
        if (stackArr.pop() !== key) return false;
    }
 }
 return stackArr.length === 0
}

let input = '[()]'
let output = isValid(input)
console.log("h",output)