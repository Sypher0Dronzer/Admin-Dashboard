import { Link } from "react-router-dom"

const UnauthorisedPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col gap-y-4 justify-center items-center'>

      <h1 className="text-primary text-4xl font-semibold">403 Access Denied</h1>
      <p className="text-error text-2xl font-normal">It seems you {"don't"} have permission to access this page. </p>
      <p className="">This page is only accessible to users with Admin or Manager roles.</p>
      <Link to="/">
      <button className="btn btn-outline btn-secondary">Redirect to Home</button>
      </Link>
        
    </div>
  )
}

export default UnauthorisedPage
