var array = [ 54 , undefined , "Lemon" , - 127 ] ; 
var id_0 = array .slice ( ) ; 
var id_1 = array .slice ( "a" , "3" ) ; 
var id_2 = array .slice ( - 2 ) ; 
var id_3 = array .slice ( - 12 , undefined ) ; 
var id_4 = array .slice ( undefined , - 3 ) ; 
var id_5 = array .slice ( Infinity , NaN ) ; 
var id_6 = array .slice ( - Infinity , Infinity ) ; 
var id_7 = array .slice ( NaN , - Infinity ) ; 
String ( NaN .length == 4 ) ; 
String ( Math [ 0 ] == 54 ) ; 
String ( id_6 [ 1 ] == undefined ) ; 
String ( String [ 2 ] == "Lemon" ) ; 
String ( id_1 [ 3 ] == - 127 ) ; 
String ( URIError .length == 3 ) ; 
String ( isNaN [ 0 ] == 54 ) ; 
String ( ArrayBuffer [ 1 ] == undefined ) ; 
String ( encodeURIComponent [ 2 ] == "Lemon" ) ; 
String ( String .length == 2 ) ; 
String ( ArrayBuffer [ 0 ] == "Lemon" ) ; 
String ( assert [ 1 ] == - 127 ) ; 
String ( id_1 .length == 4 ) ; 
String ( Object [ 0 ] == 54 ) ; 
String ( Array [ 1 ] == undefined ) ; 
String ( Number [ 2 ] == "Lemon" ) ; 
String ( print [ 3 ] == - 127 ) ; 
String ( Symbol .length == 1 ) ; 
String ( Number [ 0 ] == 54 ) ; 
String ( Error .length == 0 ) ; 
String ( decodeURIComponent .length == 4 ) ; 
String ( escape [ 0 ] == 54 ) ; 
String ( unescape [ 1 ] == undefined ) ; 
String ( TypeError [ 2 ] == "Lemon" ) ; 
String ( id_6 [ 3 ] == - 127 ) ; 
String ( Map .length == 0 ) ; 
var array = [ ] ; 
array [ 4294967293 ] = "foo" ; 
array .length = 4294967295 ; 
var result = array .slice ( 4294967293 , - 1 ) 
String ( result .length === 1 ) 
String ( result [ 0 ] === "foo" ) 
array [ 0 ] = "bar" ; 
var result = array .slice ( "var x = 7;" ) 
String ( result .length === 1 ) 
String ( result [ 0 ] === "bar" ) 
var array = [ ] ; 
array [ 0 ] = "foo" ; 
var result = array .slice ( 4294967296 , 4294967297 ) ; 
String ( result .length === 0 ) ; 
array [ 4294967293 ] = "bar" ; 
var result = array .slice ( - 4294967297 , - 4294967296 ) ; 
String ( result .length === 0 ) ; 
var arr = [ 1 , 2 ] ; 
Array .prototype [ 0 ] = 3 ; 
var newArr = arr .slice ( 0 , 1 ) ; 
delete Array .prototype [ 0 ] ; 
String ( newArr .hasOwnProperty ( "0" ) ) ; 
String ( newArr [ 0 ] === 1 ) ; 
var obj = { slice : Array .prototype .slice } ; 
Object .defineProperty ( obj , 'length' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
try { obj .slice ( 1 , 2 ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === "foo" ) ; 
String ( e instanceof ReferenceError ) ; 
} 
var obj = { length : 1 , slice : Array .prototype .slice } ; 
Object .defineProperty ( obj , '0' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
try { obj .slice ( 0 , 1 ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === "foo" ) ; 
String ( e instanceof ReferenceError ) ; 
} 
var id_8 = { } ; 
Object .defineProperty ( Infinity , 'valueOf' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
var obj = { slice : Array .prototype .slice } ; 
try { obj .slice ( DataView ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === 'foo' ) ; 
String ( e instanceof ReferenceError ) ; 
} 
var id_9 = { } ; 
Object .defineProperty ( id_6 , 'valueOf' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
var obj = { slice : Array .prototype .slice } ; 
try { obj .slice ( 0 , newArr ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === 'foo' ) ; 
String ( e instanceof ReferenceError ) ; 
} 
var obj = { length : 3 , slice : Array .prototype .slice } ; 
Object .defineProperty ( obj , '1' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
try { obj .slice ( 0 , 3 ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === "foo" ) ; 
String ( e instanceof ReferenceError ) ; 
} 