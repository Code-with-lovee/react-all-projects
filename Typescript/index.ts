let id: number = 5
// console.log('ID:', a)
let company :string ="travell"
let ispublished:boolean = true
let x:any="hello"
let ids:number[]=[1,2,2,]
let arr: any[]=[1,true,'hello']

// tuple
let person :[number,string,boolean]=[1,"bradt",true]
// tuple array
let employee:[number,string][]
employee=[
    [1, "brad"],
    [2,"john"],
    [3,"jill"]
]
// union
let id1: string |number
id1 = "22"

// Enum 
enum Direction1{
    Up,
    down,  
    left,
    right,
}
console.log(Direction1.Up)

// objects 
type User={
    id: number,
    name:string
}
const user: User={
    id:1,
    name:"hello"
}

// type assertions
let cid:any=1
// let customerid=<number>cid
let customerid=cid as number

// functions
function addNum(x:number,y:number):number{
    return x+y
}
console.log(addNum(1,2))

function log(message: string | number):void{
    console.log(message)
}

// interfaces
interface Userinterface{
    id: number,
    name:string
}
const user1: Userinterface={
    id:1,
    name:"hello"
}