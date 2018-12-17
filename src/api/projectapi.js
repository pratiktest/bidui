class ProjectApi {

  static getAllProjects(page, size) {
    return fetch(`http://localhost:8080/projects?page=${page}&size=${size}`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.message);
    });
  }

  static getBuyer(name) {
    return fetch(`http://localhost:8080/bidder/name/${name}`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.message);
    });
  }

  static placeBid(bidderId, projectId, bid) {
    return fetch(
      `http://localhost:8080/bidder/${bidderId}/project/${projectId}/bid`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bid),
      },
    )
  }

  static getBids(bidderId, projectId) {
    return fetch(`http://localhost:8000/project/${projectId}/bidder/${bidderId}/bids`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.message);
    });
  }

  static getSeller(name) {
    return fetch(`http://localhost:8080/projects`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.message);
    });
  }
}
export default ProjectApi;