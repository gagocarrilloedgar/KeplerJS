const express = require('express')
const router = express.Router()

/**
 * This is a model definition
 * @typedef {Object} Song
 * @param {string} title.required - The title
 * @property {string} artist - The artist
 * @returns {integer} year - The year
 */

/**
 * GET /books
 * @summary This is the summary of the endpoint
 * @tags album
 * @security BasicAuth
 * @param {string} name.required - name param description
 * @return {array<Song>} 200 - success response - application/json
 * @example response - 200 - success response example
 * [
 *   {
 *     "title": "Bury the light",
 *     "artist": "Casey Edwards ft. Victor Borba",
 *     "year": 2020
 *   }
 * ]
 */
router.get('/books', (req, res) => {
  res.sendStatus(200)
  res.json('Testint this shit')
})

module.exports = router
