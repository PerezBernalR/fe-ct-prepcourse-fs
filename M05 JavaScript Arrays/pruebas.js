function colors(color) {
    // La función recibe un color. Retornar el string correspondiente:
    // En caso que el color recibido sea "blue"   --> "This is blue".
    // En caso que el color recibido sea "red"    --> "This is red".
    // En caso que el color recibido sea "green"  --> "This is green".
    // En caso que el color recibido sea "orange" --> "This is orange".
    // Si no es ninguno de esos colores           --> "Color not found".
    // IMPORTANTE: utilizar el statement SWITCH.
    // Tu código:
    if (color == 'blue')
    { return 'This is blue';
    } else if (color == 'red')
    { return 'Thi is red';
    } else if (color == 'green')
    { return 'This is green'
    } else if (color == 'orange')
    { return 'This is orange'
    } else 
    { return 'Color not found'
    }
    
 }
 var thiIs= colors('green');
 console.log(thiIs);