const hello = (req, res) => {
    return res.status(200).json({"message": "Hello WORLD"})
}

module.exports = hello