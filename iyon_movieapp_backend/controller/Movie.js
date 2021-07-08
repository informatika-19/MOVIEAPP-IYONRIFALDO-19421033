const MovieModel = require('../model/Movie')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')

exports.insertMovie = (data) =>
  new Promise((resolve, reject) => {
    MovieModel.create(data)
      .then(() => resolve(requestResponse.sukses('Berhasil Input Movie')))
      .catch(() => reject(requestResponse.serverError))
  })

exports.getAllMovie = () =>
  new Promise((resolve, reject) => {
    MovieModel.find({})
      .then(movie => resolve(requestResponse.suksesWithData(movie)))
      .catch(error => reject(requestResponse.serverError))
  })

exports.getbyId = (id) =>
  new Promise((resolve, reject) => {
    MovieModel.findOne({
      _id: objectId(id)
    }).then(movie => resolve(requestResponse.suksesWithData(movie)))
      .catch(error => reject(requestResponse.serverError))
  })

exports.edit = (data, id, changeImage) =>
  new Promise((resolve, reject) => {
    MovieModel.updateOne({
      _id: objectId(id)
    }, data)
      .then(() => {
        if (changeImage) {
          deleteImage(data.oldImage)
        }
        resolve(requestResponse.sukses('Berhasil Edit Movie'))
      }).catch(() => reject(requestResponse.serverError))
  })

exports.delete = (id) =>
  new Promise((resolve, reject) => {
    MovieModel.findOne({
      _id: objectId(id)
    }).then(movie => {
      MovieModel.deleteOne({
        _id: objectId(id)
      }).then(() => {
        deleteImage(movie.image)
        resolve(requestResponse.sukses('Berhasil Delete Movie'))
      }).catch(() => reject(requestResponse.serverError))
    })
  })
