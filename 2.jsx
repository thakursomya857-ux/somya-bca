let blogs = [];
const container = document.getElementById('posts-container');
const fetchButton = document.querySelector('button');

function fetchBlogs() {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      blogs = data;
      renderBlogs();
    })
    .catch((error) => console.error("Error fetching blogs:", error));
}

function renderBlogs() {
  container.innerHTML = '<h2>My Blog...</h2>';
  blogs.slice(0, 5).forEach((blog) => {
    const blogDiv = document.createElement('div');
    blogDiv.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.body}</p>
    `;
    container.appendChild(blogDiv);
  });
}

fetchButton.addEventListener('click', fetchBlogs);
fetchBlogs();