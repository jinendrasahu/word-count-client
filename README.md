# word-count-client (https://word-occurrence.netlify.app/)
this is a frontend part of word count which will take input n and show all n most frequently occurred word.

I have created react app by using CLI-npx create react app 
it installs some necessory modules autometically and creates some files so I deleted some unwanted files and deleted all the code 
from App.js and App.css so I can start from scratch.
I have used four useState React hooks(words,loading,num,error) to store data and rerender it in virtual DOM in realtime.
I have used react form to take the input of most frequently occurred words number from the user and a submit button which will call
a function conatining fetch function.
I have used fetch function which fetch api data with respect to the number from the input element this is an asynchronous function
so I have properly used data binding and error handling using then and catch function.
json data coming from api is iterating using map function and returning jsx element in the form of table content.which further assigned
to words(React hook) and displaying using jsx.

I can directly use and munipulate data from the api given by the company but I have created a node js server and from there I am fetching
data indirectly.

this is a small application so I have used default id from map fuction as key but for bigger project it is better to use unique id.

Test Cases:

1. User can enter any number.special charecter,alphabet so I have used input type number.so we don't need external input validation but
2. Now a number type input can also take .(Dot) and e(small e) as an input so I have used input validation before fetching the data from api
so if the input type is not numeric(0-9) then it will show error and if input value is a number(positive) then it will fetch data from api
3. Negative value can also be entered but as we know negative value contains -(special charecter) it will show error message same thing applies
   with decimals
4. I have used custom error message in catch function for assigning error message to error(React hook) because if we directly assign 
   error(catch function parameter) to hook and render it like this setError(err) then it will show error.another method to resolve it is
   to convert error to string by concatination.
   this will also solve internet connectivity error message.
5. if we uses && operator to render react hooks(ex: {words && words}) in jsx then it will give an error each time when DOM element 
   rerender the solution of this we can use conditional operator(?:) and null value (ex: {words?words:null})
