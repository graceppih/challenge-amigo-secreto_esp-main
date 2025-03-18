Challenge Amigo Secreto

Este proyecto permite gestionar una lista de amigos y realizar un sorteo de "Amigo Secreto" de manera automática.



Características

Agregar amigos a una lista sin permitir nombres duplicados.

Mostrar la lista de amigos en la interfaz.

Realizar un sorteo asegurando que nadie se asigne a sí mismo como amigo secreto.

Mostrar el resultado del sorteo en la pantalla.

Limpiar la lista después del sorteo para repetir si es necesario.

Uso

Agregar Amigos: Escribe el nombre de un amigo en el campo de entrada y agrégalo a la lista.

Ver Lista: Los nombres agregados se mostrarán en la pantalla.

Sortear Amigos: Presiona el botón de sorteo y se generará un emparejamiento aleatorio.

Ver Resultados: Los resultados se mostrarán en pantalla indicando quién es el "Amigo Secreto" de quién.

Requisitos

Este código está diseñado para ejecutarse en un entorno con HTML y JavaScript. Debe incluir elementos con los siguientes identificadores en el HTML:

#amigo (input donde se ingresan los nombres)

#listaAmigo (lista donde se muestran los amigos agregados)

#resultado (contenedor donde se muestran los resultados del sorteo)

Funciones Principales

agregarAmigo()

Agrega un amigo a la lista si no está vacío y si no está repetido.

renderizarAmigos()

Actualiza la lista de amigos en pantalla.

sortearAmigo()

Realiza el sorteo asegurando que nadie se asigne a sí mismo como amigo secreto y muestra los resultados en la pantalla.

Notas

Se requiere un mínimo de 2 amigos para poder realizar el sorteo.

Si el sorteo no es válido (por ejemplo, un solo participante queda con su propio nombre), se reinicia automáticamente.

La lista se limpia después de cada sorteo para permitir nuevos emparejamientos.

Autor

Desarrollado como una solución sencilla para organizar sorteos de "Amigo Secreto" de manera automatizada.

