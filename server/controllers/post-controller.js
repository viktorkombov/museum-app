const { convertToLatin, getDate } = require("../helpers/utils");
const { postModel } = require("../models");

// function getPosts(req, res, next) {
//     postModel.getAll()
//         .then(([result]) => {
//             res.json(result)
//         })
//         .catch(next)
// }

function getPosts(req, res, next) {
    const queryParams = req.query.keys ? req.query.keys : '*';
    postModel.getSpecificColumns(queryParams)
        .then(([result]) => {
            res.json(result)
        })
        .catch(next)
}

async function getPost(req, res, next) {
    const { ID } = req.params;
    
    try {
        const post = await postModel.findById(ID);
        post[0][0].Count++;

        postModel.put({Count: post[0][0].Count}, ID)
        .then(updatedPost => {
            res.status(200)
                .send(post[0][0])
        }).catch(next);

    } catch(err) {
        next(err);
    }
}

function createPost(req, res, next) {
    const record = req.body;
    const translatedTitle = getDate() + convertToLatin(record.title, '_');

    record.ID = translatedTitle;
    record.Date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    record.count = 0;

    postModel.post(record)
        .then(createdPost => {
            res.status(200)
                .send(createdPost)
        }).catch(next);
}


function postEditPost(req, res, next) {
    const record = req.body;
    const { ID } = req.params;

    console.log(record);

    postModel.put(record, ID)
        .then(createdPost => {
            res.status(200)
                .send(createdPost)
        }).catch(next);
}

function deletePost(req, res, next) {
    const { ID } = req.params;

    postModel.DELETE(ID)
        .then(post => res.json(post))
        .catch(next);
}

function likePost(req, res, next) {
    const postId = req.params.postId;
    const { _id: userId } = req.user;
    postModel.findByIdAndUpdate({ _id: postId }, { $push: { likedBy: userId } }, { new: true })
        .then(updatedPost => {
            res.status(200).json(updatedPost)
        })
        .catch(next);
}


module.exports = {
    getPosts,
    createPost,
    getPost,
    likePost,
    postEditPost,
    deletePost
}
