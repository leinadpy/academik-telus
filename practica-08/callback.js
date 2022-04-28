function highOrder(data, cb) {
  if (!cb || typeof cb !== "function") {
    throw new Error("The callback must be a function");
  }
  console.log(data);
  setTimeout(cb, 100);
}
function callbackExample() {
  console.log("Hello, I'm a function");
}

const data = "Some data";

try {
  highOrder(data, callbackExample);
} catch (err) {
  console.log(err.message);
}
