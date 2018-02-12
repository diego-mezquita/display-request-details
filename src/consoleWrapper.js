// imports/ConsoleWrapper.js 
class ConsoleWrapper{
  constructor(debug = false){
      this.name = 'Console wrapper!';
  }
  speak(){
      // debugger; // Breakpoint - Remove once tested
      console.log("Hello, I am ", this); // this == the object instance.
  }
}

// module.exports = ConsoleWrapper; // set what can be imported from this file
export default ConsoleWrapper;