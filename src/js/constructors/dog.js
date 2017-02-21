function Dog (dogs) {
  var dogs = dogs || {};
  this.color = dogs.color;
  this.hungry = (dogs.hungry == undefined) ? true : false;
  this.status = dogs.status || 'normal';
}



export { Dog };
