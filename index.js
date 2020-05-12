// Objects:

// Functions:
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.[key] = value;
}
function deleteFromObjectByKey(object, key){
  //code
}
function destructivelyDeleteFromObjectByKey(object, key){
  //code
}