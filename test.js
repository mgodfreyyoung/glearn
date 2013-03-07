<<<<<<< HEAD
if(process.argv.length !== 3)
	throw new Error('Works like this: node test <your name>')

console.log('Hello '+ process.argv[2])
=======
if(process.argv.length < 3) {
	throw new Error('You need to specify some arguments: node test <arg1> <arg2> ...');
}

process.argv.splice(0,2);

console.log('Hello ' + process.argv.join(' '));
>>>>>>> A great feature for test.js
