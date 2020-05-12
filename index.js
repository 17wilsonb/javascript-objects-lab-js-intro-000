// Objects:

// Functions:
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]:value });
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.key = value;
}
function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object);
  delete newObject.key;
  return newObject;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
}
