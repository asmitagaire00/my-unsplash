const Post = require("../models/Post");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    return await res.status(200).json(posts);
  } catch (err) {
    console.log("error occured in server get request", err);
    res.status(403).json({ message: "error occuured in server get request" });
  }
});

router.post("/", async (req, res) => {
  const { labelInput: imgLabel, urlInput: imgUrl } = req.body;

  try {
    const newPost = new Post({
      label: imgLabel,
      url: imgUrl,
    });

    await newPost.save();
    console.log(newPost.createdAt);

    return res.status(200).json(newPost);
  } catch (err) {
    console.log("couldnot post image error from server post request", err);
    return res
      .status(403)
      .json({ message: "error occured in server post request" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    console.log("deleted post", deletedPost);
    const updatedPost = await Post.find();
    console.log("updated post", updatedPost);
    return res.status(200).json(updatedPost);
  } catch (err) {
    console.log("error occured in server delete request", err);
    res
      .status(404)
      .json({ message: "error occuured in server delete request" });
  }
});

module.exports = router;
