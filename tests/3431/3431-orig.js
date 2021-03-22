String ( ( function ( [ a ] , b , { c } ) { } ) .length === 3 ) ; 
function f ( [ a = "x" , b = "y" , c = "z" ] ) { String ( a === "a" ) ; 
String ( b === "b" ) ; 
String ( c === "z" ) ; 
} 
f ( "ab" ) 
function g ( { [ "x" + "y" ] : [ ] , } ) { String ( a === 1 ) ; 
String ( b === 5 ) ; 
} 
g ( { xy : { a : 1 } } ) ; 
function h ( [ , , a , , b , , ] ) { String ( a === 3 ) ; 
String ( b === 5 ) ; 
} 
h ( [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ] ) 
function i ( [ a ] = [ 42 ] , b = a ) { String ( a === 42 ) ; 
String ( b === 42 ) ; 
} 
i ( ) ; 
function j ( a , [ [ b = a , [ c ] = [ b ] , { d } = { d : eval ( "c" ) } ] , e = d + 1 ] = [ [ ] ] ) { String ( a === 8 ) ; 
String ( b === 8 ) ; 
String ( c === 8 ) ; 
String ( d === 8 ) ; 
String ( e === 9 ) ; 
} 
j ( 8 ) ; 
function k ( [ a = function ( ) { return a ; 
} ] ) { String ( typeof a === "function" ) ; 
String ( a ( ) === a ) ; 
} 
k ( [ ] ) ; 
function l ( a = 0 , ... [ b , c = 1 , d = 4 ] ) { String ( a === 1 ) ; 
String ( b === 2 ) ; 
String ( c === 3 ) ; 
String ( d === 4 ) ; 
} 
l ( 1 , 2 , 3 ) ;