# ActionWrapper

In Salesforce, action functions are used to call controller methods in an async way. The usual flow would be

Create Action-function, Create JS function(that retrieve values,validations), Call JS function that will call Action function.

The main bottleneck(for me), in calling action function from JS functions is passing parameters and validations. Validations can be easily taken care of by JS library but for passing parameter its not the case. Also if the VF page is heavily driven by action function, then you ended up writing so many JS functions. This leads to code readability and maintainability issue.

# How Action Wrapper will help you ?

Instead of creating or writing js functions, all you need to do is, add configuration attributes at button and input levels. This is some what similar to angular directives. Action wrapper will take care of accessing elements values to passing values to action function. This help you to avoid JS code writing. 

# Configuration Directives

***Button Directives***

- **data-action** : This directive help wrapper to filter out buttons which will invoke action functions.
- **data-actionfunction** - This directive tells wrapper which action function need to be invoked.
- **data-parameter** - This directive tells wrapper, fields values that need to pass to action function. Field order is important.

***Input Directives***

- **data-defaultvalue** - If element value is null or empty, what should be the default value that need to pass to action function.

# Development In-Progress

- *Support to checkbox or multiselect picklist in-progress.*

# Upcoming Enhancements

- *Inbuilt field validations using html-5 with error message and position configuration.*
- *Status loader so no need to configure action status.*
- *Support to output panel re-rendering.*
