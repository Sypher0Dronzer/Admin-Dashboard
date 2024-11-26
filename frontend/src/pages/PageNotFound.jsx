import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className='h-screen w-screen flex flex-col gap-y-4 justify-center items-center'>

      <h1 className="text-primary text-5xl font-semibold">404 Error</h1>
      <p className="text-error text-2xl font-normal">Page Not Found</p>
      <Link to="/">
      <button className="btn btn-md btn-outline btn-secondary">Redirect to Home</button>
      </Link>
        
    </div>
  )
}

export default PageNotFound
