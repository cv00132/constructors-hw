function Person (people) {
  var people = people || {};
  this.cool = (people.cool == undefined) ? false : true;
    };

Person.prototype.pet = function (petted) {
  petted.status = 'happy'
};

Person.prototype.feed = function (hungryDog){
  hungryDog.hungry = false
};


export { Person };
