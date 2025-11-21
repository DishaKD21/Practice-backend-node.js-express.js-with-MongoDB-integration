const lodash = require('lodash');

const names= ['sangam' , 'john', 'terry'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);