var recipes = {
  'pizza' : 'cheese',
  'ham' : 'pig'
};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  object.assign({}, object, [key])
  
  return object
}