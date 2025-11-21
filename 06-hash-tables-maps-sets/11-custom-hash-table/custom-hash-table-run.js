const HashTable = require('./custom-hash-table');

const hashTable = new HashTable();

hashTable.set('John', '555-234-3455');
hashTable.set('James', '555-349-3948');
hashTable.set('Sara', '555-469-3334');

hashTable.print();
