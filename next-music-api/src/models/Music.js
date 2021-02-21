
const mongoose = require('mongoose')

const MusicSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	band: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
})

mongoose.model('Music', MusicSchema)