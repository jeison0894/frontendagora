////link para post
export const API_URLP = "http://localhost:3005/api/agora/new-project";
////link para get
const API_URL = "http://localhost:3005/api/agora/get-projects";
////link para get-one
/* const API_URL2 = `http://localhost:3005/api/agora/get-one-project/${}`; */
////link para get-one
const API_URL2 = `http://localhost:3005/api/agora/get-one-project`;

export const listProjects = async () => {
  return await fetch(API_URL);
};

export const oneproject = async (id) => {
  return await fetch(`${API_URL2}/${id}`);
};

export const registerProject = async (newProject) => {
  return await fetch(API_URLP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(newProject.name).trim(),
      context: String(newProject.context).trim(),
      date: String(newProject.date).trim(),
      deliverables: String(newProject.deliverables).trim(),
      description: String(newProject.description).trim(),
      evaluationModality: String(newProject.evaluationModality).trim(),
      pedagogyModality: String(newProject.pedagogyModality).trim(),
      performance: String(newProject.performance).trim(),
      picture: String(newProject.picture).trim(),
      resources: Array(newProject.resources),
      tags: Array(newProject.tags),
      competencies: Array(newProject.competencies),
      competenceFramework: String(newProject.competenceFramework).trim(),
    }),
  });
};
