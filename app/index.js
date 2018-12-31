const fs = require('fs-extra')

console.log(process.platform);

fs.readdir('.', ( err, items ) => {
	items.forEach(( item ) => {
		console.log( item )
	})
})