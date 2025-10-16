let seats = 2;
const costPerTicket = 9;
totalCost = 0;

console.log("Your Ticket Details:");
if (seats <= 2){
    totalCost = seats * costPerTicket;
    console.log("Cost of "+seats+" ticket is "+totalCost);
} else if (seats >= 5){
    console.log("bookings are not allowed");
}else {
    let discount = 5;
    for (let i = 1;i <= seats;i++){
        let discontPriced = costPerTicket - (costPerTicket * discount / 100)
        totalCost += discontPriced;
        console.log("Ticket for Customer "+i+" gets "+discount+"% discount!,Cost is: $"+discontPriced);
        discount += 2
    }
    let orignalPrice = seats * costPerTicket;
    console.log("For "+seats+" tickets, you need to pay: $"+totalCost+" instead of "+"$"+orignalPrice);
}