For a large dataset Immutable does a lot of the hard work for you — 
1. it catches errors, 
2. offers default values, 
3. and builds nested data structures out-of-the-box
4. by using this in our React Application this ensure that state changes trigger re-renders only when necessary


Immutable.js provides some function like for normal object ({}) it provides Map({}), for normal array it provide List[()]
FromJs() , toJs().

Example : 

const data = { my: { nested: { name: 'Will' } } };
//In Normal JS : 
const goodName = data.my.nested.name;console.log(goodName); // prints Will
const badName = data.my.lovely.name;// throws error: 'Cannot read name of undefined'

//In Immutable.js : 
const data = fromJS({ my: { nested: { name: 'Will' } } });
const goodName = data.getIn(['my', 'nested', 'name']);console.log(goodName); // prints Will
const badName = data.getIn(['my', 'lovely', 'name']);console.log(badName); // prints undefined - no error thrown
