let n=1;
function set(){
    n=1;
}
async function fun(){
    const tr=new Promise(function(resolve,reject) {
        setTimeout(()=>{
            if(n==1)
            resolve();
            else
            reject();
        },2000);
    });
}
fun().then((result) => {
    console.log("Resolved");
    
}).catch((err) => {
    console.log("Rejected");
});
console.log("Hello");


///////////////////////

async  function set_values(a,b){
    console.log("This Song");
    for(let x=a;x<=b;++x)
    {
        alert(x);
        str=map[x];
           get_data(x,str).then((result) => {
            alert("Inside");
                update(ref(db,"/"+x+"/"+str+"/"+ac+"/"),{
                    BookedSeat:0
                })
                .then((result)=>{
                    alert("Data Stored Sucessfully");
                })
                .catch((error)=>{
                    alert("Uncessfully");
                });
                n=0;
            })
            .catch((error)=>{
                    alert("Uncessfully");
                });
    }
}


////////////////////////////////////////
async  function set_values(x,y){
    console.log("X="+x+"y="+y);
   alert("Inside Set_Values");
    if(x==y)
    return;
    console.log("get is starting");
       alert(x);
        str=map[x];
         await  get_data(x,str).then((result) => {
            console.log("get data completed");
            // console.log("X="+x+"y="+y);
           alert(x);
                update(ref(db,"/"+x+"/"+str+"/"+ac+"/"),{
                    BookedSeat:999
                })
                .then((result)=>{
                   //alert("Data Stored Sucessfully");
                 set_values(x+1,y);
                })
                .catch((error)=>{
                   alert("Uncessfully");
                });
            })
            .catch((error)=>{
                   alert("Uncessfully");
                });
}
async function get_data(n,stri){
    return new Promise(function(resolve,reject) {
    setTimeout(()=>{
        console.log("In set timeout");
    },3000);
    get(child(dbref,"/"+n+"/"+stri+"/"+ac+"/"+bs)).then((snapshot)=>{
        if(snapshot.exists()){
            name=snapshot.val();
            console.log(stri+"Data=>"+name);
           alert("In get_data");
            alert("Inside Get");
            j=name;
        }
        else{
            console.log("No data Found");
        }
        resolve();
});
        
    })
    .catch((error)=>{
        console.log("Unsucessful");
    });
}
let b=document.getElementById("sub");
b.addEventListener('click',submit_form);
  async function submit_form(){
    console.log("Submit Form");
   alert("good");
    let source=document.getElementById('source');
    let destination=document.getElementById('destination');
    let a,b;
   //alert(get_data(1,map[1]));
//    await set_values(1,4).then((result)=>{
//        alert("Done Full");
//     }).catch((err)=>{
//        alert("Not Done");
//     })
await set_values(1,4);
fun();
}
function fun(){
    let aaa=1;
   alert("Complete");
}