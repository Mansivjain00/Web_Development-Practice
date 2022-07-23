console.log("Library Class Implementation");

class Library{
    constructor(booklist){
        this.booklist = booklist;
        this.issuedbook = {};
    }

    getBookList(){
        this.booklist.forEach(element => {
            console.log(element);
        });
    }

    issueBookList(bookname,user){
        if(this.issuedbook[bookname]==undefined){
            this.issuedbook[bookname]=user; 
        }
        else{
            console.log("Book already issued");
        }
    }

    returnBook(bookname){
       delete this.issuedbook[bookname];
    }
}

let mansiLib = new Library(['harry potter','divergent','insurgent']);
console.log(mansiLib.getBookList()); 

mansiLib.issueBookList('harry potter',"mansi");
mansiLib.returnBook('harry potter');
mansiLib.issueBookList('harry potter',"navi");
mansiLib.issueBookList('harry potter',"navi");