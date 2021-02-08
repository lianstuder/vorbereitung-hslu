import * as mongoose from "mongoose";

interface IProject extends mongoose.Document {
  pjName: string;
  pjDesc: string;
  pjGithub: string;
}

const ProjectSchema = new mongoose.Schema({
  pjName: {
    type: String,
    required: true,
  },
  pjDesc: {
    type: String,
    required: true,
  },
  pjGithub: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model<IProject>("Project", ProjectSchema);
export default Project;
