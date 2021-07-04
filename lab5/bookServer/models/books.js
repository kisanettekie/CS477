let books =[];

module.exports = class Book{

    constructor (id, title, ISBN, publishedDate, author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
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

    }
  
