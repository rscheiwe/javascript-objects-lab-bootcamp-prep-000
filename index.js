var recipes = {
  'pizza' : 'cheese',
  'ham' : 'pig'
};



function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {[key] : value})
  
  return object
}