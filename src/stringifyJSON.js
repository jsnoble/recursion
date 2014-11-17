// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:


//helper function

var type = function (thing){ return Object.prototype.toString.call(thing).slice(8,-1);}

var stringifyJSON = function(obj) {

  if(type(obj) === 'Function') {
    return null;
  }
  if(type(obj) === 'Undefined') {
    return null;
  }
  if(type(obj) === 'Null') {
    return "null";
  }
  if(type(obj) === 'Number') {
    return obj.toString();
  }
  if(type(obj) === 'String') {
    return '"' + obj + '"' ;
  }
  if(type(obj) === 'Boolean') {
    return obj.toString();
  }
  if(type(obj) === 'Object') {
  	if(Object.keys(obj).length === 0){
  		return "{}";
  	} 
  	else{
  		var result = [];
  		var key = Object.keys(obj);
  		key.forEach(function (key){
  			var val = stringifyJSON(obj[key]);
  			var keys = stringifyJSON(key);
  			if (val !== null) {
  				result.push(  keys + ":"  + val)
  			}
  		})
  		return "{" + result.join(",") + "}" ;

  	}
  	console.log(obj);
  }
  if(type(obj) === 'Array') {
    return "[" + obj.map(function(o) {return stringifyJSON(o)}).join(",")+ "]"
  }
};

