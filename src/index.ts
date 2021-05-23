function attr() {
  console.log("Attr invoke");
  return function (ctor: any) {
    console.log("ctor invoked", ctor);
  };
}

function propAttr(): PropertyDecorator {
  console.log("prop Attr invoke");
  return (target: Object, propertyKey: string | symbol) => {
    console.log("Prop Attrt in created");
  };
}

console.log("Flag 1");

@attr()
class Test {
  constructor() {
    this.t = 10;
    console.log("Object Constructed");
  }

  @propAttr()
  t: number;
}

var t = new Test();

console.log(t);

console.log(new Test());
