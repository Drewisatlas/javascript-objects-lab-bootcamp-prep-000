var obj = {foo : 'bar'}

var newObj = Object.assign({}, obj)

console.log(obj)

console.log(newObj)

delete newObj.foo

console.log(newObj)