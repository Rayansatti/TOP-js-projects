//preventing form default

let testform = document.getElementById("form");

testform.addEventListener("submit", testSubmition);

function testSubmition(event){
    

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
    
    
    

    //the constructor for a book
    function Book() {
        
    
        let Name = document.getElementById("bookName").value;
        let auther = document.getElementById("auther").value;
        let year = document.getElementById("year").value;
        let readStatus = document.getElementById("readStatus").value;
    
        this.name = Name;
        this.auther = auther;
        this.year = year;
        this.readStatus = readStatus;
        //console.log(testTitle);
    }
    
    // the function that adds a new book to the library
    function addBookToLibrary(){
        
        
        let newBook = new Book();
        myLibrary.push(newBook);
        //console.log(myLibrary);
        //console.log(newBook);
  
      
    }

    

   
    

  
    //creates Dom elements to wrap and display the books
    let bookShelf = document.getElementById("output");
    let ulElement = document.createElement("div");
    ulElement.textContent = "";
    ulElement.id = "ulElement";


    
    function bookDisplay(){

        //accesses objects within mylibrary array and 
        //adds their key value pairs into another array to create array or arrays
        
        let booksArr = [];
        for(let x in myLibrary){
            let bookObject = myLibrary[x];
             //console.log(typeof bookObject);

             
             Object.entries(bookObject).forEach(([key, value]) => {
                    //console.log(key + ": " + value);
                    
                    booksArr.push(key + ": " + value);
                   
                    
                })
             //console.log(typeof bookObject);
             
          
             console.log(booksArr);
            

            
        }


        //separate each book details and sends it to be displayed in the DOM
        let chunckSize = 4;
        let chunck = [];

        for(let i = 0; i < booksArr.length; i += chunckSize){
            chunck.push(booksArr.slice(i, i + chunckSize));
        }
        chunck.forEach((item) => {

            const removeButton = document.createElement("button");

            removeButton.textContent = 'Remove';
            removeButton.id = 'reomveButton';
             
            const section = document.createElement("section");
            
            section.textContent = (item + "\n");

            ulElement.appendChild(section);

            section.appendChild(removeButton);

            console.log( typeof item)


             //remove books
            removeButton.addEventListener("click", function(){

                //what happens after clicking the button
                section.textContent = "";
                
                
            })
            
        })
        }

        

        
        bookShelf.appendChild(ulElement);

        
    
    
    addBookToLibrary();
    bookDisplay();

    
}