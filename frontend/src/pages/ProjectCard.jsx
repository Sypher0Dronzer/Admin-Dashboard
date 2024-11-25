import { IoMdMore } from "react-icons/io";
const ProjectCard = ({ detail }) => {
  const { name, projectLead,  tags, team, status } =
    detail;
{console.log([projectLead])}
  // Calculate the number of additional members if there are more than 4
  const additionalMembers = team.length > 4 ? team.length - 4 : 0;

  return (
    <div className="bg-base-100 p-4 shadow-md card">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">
          {name.length > 20 ? name.slice(0, 18) + "..." : name}
        </h1>
        <div className="dropdown dropdown-bottom dropdown-end ">
          <div tabIndex={0} role="button" className="btn btn-sm btn-ghost btn-circle">
          <IoMdMore className="text-lg" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-neutral text-neutral-content rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        
      </div>

      {/* Lead Details */}
      <div className="flex items-center mb-4 space-x-4">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src={projectLead.profileImg}
              alt="Avatar"
            />
          </div>
        </div>
        <div>
          <p className="text-xs text-accent">Project Lead</p>
          <h1 className="text-md font-medium">{projectLead.name}</h1>
          <p className="text-sm text-secondary">{projectLead.email}</p>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h4 className="font-semibold mb-2">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="badge badge-outline">
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="badge badge-outline">+{tags.length - 3}</span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
      {/* Members Avatar Group */}
        <div className="avatar-group -space-x-4 rtl:space-x-reverse  ">
          {/* Display 4 avatars */}
          {Array.from({ length: Math.min(team.length, 4) }).map(
            (_, index) => (
              <div key={index} className="avatar">
                <div className="w-8">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Avatar"
                  />
                </div>
              </div>
            )
          )}

          {/* Show the +X placeholder if more than 4 members */}
          {additionalMembers > 0 && (
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-8">
                <span>+{additionalMembers}</span>
              </div>
            </div>
          )}
        </div>
        <div
          className={`badge ${
            status === "ongoing" ? "badge-primary" : "badge-accent"
          }`}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
