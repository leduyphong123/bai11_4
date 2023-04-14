
let start=1;
let end=1;
document.write(start+" " + end+ " ");

for(let i=0;i<20;i++){
    let sum=start+end
    document.write(sum + " ");
    start=end;
    end=sum;
}