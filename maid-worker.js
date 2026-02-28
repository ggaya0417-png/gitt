self.onmessage=()=>{
var s=0;
var a=1;
var b=10;
for(var i=a;i<=b;i++){
    s=s+i;
}
self.postMessage(s);}