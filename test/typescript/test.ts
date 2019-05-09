export default interface Interface {
  member: string;
}

export class Class {
  instanceProperty = 1;

  instancePropertyMethod = () => {
    // ...
  };

  instanceMethod() {
    // ... shold use `this`
    console.info(this);
  }
}
