const router = require("express").Router();
let Blogposts = require("../models/blogpost.model");
let User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.route("/").get((req, res) => {
  const token = req.headers["x-access-token"];

  const decoded = jwt.verify(token, "secret123");
  const email = decoded.email;
  Blogposts.find({
    username: email,
  })
    .then((blogpost) => {
      res.json(blogpost);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post(async (req, res) => {
  // const token = req.headers["x-access-token"];

  // const decoded = jwt.verify(token, "secret123");
  // const email = decoded.email;

  // const username = email;
  const post = req.body.post;

  const newBlogPost = new Blogposts({
    post,
  });

  newBlogPost
    .save()
    .then(() => res.json("Post successfully uploaded"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  Blogposts.findById(req.params.id)
    .then((blogpost) => res.json(blogpost))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  blogpost = Blogposts.findByIdAndDelete(req.params.id)
    .then(() => res.json({ status: "ok", blogpost }))
    .catch((err) => res.status(400).json({ error: err }));
});
router.route("/update/:id").put(async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const { id: id } = req.params;
    const post = await Blogposts.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      upsert: true,
    });
    if (!post) {
      return res.status(404).json({ msg: `no Goal with id : ${id}` });
    }
    res.status(200).json({ post });
  } catch (err) {
    res.json({ msg: "eodif" });
    console.log(err);
  }
});

module.exports = router;
