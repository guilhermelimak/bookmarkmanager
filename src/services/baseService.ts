import { db } from './firebase'

const baseService = refPath => ({
  create: item =>
    new Promise((resolve, reject) => {
      const ref = db.ref(refPath).push()

      db.ref(`${refPath}/${ref}`).push({ ...item, id: ref })
    }),

  update: item =>
    new Promise((resolve, reject) => {
      const ref = db.ref(refPath).push()

      db.ref(`${refPath}/${ref}`).push({ ...item, id: ref })
    }),

  delete: item =>
    new Promise((resolve, reject) => {
      const ref = db.ref(`${refPath}/${item.id}`)
      ref.remove()
      resolve()
    }),

  read: itemId =>
    new Promise((resolve, reject) => {
      const ref = db.ref(`${refPath}/${itemId}`)
      ref.once('value', resolve)
    })
})
