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
}



// Store class: Хранилище



// Event: Показать книги


// Event: Добавить книгу


// Event: Удалить книгу
