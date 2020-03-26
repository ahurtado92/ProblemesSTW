/**
 * Tanto la función 'array.forEach()' como la función 'fs.readFile()' son funciones asíncronas
 * por lo que, de implementar la variable 'index' de esa forma podría desembocar en un problema
 * de sincronicidad a la hora de hacer los accesos o las asignaciones a los arrays, causando así
 * que no se produzca un resultado consistente y/o correcto.
 */