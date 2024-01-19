
import { uploadFileToFirebase } from "../assets/firebase.js";
import { Projects } from "../models/ProjectsModel.js";
import { MainDocument } from "../models/invoiceModel.js";

export const createProject = async (req, res) => {
  try {
    const {
      projectTitle,
      companyName,
      startDate,
      Deadline,
      customerId,
      amount,
      projectDescription,
      orderId,
      projectProgress,
      completed,
    } = req.body;

    const file = req.file;
    let fileData = null;

    if (file) {
      const result = await uploadFileToFirebase(file, "Project Files");
      fileData = {
        downloadURL: result.downloadURL,
        name: result.name,
        type: result.type,
      };
    };

    const paymentStatusData = await MainDocument.find({customerId:customerId}).exec();
    

    const projectData = await Projects.create({
      projectTitle,
      companyName,
      file: fileData,
      startDate,
      Deadline,
      customerId,
      orderId,
      amount,
      paymentStatus:paymentStatusData.paymentStatus || "unpaid",
      projectDescription,
      completed,
      projectProgress
    });

    return res.status(201).json({ msg: "Project created successfully", projectData });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

export const getAllProjects = async (req,res) => {
  try {
    const projects = await Projects.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({msg:error.message})
  }
};