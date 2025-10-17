console.log("Object creation using constructor method");

function Product(id, name, price) {
    this.PdId = id;
    this.PdName = name;
    this.PdPrice = price;
    this.Qty = 0;
    this.TotalAmount = 0;

    this.ChangeQty = function (newQty) {
        this.TotalAmount = newQty * this.PdPrice;
        return this.TotalAmount;
    };
}

const Pd1 = new Product("asd22", "Tyre", 1250);

console.log("Product ID :",Pd1.PdId);
console.log("Product Name :",Pd1.PdName);
console.log("Product Price :",Pd1.TotalAmount);

Pd1.ChangeQty(10);
console.log("Total Amount after quantity",Pd1.TotalAmount);

console.log("---------------------------------------------------");

Pd1.ChangeQty(22)
console.log("Total price after changing quantity",Pd1.TotalAmount);
