
const mongoose = require('mongoose')

const Music = mongoose.model('Music')


module.exports = {
	async index(req, res) {
		const music = await Music.find()

		return res.json(music)
	},

	async show(req, res) {
		const music = await Music.findById(req.params.id)

		return res.json(music)
	},

	async store(req, res) {
		const music = await Music.create(req.body)

		return res.json(music)
	},

	async update(req, res) {
		const music = await Music.findByIdAndUpdate(req.params.id, req.body, { new: true })

		return res.json(music)
	},

	async destroy(req, res) {
		await Music.findByIdAndRemove(req.params.id)

		return res.send()
	}
}