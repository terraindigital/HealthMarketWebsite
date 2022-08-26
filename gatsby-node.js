const path = require("path")
const fs = require("fs")

exports.onPostBuild = () => {
  fs.renameSync(
    path.join(__dirname, "public/static"),
    path.join(__dirname, "public/static1")
  )
}