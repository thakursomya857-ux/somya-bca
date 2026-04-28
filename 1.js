const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const container = document.getElementById('posts-container');

async function fetchAndDisplayData() {
  try {
   
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
  
    const data = await response.json();
    
    
    data.forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = 
      `<h2>${post.title}</h2>
      <p>${post.body}</p>`;
      container.appendChild(article);
    });
  } catch (error) {
    console.error('Failed to fetch data:', error);
    container.innerHTML = '<p>Error loading data.</p>';
  }
}


fetchAndDisplayData();   