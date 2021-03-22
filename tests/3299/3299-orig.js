var local = 0 ; 
switch ( 0 ) { default : function f ( a = ( 5 , local = 6 ) , b = ( ( 5 + function ( a = 6 ) { return a 
} ( ) * 3 ) ) , c , d = true ? 1 : 2 ) { return "" + a + ", " + b + ", " + c + ", " + d ; 
} 
print ( f ( ) === "6, 23, undefined, 1" ) ; 
print ( local === 6 ) ; 
var obj = { f : function ( a = [ 10 , , 20 ] , b , c = Math .cos ( 0 ) , d ) { return "" + a + ", " + b + ", " + c + ", " + d ; 
} } ; 
print ( obj .f ( ) === "10,,20, undefined, 1, undefined" ) ; 
function g ( a , b = ( local = 7 ) ) { } 
local = 0 ; 
g ( ) ; 
print ( local === 7 ) ; 
local = 0 ; 
g ( 0 ) ; 
print ( local === 7 ) ; 
local = 0 ; 
g ( 0 , undefined ) ; 
print ( local === 7 ) ; 
local = 0 ; 
g ( 0 , null ) ; 
print ( local === 0 ) ; 
local = 0 ; 
g ( 0 , false ) ; 
print ( local === 0 ) ; 
break ; 
} 
function CheckSyntaxError ( str ) { try { eval ( str ) ; 
print ( false ) ; 
} catch ( e ) { print ( e instanceof SyntaxError ) ; 
} 
} 
CheckSyntaxError ( 'function x(a += 5) {}' ) ; 
CheckSyntaxError ( 'function x(a =, b) {}' ) ; 
CheckSyntaxError ( 'function x(a = (b) {}' ) ; 
CheckSyntaxError ( 'function x(a, a = 5) {}' ) ; 
CheckSyntaxError ( 'function x(a = 5, a) {}' ) ; 
var str = "a = 5, b, c = function() { for (var a = 0; a < 4; a++) ; return a; } ()" 
var f = new Function ( str , str ) ; 
f ( ) ; 
var f = new Function ( str , "return (a + c) * (b == undefined ? 1 : 0)" ) ; 
print ( f ( ) == 9 ) ; 
function duplicatedArg ( a = c , b = d , c ) { print ( a === 1 ) ; 
try { var id_0 = eval ; 
var id_1 = "str1" ; 
if ( id_2 ( "\'str\' === __10_4_2_1_1_1" ) === true && eval ( "\'str1\' === __10_4_2_1_1_1" ) === true ) { return true ; 
} 

return false ; 
} finally { delete this .f ; 
} 
print ( c === 3 ) ; 
} 
duplicatedArg ( 1 , 2 , 3 ) ; 
