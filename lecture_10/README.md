# Angular Phonebook app

## commands to generate app and all its components

First of all you will need to install angular cli globaly 

### `npm install -g @angular/cli`

after that open dir where you want to generate an empty angular project. I our case application will be genareted from same dir like this readme file. 
`~/projects/javascript-matf-2019/lecture_10$`

Command to generate new empty angular project with name phonebook:

### `ng new phonebook --routing  --skip-git --style css`

this command will create new angular project with routing enabld, will skip git init, and will set css for stlyes.


Then we will need several things four app lest generate them first and to add more code later on.

Firstly we need to enter into phonebook folder -> `$ cd phonebook`, then we need to run some function for generating components

`ng g c components/entry-details`
`ng g c components/entry-list`
`ng g c components/entry-list-item`
`ng g c components/entry-edit`








