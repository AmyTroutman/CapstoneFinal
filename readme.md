## What Is
We can use this project as the foundation for our capstone. We will build off of this using Asp.net Core backend and an Angular front end. Both client and server code are in the same project to keep things as simple as possible. We will use our skills to build MVC controllers to provide the data to our front end Angular web app. The data will be stored using Entity Framework with SQL, and the database will be built with EF data migrations. To interact with the data, we will build Angular components to provide the functionality of being able to view and create data through a web browser.

## Thinking Out Loud

### Loaning Books
So when you add a new book to your library, have an option to select "Borrowed". This will show a new form to collect info: from whom, when, and due?. 
When you edit a book, you'll have the option to loan a book out and the same info will be collected: to whom, when, and due?. 
When editing, if a book is already marked as borrowed or loaned, you can return it. 
Borrowed and loaned run off the same table.

Set an if statement in the add function for newBook: if loaned is true, call the loanController and pass the data.