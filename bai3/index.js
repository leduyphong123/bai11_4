

for(let i=0;i<=4;i++){
    for(let j=0;j<i;j++){
        document.write("*");
    }
    document.write("<br/>");
}
document.write("<br/>");

for(let i=4;i>0;i--){
    for(let j=0;j<i;j++){
        document.write("*");
    }
    document.write("<br/>");
}
document.write("<br/>");

for(let i=0;i<3;i++){
    
    for(let j=0;j<i;j++){
        document.write("&#160;");
    }
    for(let j=i;j<3;j++){
        document.write("*");
    }
    document.write("<br/>");
}

for(let i=0;i<=3;i++){
    
    for(let j=3;j>i;j--){
        document.write("&#160;");
    }
    for(let j=0;j<i;j++){

        document.write("*");
    }
    document.write("<br/>");
}