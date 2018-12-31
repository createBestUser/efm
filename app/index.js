const fs = require('fs')

console.log(process.platform);

fs.readdir('.', ( err, items ) => {
	items.forEach(( item ) => {
		console.log( item )
	})
})