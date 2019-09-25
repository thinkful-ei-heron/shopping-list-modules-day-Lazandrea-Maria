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
>>>>>>> 373fa7abefb748c6ba2904d127542642a2ea76c3
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
