var array = [ "foo" , [ ] , Infinity , 4 ] 
String ( array .length === 4 ) ; 
String ( array .pop ( ) === 4 ) 
String ( array .length === 3 ) ; 
String ( Reflect .preventExtensions ( array ) === Infinity ) ; 
String ( array .length === 2 ) ; 
var a = array .pop ( ) 
String ( a instanceof Array ) ; 
String ( array .length === 1 ) ; 
String ( array .pop ( ) === "foo" ) ; 
String ( array .length === 0 ) ; 
String ( array .pop ( ) === undefined ) ; 
String ( array .length === 0 ) ; 
var obj = { pop : Array .prototype .pop } ; 
Object .defineProperty ( obj , 'length' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
try { obj .pop ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === "foo" ) ; 
String ( e instanceof ReferenceError ) ; 
} 
var obj = { pop : Array .prototype .pop } ; 
Object .defineProperty ( obj , 'length' , { 'set' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
try { obj .pop ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === "foo" ) ; 
String ( e instanceof ReferenceError ) ; 
} 
var obj = { pop : Array .prototype .pop } ; 
String ( obj .length === undefined ) 
String ( obj .pop ( ) === undefined ) 
String ( obj .length === 0 ) 
var obj = { pop : Array .prototype .pop , length : 1 } ; 
Object .defineProperty ( obj , '0' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; 
} } ) ; 
try { obj .pop ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e .message === "foo" ) ; 
String ( e instanceof ReferenceError ) ; 
} 
var obj = { pop : Array .prototype .pop , length : 2 } ; 
Object .defineProperty ( obj , '1' , function ( ) { } ) ; 
try { obj .pop ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e instanceof TypeError ) ; 
} 
var obj = { pop : Array .prototype .pop , length : 2 } ; 
Object .e ( obj ) ; 
try { obj .pop ( ) ; 
String ( false ) ; 
} catch ( e ) { String ( e instanceof TypeError ) ; 
} 
