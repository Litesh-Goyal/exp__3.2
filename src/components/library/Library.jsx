import { useState } from 'react';
import './Library.css';

function Library() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'S. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [search, setSearch] = useState('');

  const addBook = () => {
    if (title && author) {
      const newBook = { id: Date.now(), title, author };
      setBooks([...books, newBook]);
      setTitle(''); // Clear input
      setAuthor(''); // Clear input
    }
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="library-container">
      <h1>Library Management System</h1>
      
      <div className="search-section">
        <input 
          type="text" 
          placeholder="Search books..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="add-section">
        <input placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button onClick={addBook}>Add Book</button>
      </div>

      <div className="book-list">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-item">
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">by {book.author}</p>
            </div>
            <button className="remove-btn" onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
