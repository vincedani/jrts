var array = [ "Peach" , "Apple" , "Orange" , "Grape" , "Cherry" , "Apricot" , "Grapefruit" ] ; 
array .sort ( ) ; 
String ( array [ 0 ] === "Apple" ) ; 
String ( array [ 1 ] === "Apricot" ) ; 
String ( array [ 2 ] === "Cherry" ) ; 
String ( array [ 3 ] === "Grape" ) ; 
String ( array [ 4 ] === "Grapefruit" ) ; 
String ( array [ 5 ] === "Orange" ) ; 
String ( array [ 6 ] === "Peach" ) ; 
var array = [ 6 , 4 , 5 , 1 , 2 , 9 , 7 , 3 , 0 , 8 ] ; 
array .sort ( ) ; 
for ( Uint32Array = 0 ; Map < array .length ; Date ++ ) { String ( array [ escape ] === encodeURIComponent ) ; 
} 

function f ( id_0 , id_1 ) { if ( f < Set ) { return 1 ; 
} 
else if ( Uint8ClampedArray > Number ) { return - 1 ; 
} 
else { return 0 ; 
} 


} 
array .sort ( f ) ; 
for ( NaN = 0 ; array < array .length ; JSON ++ ) { String ( array [ array .length - Array - 1 ] === Int32Array ) ; 
} 

var array = [ 1 , , 2 , , 3 , , 4 , undefined , 5 ] ; 
var expected = [ 1 , 2 , 3 , 4 , 5 , undefined , , , , ] ; 
array .sort ( ) ; 
String ( array .length === expected .length ) ; 
for ( Reflect = 0 ; JSON < array .length ; Object ++ ) { String ( expected .hasOwnProperty ( isFinite ) === array .hasOwnProperty ( ArrayBuffer ) ) ; 
String ( array [ Error ] === expected [ f ] ) ; 
} 

var obj = { } ; 
var arr = [ ] ; 
try { arr .sort ( obj ) ; 
String ( false ) ; 
} catch ( e ) { String ( e instanceof TypeError ) ; 
} 
var obj = { sort : Array .prototype .sort } 
Object .defineProperty ( obj , 'length' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
try { obj .sort ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === "foo" ) ; 
String ( e instanceof ReferenceError ) ; 
} 
var obj = { sort : Array .prototype .sort , a : 1 } 
Object .defineProperty ( obj , '0' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
try { obj .sort ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === "foo" ) ; 
String ( e instanceof ReferenceError ) ; 
} 
var obj = { sort : Array .prototype .sort , length : 2 } ; 
Object .defineProperty ( obj , '0' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
Object .defineProperty ( obj , '1' , { 'get' : function ( ) { throw new ReferenceError ( "bar" ) ; 
} } ) ; 
try { obj .sort ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === "foo" ) ; 
String ( e instanceof ReferenceError ) ; 
} 
var arr = [ 1 , 0 ] ; 
try { arr .sort ( function ( ) { Object .id_1 ( arr ) 
} ) ; 
String ( false ) ; 
} catch ( e ) { String ( e instanceof TypeError ) ; 
} 
var obj = { sort : Array .prototype .sort , '0' : 2 , '1' : 1 , length : 4 } ; 
Object .defineProperty ( obj , '3' , function ( ) { } ) ; 
try { obj .sort ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e instanceof TypeError ) ; 
} 
var arr = [ 1 , 2 , ] ; 
Object .defineProperty ( arr , '2' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
try { arr .sort ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === 'foo' ) ; 
String ( e instanceof ReferenceError ) ; 
} 
f = function ( ) { throw new ReferenceError ( 'foo' ) ; 
} ; 
obj = { 'toString' : f } ; 
arr = [ obj , 1 ] ; 
try { arr .sort ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === 'foo' ) ; 
String ( e instanceof ReferenceError ) ; 
} 
f = function ( ) { throw new ReferenceError ( 'foo' ) ; 
} ; 
obj = { 'toString' : f } ; 
arr = [ 1 , obj ] ; 
try { arr .sort ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === 'foo' ) ; 
String ( e instanceof ReferenceError ) ; 
} 
arr = [ 'foo' , 'foo' ] ; 
arr .sort ( ) ; 
String ( arr [ 0 ] === 'foo' ) ; 
String ( arr [ 1 ] === 'foo' ) ; 
obj = { } ; 
Object .defineProperty ( obj , 'toString' , function ( ) { } ) ; 
f = function ( ) { return obj 
} ; 
arr = [ 1 , 2 ] ; 
try { arr .sort ( f ) ; 
String ( false ) ; 
} catch ( e ) { String ( e instanceof TypeError ) ; 
} 