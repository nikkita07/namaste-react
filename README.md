########## NAMASTE REACT #####################

 # CDN(content delivery network ) for react 






//creating element in react 
<!-- 
<script>
    const heading = React.createElement("h1",{},"hello world");
    const root  = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
</script>
 -->

//nesting while creating element in react 
 <!--
  const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"hello world from h2"),React.createElement("h3",{},"hello world from h3")]));
   const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);
     -->


############## LIBRARY VS FRAMEWORK ###############
### Library :  predefined functions,classes that you use in your library. for ex: printf() in c.
## not a software
## Inversion of Control(IoC) : you call the library(in control)

### Framework : It's main function is helping you build a particular kind of application
## is a software
## Inversion of Control(IoC) : Framework calls your code(the control is inverted)
