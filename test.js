if(process.argv.length !== 3)
	throw new Error('Works like this: node test <your name>')

console.log('Hello '+ process.argv[2])