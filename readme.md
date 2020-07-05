# Maximum sub-array size that sums up to a given value

This algorithm reads a given array of integers and a target value and calculates the biggest sub-array (contiguous subset of elements) such as its elements sums up to the given target value.

The time complexity for this algorithm is O(n) since it iterates just once through the entire array.

## Project setup
```
npm install
```
## Run application
The application requires to be imported as a module but it can also be executed through Node's REPL like:

```node
lib = require('./index)
lib.maxLenght([1,2,3,4], 2)
```

### Run unit tests
```
npm run test
```
