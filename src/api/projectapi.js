class ProjectApi {

  static getAllProjects() {
    return fetch(`http://localhost:8080/projects`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.message);
    });
  }
}
export default ProjectApi;