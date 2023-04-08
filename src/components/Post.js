function Post({ id, title, userId, body }) {
  return (
    <div className="block">
      <h1 className="blockText">userId: {userId}</h1>
      <h1 className="blockText">{id}</h1>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  )
}
export default Post
