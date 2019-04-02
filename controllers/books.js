function create(req, res) {
    res.json({ message: "you created" });
};

function retrieveAll(req, res) {



    res.json({ message: "you retrieved" });
};

function getById(req, res) {

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
    update,
    deleteOne
};