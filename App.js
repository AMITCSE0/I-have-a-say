// console.log("amit");
let newreview, reviews;

newreview = document.getElementById("review");
reviews = document.getElementById("reviews");

function addReview() {
  if (newreview.value) {
    const review = document.createElement("li");
    review.innerText = newreview.value;
    replyLikeDelete(review);
    reviews.appendChild(review);
    newreview.value = null;
  }
}

function replyLikeDelete(review) {
  const reply = replyFn(review);
  const like = LIkeFn(review);
  const deleteBtn = deleteFn(review);
  review.append(reply, like, deleteBtn);
}

function replyFn(review) {
  const reply = document.createElement("button");
  reply.innerHTML = "Reply";
  reply.addEventListener("click", (evt) => {
    createReviewInput(review);
  });
  return reply;
}

function createReviewInput(review) {
  let add, cancel;
  const br = document.createElement("br");
  const textArea = document.createElement("TEXTAREA");
  cancel = cancelFn(br, textArea, add);
  add = AddFn(br, textArea, cancel, review);

  review.append(br, textArea, add, cancel);
}

function AddFn(br, textArea, cancel, review) {
  const add = document.createElement("button");
  add.innerHTML = "Add";
  add.addEventListener("click", (evt) => {
    const li = document.createElement("li");
    li.innerText = textArea.value;
    replyLikeDelete(li);

    textArea.value = null;
    br.remove();
    textArea.remove();
    add.remove();
    cancel.remove();
    const ul = document.createElement("ul");
    ul.appendChild(li);
    review.appendChild(ul);
  });
  return add;
}

function cancelFn(br, textArea, add) {
  const cancel = document.createElement("button");
  cancel.innerHTML = "Cancel";
  cancel.addEventListener("click", (evt) => {
    br.remove();
    textArea.remove();
    add.remove();
    cancel.remove();
  });
  return cancel;
}

function LIkeFn(review) {
  const like = document.createElement("button");
  like.innerHTML = "Like= 0";
  like.addEventListener("click", (evt) => {
    let count = like.innerText.split(" ")[1];
    count++;
    like.innerHTML = `Like= ${count}`;
  });
  return like;
}

function deleteFn(review) {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", (evt) => {
    review.remove();
  });
  return deleteBtn;
}
