//.........Immediately Invoked Function Expressions


(function chai() {
    console.log(`Welcome here`);
})();

( (age) => {
    console.log(`welcome here  ${age}`);
    
} )(22)