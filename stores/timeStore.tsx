import { observable, computed, action, decorate, extendObservable } from "mobx";
// import { useStaticRendering } from 'mobx-react'

// const isServer = typeof window === 'undefined'
// useStaticRendering(isServer)
// https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
interface IGr {
  index: Number
  name: String
}

export default class Timer {
  groceries: IGr[] = [];
  amount:Number = 1;
  
  constructor() {
    // ให้มีการ ตรวจจับการเปลี่ยนแปลง
    this.groceries = observable([{ index: 1, name: "123" }])
    // this.amount = observable(0)
    //  extendObservable(this, {
    //   groceries: this.groceries,
    // })
  }

  add(g: IGr) {
    console.log(g);
    // console.log('g', this.groceries.length);

    this.groceries.push(g)
  }
  delete() {
    this.groceries.pop()
    // this.groceries.remove(name)
  }
  // computed property:
  get numOfGroceries(): Number {
    return this.groceries.length
  }
  // computed property:
  get totalAmount(): Number {
    console.log(0);
    return this.amount;
  }
}
decorate(Timer, {
  groceries: observable,
  add: action.bound,
  delete: action.bound,
  numOfGroceries: computed,
  totalAmount: computed,
});

