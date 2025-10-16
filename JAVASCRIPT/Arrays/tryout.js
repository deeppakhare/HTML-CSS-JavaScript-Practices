let Pdt_Price = [5000, 3000, 500];
const [Pdt1, Pdt2, Pdt3] = Pdt_Price;
console.log("Total Amout : "+(Pdt1+Pdt2+Pdt3));
const [Pdt4,,Pdt5] = Pdt_Price;
console.log("Total Amount : "+(Pdt4+Pdt5));
let [Pdt_Id, ...PdtName] = [1234,"Deep","Rahul","Pretik"];
console.log("Product Name : "+PdtName);
console.log("Product Id : "+Pdt_Id);
let newArry = [1112, "Hello", "My", "Name", 3244]
console.log(newArry.length);


