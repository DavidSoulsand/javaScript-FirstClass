let numbers = ["One", "Two","Three","Four", "Five"];
document.write(numbers + "<br>");
//let varMethods = numbers.join("<br>Element:  ");
//let varMethods = numbers.slice(0,-1)
//let varMethods  = numbers.lastIndexOf("Five");
//document.write("Element: "+ varMethods);
//numbers.filter(numbers => document.write(numbers+"<br>"));
result = numbers.filter(numbers => numbers.length > 3);
document.write(result);