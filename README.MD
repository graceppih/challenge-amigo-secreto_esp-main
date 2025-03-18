Challenge Amigo Secreto

Este proyecto permite gestionar una lista de amigos y realizar un sorteo de "Amigo Secreto" de manera automática.

![Image](https://github.com/user-attachments/assets/2923fb64-5e19-46ed-89ff-349bedfeee81)

 Características

:arrow_forward: Agregar amigos a una lista sin permitir nombres duplicados.

:arrow_forward: Mostrar la lista de amigos en la interfaz.

:arrow_forward: Realizar un sorteo asegurando que nadie se asigne a sí mismo como amigo secreto.

:arrow_forward: Mostrar el resultado del sorteo en la pantalla. :computer:

:arrow_forward: Limpiar la lista después del sorteo para repetir si es necesario.

![Image](https://github.com/user-attachments/assets/e7ca90e4-10ea-4ec0-a232-cd92a5bab9b6) 
![Image](https://github.com/user-attachments/assets/5d8e0352-ed53-4d81-a7e9-c4a02d2e75f4)

Uso

:arrow_forward: Agregar Amigos: Escribe el nombre de un amigo en el campo de entrada y agrégalo a la lista. :memo:

:arrow_forward: Ver Lista: Los nombres agregados se mostrarán en la pantalla. :page_with_curl:

:arrow_forward: Sortear Amigos: Presiona el botón de sorteo y se generará un emparejamiento aleatorio. :slot_machine:

:arrow_forward: Ver Resultados: Los resultados se mostrarán en pantalla indicando quién es el "Amigo Secreto" de quién. :computer:

![Image](https://github.com/user-attachments/assets/b51497e9-c5b1-4341-9b56-e706674e11aa)
![Image](https://github.com/user-attachments/assets/f9bd43af-f1d8-40f7-8220-de7575ac9302)

Requisitos

Este código está diseñado para ejecutarse en un entorno con HTML y JavaScript. Debe incluir elementos con los siguientes identificadores en el HTML:

:pushpin: #amigo (input donde se ingresan los nombres)

:pushpin: #listaAmigo (lista donde se muestran los amigos agregados)

:pushpin: #resultado (contenedor donde se muestran los resultados del sorteo)

Funciones Principales

agregarAmigo()

Agrega un amigo a la lista si no está vacío y si no está repetido.

renderizarAmigos()

Actualiza la lista de amigos en pantalla.

sortearAmigo()

Realiza el sorteo asegurando que nadie se asigne a sí mismo como amigo secreto y muestra los resultados en la pantalla.

![Image](https://github.com/user-attachments/assets/3195f157-d4e0-4d8b-b455-2e5e2141126b)
![Image](https://github.com/user-attachments/assets/799646a3-3445-491c-bc48-b17c109472ba)

Notas

Se requiere un mínimo de 2 amigos para poder realizar el sorteo.

Si el sorteo no es válido (por ejemplo, un solo participante queda con su propio nombre), se reinicia automáticamente.

La lista se limpia después de cada sorteo para permitir nuevos emparejamientos.

![Image](https://github.com/user-attachments/assets/5cb0d188-e74e-4289-a698-d1e11a1bf3b5)

Autor

Desarrollado como una solución sencilla para organizar sorteos de "Amigo Secreto" de manera automatizada.

