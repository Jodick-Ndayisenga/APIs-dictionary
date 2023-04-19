# APIs-dictionary
This code is an HTML webpage that provides a basic interface to search for the definition and meaning of English words. 
The code consists of HTML, CSS, and JavaScript, and it makes use of the Oxford Dictionary API to fetch and display the meanings of English words.

The HTML part of the code provides the structure of the webpage, and it includes a title, 
some marquee tags for some scrolling text effects, a div element to hold the search box and search button, 
and another div element to hold the results of the word search. The CSS part of the code defines the styles and layout of the HTML elements.

The JavaScript part of the code contains the functionality of the webpage. 
It defines an async function fetch_TheWord() that fetches the meaning and definition of a word from the Oxford Dictionary API, 
and another function fit_inData() that displays the results on the webpage.

When the webpage loads, the fetch_TheWord() function is called with the word "welcome" as the default search term, 
and the fit_inData() function is called to display the results on the webpage. 
The fetch_TheWord() function is called again whenever the search button is clicked, and the search term is passed as an argument.

When the fetch_TheWord() function is called, it uses the fetch API to make a request to the Oxford Dictionary API using the search term, 
and then it waits for the response. When the response is received, it is converted to JSON using the json() method, 
and then the fit_inData() function is called with the JSON data as an argument.

The fit_inData() function takes the JSON data and uses it to populate the HTML elements with the word, phonetic, 
and definition of the word. It also handles cases where the word has multiple phonetics or definitions by using 
loops to iterate over the arrays and create new HTML elements for each item. Finally, 
the fit_inData() function displays the populated HTML elements on the webpage.
