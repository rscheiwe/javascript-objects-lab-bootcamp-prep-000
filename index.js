var recipes = {
  'pizza' : 'cheese',
  'ham' : 'pig'
};



function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value})
}