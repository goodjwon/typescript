"use strict";
// java: Exception
// javascript: Error
// const array = new Array(1000000000000000); // run time error
// Error(Exception) Handling: try-> catch -> finally
function readFile(fileName) {
    if (fileName === 'not exits!!!') {
        throw new Error("file not exits! " + fileName);
    }
    return 'file contents';
}
function closeFile(fileName) {
    console.log('close');
}
var fileName = 'file';
try {
    console.log(readFile(fileName));
}
catch (error) {
    console.log('cached~!!!');
}
finally {
    closeFile(fileName);
}
