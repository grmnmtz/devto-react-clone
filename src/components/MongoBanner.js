const MongoBanner = () => {
  const enterButton =
    'my-6 px-6 py-4 border-2 text-2xl font-bold border-black  text-black bg-indigo-100'

  const closeButton = 'absolute top-6 right-12 text-3xl font-bold'

  const bannerContainer =
    'container rounded-md flex justify-around p-8 mx-auto px-4 relative bg-purple-100'

  const dateText = 'text-lg font-bold mt-4'

  const bannerHeroText = 'text-5xl font-extrabold mt-2 leading-normal'

  const bannerParagraph = 'text-2xl mt-4 font-semibold'

  const imagesContainer = 'flex-col items-center content-center mt-4'

  return (
    <>
      <div className={bannerContainer}>
        <button className={closeButton}>X</button>
        <div className="flex-col">
          <h4 className={dateText}>Dec 13 - Jan 13, 2022</h4>
          <h1 className={bannerHeroText}>
            There's Still Time to
            <br></br>
            Join the MongoDB
            <br></br>
            Atlas Hackathon on
            <br></br>
            DEV!
          </h1>
          <h2 className={bannerParagraph}>
            Build an application using MongoDB Atlas for
            <br></br>
            your chance to win up to $1,500 USD in cash &<br></br>
            lots more!
          </h2>
          <button className={enterButton}>Enter Today</button>
        </div>
        <div className={imagesContainer}>
          <div className="flex justify-center">
            <img
              className="object-contain h-20 w-96"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--_i2PSewP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_420/https://jess.forem.lol/images/ci_CNKReu_444X1CRf6GiNzR-VG1imCdc6LjkGzaRHM/w:420/mb:500000/ar:1/aHR0cHM6Ly9qZXNz/LmZvcmVtLmxvbC9y/ZW1vdGVpbWFnZXMv/dXBsb2Fkcy9hcnRp/Y2xlcy8zNzR6Njhr/bjdoczRpbGV6dDBw/Mi5wbmc"
              alt="mongo-logo"
            ></img>
          </div>
          <h2 className="text-center text-7xl font-bold">+</h2>
          <div className="flex justify-center">
            <img
              className="object-scale-down h-72 w-72"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--RyUzWNnG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_420/https://jess.forem.lol/images/ODqkZXmDCSLMw7clKIw6fdJE_dxgXoQ9Pz5aE4RXgHA/w:420/mb:500000/ar:1/aHR0cHM6Ly9qZXNz/LmZvcmVtLmxvbC9y/ZW1vdGVpbWFnZXMv/dXBsb2Fkcy9hcnRp/Y2xlcy83NzFicG1t/M25yaXVhcG0zdHpp/ay5wbmc"
              alt="devto-logo"
            ></img>
          </div>
        </div>
      </div>
    </>
  )
}

export { MongoBanner }