import Project from "../models/project.model.js";
import User from '../models/user.model.js'
export const getAllProjects = async (req, res) => {
  try {
    // Fetch all projects from the database
    const projects = await Project.find();

    // Helper function to fetch user details excluding the password
    const getUserDetails = async (userId) => {
      const user = await User.findById(userId).select("-password"); // Exclude password
      return user;
    };

    // Helper function to update the user's projects array in the database
    const updateUserProjects = async (userId, projectId) => {
      // Add the project ID to the user's projects array if it's not already there
      await User.findByIdAndUpdate(
        userId,
        {
          $addToSet: { projects: projectId }, // Using $addToSet to avoid duplicates
        },
        { new: true } // Return the updated document
      );
    };

    // Process projects to replace team IDs with user details and check for project ID in user details
    const updatedProjects = await Promise.all(
      projects.map(async (project) => {
        // Decode team member details
        const teamWithDetails = await Promise.all(
          project.team.map(async (teamMemberId) => {
            const userDetails = await getUserDetails(teamMemberId);
            
            // Check if the project ID exists in the user's projects array
            if (!userDetails.projects.includes(project._id.toString())) {
              // Add the project ID to the user's projects array
              await updateUserProjects(teamMemberId, project._id);
            }

            return userDetails;
          })
        );

        // Decode project lead details and check if the project ID exists
        const projectLeadDetails = await getUserDetails(project.projectLead);
        if (!projectLeadDetails.projects.includes(project._id.toString())) {
          // Add the project ID to the project lead's projects array
          await updateUserProjects(project.projectLead, project._id);
        }

        // Return updated project object with user details
        return {
          ...project.toObject(),
          team: teamWithDetails, // Updated team with user details
          projectLead: projectLeadDetails, // Updated project lead with user details
        };
      })
    );

    console.log(updatedProjects);
    res.status(200).json({ success: true, projects: updatedProjects });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



export const createProject = async (req, res) => {
  try {
    const { name, projectLead, tags, team, status } = req.body;

    const newProject = new Project({
      name,
      projectLead,
      tags,
      team,
      status,
    });

    const savedProject = await newProject.save();
    res.status(201).json({ success: true, project: savedProject });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return res.status(404).json({ success: false, error: "Project not found" });
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      deletedProject,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const addMemberToProject = async (req, res) => {
  try {
    const { projectId, userId } = req.body;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ success: false, error: "Project not found" });
    }

    if (project.team.includes(userId)) {
      return res
        .status(400)
        .json({ success: false, error: "User is already a member of this project" });
    }

    project.team.push(userId);
    await project.save();

    res.status(200).json({ success: true, message: "Member added successfully", project });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const removeMemberFromProject = async (req, res) => {
  try {
    const { projectId, userId } = req.body;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ success: false, error: "Project not found" });
    }

    if (!project.team.includes(userId)) {
      return res
        .status(400)
        .json({ success: false, error: "User is not a member of this project" });
    }

    project.team = project.team.filter(
      (memberId) => memberId.toString() !== userId
    );

    await project.save();

    res.status(200).json({ success: true, message: "Member removed successfully", project });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
