
const path = require('path')
const { User } = require('../../models/index')
const get = async (req, res) => {
    try {
        await res.sendFile(path.join(__dirname, '../public/index.html'))
    } catch (e) {
        console.log(e)
        await res.status(404).json({
            msg: "Not Found"
        })
    }
};

const post = async (req, res) => {

    const { username, email, phone, gender } = req.body;

    let hobbiesBody = req.body.hobbies;
    const hobbies = `${hobbiesBody}`


    try {

        const user = await User.create({ username, email, phone, gender, hobbies: hobbies })
        res.status(200).json({
            msg: "user created",
            data: user
        })

    } catch (e) {
        res.status(400).json({
            msg: `Something went wrong`
        ,
            error: `${e}`})
    };

}

module.exports = { get, post };
