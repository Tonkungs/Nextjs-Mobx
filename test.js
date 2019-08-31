import { observable, autorun } from 'mobx';
let state = observable({
  name: ''
})
autorun(() => {
  console.log(state.name);
})
state.name = 'Golf';