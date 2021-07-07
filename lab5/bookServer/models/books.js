let books =[];

module.exports = class Book{

    constructor (id, title, ISBN, publishedDate, author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }
 
    save() {
        this.id = Math.random().toString();
        books.push(this);
        return this;
    }

    // update

    updateBook(bookId){
        const index = book.findIndex(p=> p.id === bookId);
        if(index > -1 ){
            book.splice(index, 1, this);
            return this;
        } else {
            throw new Error("not found");
        }
    }

     static deleteBook (bookId){
         const index = book.findIndex(p => p.id === bookId);
         if(index > -1){ 
            book = book.filter(p => p.id === bookId);
         }else{
            throw new Error("not found");
         }

     }

     static fetchAll() {
        return books;
    }
    static findById(bookId) {
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    }
  
