async function second(){
    console.log("Second is starting");
    await first();
    console.log("First Completed");
  //  alert(t);
    console.log("Second is ending");
}
function resolve(d){
    console.log("Third");
}
async function first(){
    console.log("First is running");
    let n=1;
    return new Promise(function(resolve,reject) {
        setTimeout(()=>{
            console.log("In set timeout");
            resolve(n);
        },3000);
    });
}
//second();

 async function funn(){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("In set timeout");
        resolve(5);
    },3000);
    console.log("aage nikal gya");
    })
}
async function fun2(){
    let x=await funn();
    console.log("tiem out completed   "+x);
}
fun2();