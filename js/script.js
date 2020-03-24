// Book class: Показывает книгу
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}


// UI class: UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: "Book One",
                author: "John Doe",
                isbn: "3434434"
            },
            {
                title: "Book Two",
                author: "Jane Doe",
                isbn: "455445"
            }
        ];


        const books = StoredBooks;

        books.forEach((book) => {
            UI.addBookToList(book)
        })
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
        list.appendChild(row);
    }
}



// Store class: Хранилище



// Event: Показать книги
document.addEventListener("DOMContentLoaded", UI.displayBooks)

// Event: Добавить книгу


// Event: Удалить книгу
