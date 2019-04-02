function create(req, res) {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    })
    req.on('end', async () => {
        const parsedBody = querystring.parse(body);
        console.log('===================')
        console.log(parsedBody)
        console.log('^^^BODY OF FORM^^^^')
        const newUserID = await U
    })

    res.json({ message: "you created" });
};

function retrieveAll(req, res) {

    res.json({ message: "you retrieved" });
};

function getByID(req, res) {
    res.json({ message: `return book with id: ${req.params.id}` })
};

function update(req, res) {



    res.json({ message: "you updated" });
};

function deleteOne(req, res) {



    res.json({ message: "you deleted" });
};

module.exports = {
    create,
    retrieveAll,
    getByID,
    update,
    deleteOne
};