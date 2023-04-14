let number=parseInt(prompt("nhap vao mot so nguyen duong"));
let factorial=1;
for(let i=1;i<=number;i++){
    factorial*=i;
}
document.write(factorial);