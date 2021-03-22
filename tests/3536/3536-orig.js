class A { constructor ( ) { var hasProp = id_0 => { } 
Object .preventExtensions ( hasProp ) ; 
String ( Object .isSealed ( hasProp ) ) ; 
var keys = Object .getOwnPropertyNames ( hasProp ) ; 
String ( keys .length === 1 ) ; 
String ( keys [ 0 ] === "length" ) ; 
} f ( ) { return 10 ; 
} super ( ) { this .super = 10 ; 
return 15 ; 
} } 
class B extends A { constructor ( ) { super ( ) ; 
String ( super .f === A .prototype .f ) ; 
super .f = 8 ; 
String ( this .f === 8 ) ; 
String ( super .f === A .prototype .f ) ; 
String ( this .a === 5 ) ; 
super .a = 10 ; 
String ( this .a === 10 ) ; 
String ( super .super ( ) === 15 ) ; 
String ( this .super === 10 ) ; 
super .super = 20 ; 
String ( this .super === 20 ) ; 
String ( super .super ( ) === 15 ) ; 
} } 
var b = new B ; 
String ( b .f === 8 ) ; 
String ( b .a === 10 ) ; 