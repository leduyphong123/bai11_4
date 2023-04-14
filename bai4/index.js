let a=5;
let b=4;

for(let i=0;i<b;i++){
  if(i==0||i==b-1){
    for(let j=0;j<a;j++){
        document.write("*");
    }
  }else{
    document.write("*");
    for(let j=1;j<a;j++){
        document.write("&#160;");
    }
    document.write("*");
  }
  document.write("<br/>");
}