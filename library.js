//preventing form default

let testform = document.getElementById("form");



testform.addEventListener("submit", testSubmition);

function testSubmition(event){
    //let warn = "preventDefault() won't let you type this";

    //document.getElementById("output").innerHTML += warn;

    event.preventDefault();

    const nameInput = document.getElementById("bookName").value;
    const autherInput = document.getElementById("auther").value;
    const yearInput = document.getElementById("year").value;
    const statusInput = document.getElementById("readStatus").value;

    //declaring inputs

    let name = '';
    let auther = '';
    let year = '';
    let readStatus = '';

    if(nameInput === "" || autherInput === "" || yearInput === "" || statusInput === ""){
        console.log("empty form");
        return;
    }else{
        name = nameInput;
        auther = autherInput;
        year = yearInput;
        readStatus = statusInput;

    }

    // array for library books
    const myLibrary = [
        {name:"Across mountains, land & sea", 
        auther: "Azadi, Arman", 
        year: "2024",
        readStatus: "read"
        },
    
        {name:"Act of defiance", 
        auther: "Andrews, Brian", 
        year: "2024",
        readStatus: "read"
        },
    
        {name:"Alaska", 
        auther: "Kirkland, Erin", 
        year: "2024",
        readStatus: "read"
        }
    ];
    
    //console.log(myLibrary);
    

    //the constructor for a book
    function Book() {
        //some code
    
        let Name = document.getElementById("bookName").value;
        let auther = document.getElementById("auther").value;
        let year = document.getElementById("year").value;
        let readStatus = document.getElementById("readStatus").value;
    
        this.name = Name;
        this.auther = auther;
        this.year = year;
        this.readStatus = readStatus;
        console.log(testTitle);
    }
    
    // the function that adds a new book to the library
    function addBookToLibrary(){
        //add stuff
        
        let newBook = new Book();
        myLibrary.push(newBook);
        console.log(myLibrary);
        console.log(newBook);
      
    }
    
    addBookToLibrary();
    
}
 



