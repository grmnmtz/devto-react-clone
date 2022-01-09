const CommentSection = () => {
  const classes = {
    avatar: 'w-10 h-10 mx-4 rounded-full cursor-pointer',
    subscribe:
      'bg-gray-100 hover:bg-gray-200 hover:text-gray-600 text-gray-500 font-semibold py-2 px-3 rounded text-center border-2 border-gray-300 hover:border-gray-400',
    commentBorder: 'p-3 border rounded-md border-gray-300',
    commentsButtons:
      'px-2 py-1 mr-3 font-medium rounded-md hover:bg-gray-200 bg-slate-100 hover:font-medium',
    discussion: 'font-bold text-2xl',
  }

  return (
    <div className="w-3/4 p-10 bg-white">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2 className={classes.discussion}>Discussion (2)</h2>

          <button className={classes.subscribe}>Subscribe</button>
        </div>
        <div className="flex mt-4">
          <img
            className={classes.avatar}
            src="https://avatars.githubusercontent.com/u/1024025?v=4"
            alt="linus-avatar"
          ></img>
          <div className={classes.commentBorder}>
            <div className="flex">
              <h3 className="font-semibold mr-5">Linus Torvalds</h3>
              <h4>Oct 19 '21</h4>
            </div>
            <div className="mt-3">
              Looks like a helpful list. My feedback: I'm now thinking about the
              look and feel of the layout. For example, consider the simplest
              way to control colors and borders with react functional components
              that create a layout. Frameworks like Amplify explaining theming.
              Maybe there's something here to consider with themes and react and
              layout.
            </div>
            <div className="flex mt-3">
              <button className={classes.commentsButtons}>
                <span className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="https://cdn-icons.flaticon.com/png/512/2938/premium/2938590.png?token=exp=1641623580~hmac=0ccb0c42b7f6fc61e9b3d67fd5600ce5"
                    alt="like icon"
                  ></img>
                  3 Likes
                </span>
              </button>
              <div>
                <button className={classes.commentsButtons}>
                  <span className="flex items-center">
                    <img
                      className="w-4 h-4 mr-2"
                      src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png"
                      alt="reply icon"
                    ></img>
                    Reply
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <img
            className={classes.avatar}
            src="https://avatars.githubusercontent.com/u/150330?v=4"
            alt="kyle-avatar"
          ></img>
          <div className={classes.commentBorder}>
            <div className="flex">
              <h3 className="font-semibold mr-5">Kyle Simpson</h3>
              <h4>Nov 28 '21</h4>
            </div>
            <div className="mt-3">
              JSX allows you to write HTML-like syntax in JavaScript. It's
              agreeable to miss some of these small details when writing very
              involving articles like this one. Great job
            </div>
            <div className="flex mt-3">
              <button className={classes.commentsButtons}>
                <span className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="https://cdn-icons.flaticon.com/png/512/2938/premium/2938590.png?token=exp=1641623580~hmac=0ccb0c42b7f6fc61e9b3d67fd5600ce5"
                    alt="like icon"
                  ></img>
                  5 Likes
                </span>
              </button>
              <div>
                <button className={classes.commentsButtons}>
                  <span className="flex items-center">
                    <img
                      className="w-4 h-4 mr-2"
                      src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png"
                      alt="reply icon"
                    ></img>
                    Reply
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CommentSection }
