## What Is
We can use this project as the foundation for our capstone. We will build off of this using Asp.net Core backend and an Angular front end. Both client and server code are in the same project to keep things as simple as possible. We will use our skills to build MVC controllers to provide the data to our front end Angular web app. The data will be stored using Entity Framework with SQL, and the database will be built with EF data migrations. To interact with the data, we will build Angular components to provide the functionality of being able to view and create data through a web browser.

## Thinking Out Loud

### Loaning Books
So when you add a new book to your library, have an option to select "Borrowed". This will show a new form to collect info: from whom, when, and due?. 
When you edit a book, you'll have the option to loan a book out and the same info will be collected: to whom, when, and due?. 
When editing, if a book is already marked as borrowed or loaned, you can return it. 
Borrowed and loaned run off the same table.

Set an if statement in the add function for newBook: if loaned is true, call the loanController and pass the data.

### Book Cover
If I have the ISBN, I can get the correct book cover easy. But rather than put it on the user to get the ISBN, maybe I just have a "Select book cover" modal that shows all the results based on the title the user gives. 
Check OpenLibrary API for how book covers work (like moviedb?)

Ok. Got all the hookups, but need to learn how to access the docs array inside of results. searchResults.docs is where the actual data is.
The Solution:
this.results = this.bookService.searchResults[0].docs
It always returns an array of one with three items inside, docs being where all the good stuff is. searchResults.docs didn't work because it's not in the top array. 
Kind of a duh moment when I looked at it through Augury and realized there was one more nesting I needed to go through.

pattern for searching by title:
http://openlibrary.org/search.json?title=Rhythm+of+War
pattern for cover image:
http://covers.openlibrary.org/b/id/10150945-L.jpg

[OpenLibrary Search API](https://openlibrary.org/dev/docs/api/search)
[OpenLibrary Books API](https://openlibrary.org/dev/docs/api/books)

## Home Redo
Since you have to create an account to use Bookalog, the home page should sell the user on signing up. This is first impression, window shopping. This is not the place for a changelog. 

### Todo
+ [x] Create a changelog page with a link to it on the home page
+ [ ] Get screenshots of the app in action
+ [ ] Write a sales pitch
+ [x] Fix changelog link (add to footer?)