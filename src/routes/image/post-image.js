{
  /* <form action="/profile" method="post" enctype="multipart/form-data">
    <input type="file" name="avatar" />
  </form> */
}

const postImage = (request, response, next) => {
  console.log(request.body.userId);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  response.send({ status: "success" });
};

export default postImage;
