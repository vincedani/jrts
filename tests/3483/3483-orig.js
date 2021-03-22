var src = "(function (" ; 
for ( var i = 0 ; i < 254 ; i ++ ) src += "a" + i + ", " ; 

src += "b) { var c = 1; })()" ; 
eval ( src ) ; 
var src = "(function (" ; 
for ( var i = 0 ; i < 255 ; i ++ ) src += "a" + i + ", " ; 

src += "b) { })()" ; 
try { eval ( src ) ; 
String ( false ) ; 
} catch ( e ) { String ( e instanceof SyntaxError ) ; 
} 
var src = "(function () {" ; 
for ( var i = 0 ; i < 400 ; i ++ ) src += "var a" + i + " = 5; " ; 

src += 'Setting `o.bar` to' ; 
eval ( src ) ; 