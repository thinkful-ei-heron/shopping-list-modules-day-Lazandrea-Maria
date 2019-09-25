<<<<<<< HEAD
function validateName(name) {
  if (!name) {
    throw new TypeError('Name must not be blank');
  }
  return name;
}
=======
function validateName (name) {
    if (!name) {
        throw new TypeError('Name must not be blank');

    }
    return name
};
>>>>>>> a96124a7e65e931606985fe665c3621a63af91a8
// const foo = 'bar';

//export default {};

function create(name) {
  return {
    id: cuid(),
    name: name,
    checked: false
  };
}

export default {
  validateName,
  create
};
