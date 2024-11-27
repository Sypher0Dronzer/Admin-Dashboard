import { Link } from "react-router-dom"

const UnauthorisedPage = ({onlyManager}) => {
  return (
    <div className='h-screen px-4 w-screen flex flex-col gap-y-4 justify-center items-center'>

      <h1 className="text-primary md:text-4xl text-2xl  font-semibold">403 Access Denied</h1>
      <p className="text-error text-center md:text-2xl sm:text-xl font-normal">It seems you {"don't"} have permission to access this page. </p>
      {onlyManager?<p className="text-center">This page is only accessible to users with Manager role.</p>:<p className="">This page is only accessible to users with Admin or Manager roles.</p>}
      <Link to="/">
      <button className="btn btn-outline btn-secondary sm:btn-md btn-sm">Redirect to Home</button>
      </Link>
        
    </div>
  )
}

export default UnauthorisedPage
