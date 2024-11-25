import express from 'express'
import { addMemberToProject, createProject, deleteProject, getAllProjects, removeMemberFromProject } from '../controllers/project.controller.js'

const route=express.Router()
route.get('/allProjects',getAllProjects)
route.post('/create',createProject)
route.post('/delete',deleteProject)
route.post('/addMember',addMemberToProject)
route.delete('/removeMember',removeMemberFromProject)


export default route