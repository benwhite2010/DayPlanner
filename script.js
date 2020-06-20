/**Psuedocode start
* 1) Current time Display
*  first we create a container or div for the timer
    *We set the text content of the container to a variable
    *This variable will equal the current time
        *the jquery utilized will be the $(now) method
*2) Time blocks
    *create rows for each hour
    *utilizing jquery actively change the style of each block according to the time
        *if {} the current time is before the time block, set class to "past"
        *if {} the current time is within 1 hour of the time block, set class to "present"
        *if {} the current time is after the time block, set class to "future"
*3) Entering the data
    *Add event listeners to the rows, so that when you click on them, you are able to change the text content
        *utilize a prompt?  There is probably a better way but I dont have time right now
        *set the result of the prompt to the text content with .text method

*4) Save button
    *Add event listeners to the save buttons
        *when the user clicks, it creates a variable in localStorage associated with the assigned hourblock
        *If that hourblock already exists, it overwrites the stored data to the current input
            *includes .empty at the begining of the call to make sure the data is not added to the current data
        *The key will be the hour, the variable will be the input in the form of a string
    *This allows for the data to persist on page load


        


 */

console.log("workingS");
