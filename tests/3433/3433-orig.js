function id_0 ( code ) { try { eval ( code ) ; 
String ( false ) ; 
} catch ( e ) { String ( e instanceof SyntaxError ) ; 
} 
} 
id_1 ( "try {} catch() {}" ) ; 
id_2 ( "try {} catch([a] {}" ) ; 
id_3 ( "try {} catch([a] = [1]) {}" ) ; 
id_4 ( "try {} catch({a} = {a:1}) {}" ) ; 
id_5 ( "try {} catch(a,) {}" ) ; 
try { throw [ 1 , 2 ] 
String ( false ) 
} catch ( [ a , b ] ) { String ( a === 1 ) 
String ( b === 2 ) 
} 
try { throw { x : 1 , y : 2 } 
String ( false ) 
} catch ( { x , 'y' : b } ) { String ( x === 1 ) 
String ( b === 2 ) 
} 
try { throw [ 1 , 2 ] 
String ( false ) 
} catch ( [ { a : b } , b ] ) { eval ( "assert(a === 1)" ) 
eval ( "assert(b === 2)" ) 
} 
try { throw { x : 1 , y : 2 } 
String ( false ) 
} catch ( { x , 'y' : b } ) { eval ( "assert(x === 1)" ) 
eval ( "assert(b === 2)" ) 
} 
try { try { throw [ ] 
String ( false ) 
} catch ( [ a = b , b ] ) { String ( false ) 
} 
} catch ( e ) { String ( e instanceof ReferenceError ) 
} 