//your JS code here. If required.
// Select elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Add book on submit
submitBtn.addEventListener('click', function() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (!title || !author || !isbn) {
    alert('Please fill in all fields');
    return;
  }

  // Create a new row
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  bookList.appendChild(row);

  // Clear input fields
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';

  // Add event listener to delete button
  row.querySelector('.delete').addEventListener('click', function() {
    row.remove();
  });
});
