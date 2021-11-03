# ITACADEMY-S3.SHOP
Tercer Sprint del curso de React de IT Academy

Nivell 1

- Exercici 1
En primer lloc, en tractar-se d'un e-commerce, farem que l'usuari pugui afegir productes al carret.  
La funció que has de completar és diu buy(), la qual rep l'id del producte a afegir. 
Has de buscar el producte utilitzant aquest id rebut en el array products, per a finalment afegir-ho al array cart.
Els botons que han d'executar la funció buy() són els blaus que és troben en cada producte:


- Exercici 2
Ara implementarem una funció que permeti a l'usuari eliminar el array generat en l'anterior exercici: buidar el carret.
En aquest cas, hauràs d'emplenar la funció cleanCart(), la qual ha de reinicialitzar la variable cartList.
 

- Exercici 3
Com ja tenim una versió bàsica del carret, crearem la funció que calculi els subtotals per a cadascun dels tipus de productes.
Per a fer-ho, hauràs d'anar llegint cada producte del carret mitjançant un bucle, i en funció del seu tipus, actualitzar la variable subtotal que et toqui.


- Exercici 4
Genial, l'e-commerce va prenent forma! és el moment de calcular el total de l'import del carret. 
Podràs fer-ho sumant els subtotals de cada categoria de producte calculats en l'exercici anterior.
No posar-ho hardcoded.
S'ha d'implementar un bucle for...in per a iterar l'objecte.
Es demana d'aquesta manera ja que és més escalable.


- Exercici 5
Com hauràs pogut observar, tenim molts items repetits en el carret de la compra. 
Seria més convenient que no apareguessin repetits, si no que cada producte del carret comptés amb un camp quantitat.
Per a això, hauràs de completar la funció generateCart(), la qual rep el array cartList, generant el array cart.


- Exercici 6
Per a ser un bon e-commerce, ens falta implementar promocions, apartat importantíssim en qualsevol botiga.
Per a això, el client ens ha transmès dos tipus de promocions que vol per a la seva e-commerce:
- Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.
- En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3.


- Exercici 7
L'usuari ja vaig poder afegir productes al carret, se li apliquen promocions, es calculen subtotales i import total a pagar.
Hem anat ampliant el nostre codi amb noves funcionalitats, però a vegades fa falta un repàs general per a analitzar si podem simplificar-ho abans de prosseguir.
Repassant el programa, es poden mantenir les funcionalitats simplificant el codi: això es diu fer un refactor.
Podem eliminar buy() i generateCart(), per a generar el carret en una única funció addToCart().
A vegades és una mica tediós refactoritzar codi, ja que hauràs de modificar també calculateSubtotals, però s'ha d'anar netejant codi perquè sigui més mantenible.


- Exercici 8
Fins a aquest exercici només hem implementat la lògica de la pantalla principal de la botiga. Ara implementarem la validació del formulari de checkout que es troba en l'arxiu checkout.js.
Per a accedir a aquesta pantlla, has de clicar en la icona del carret de la part superior dreta de la pantalla, apareixent un modal amb el boto que et portarà a aquesta pantalla.
Podràs observar que hi ha un formulari amb els camps nom, cognoms, email, contrasenya, adreça i telèfon:
En aquest exercici hauràs d'implementar la lògica perquè els camps del formulari compleixin les següents condicions:
- Tots els camps són obligatoris.
- Tots els camps han de tenir almenys 3 caràcters.
- El nom i cognoms han de contenir només lletres.
- El telèfon ha de contenir només números.
- La contrasenya ha d'incloure números i lletres.
- L'email ha de tenir format d'email.
Quan l'usuari introdueixi un camp que no compleixi les condicions anteriors, l'input s'ha de ressaltar en vermell i mostrar un missatge en la part inferior a manera de feedback a l'usuari, perquè sàpiga com rectificar.



Nivell 2

- Exercici 9
Enhorabona! ja tens les parts principals del shop implementades! en el nivell 2 i 3 completarem la botiga amb algunes funcionalitats i creant la part gràfica.
Encara no hem proporcionat una funcionalitat molt important a l'usuari: restar productes del carret.
Has de completar la funció removeFromCart(), la qual rep l'id del producte per al qual es deu decrementar la seva quantitat en una unitat.
Tingues en compte que si la quantitat del producte a decrementar és 1, has d'eliminar-lo del carret, no passar la seva quantitat a 0.
Ajuda: Garanteix que el teu codi no dóna error, si un producte que l'usuari vol decrementar la seva quantitat no està en el carret.


- Exercici 10
Ja has desenvolupat tota la lògica bàsica de l'aplicació, ha arribat el moment de mostrar a l'usuari el carret de la compra perquè pot anar visualitzant els canvis.
El codi en carregat de mostrar el carret de la compra en el modal amb id "cartModal", ha d'incloure's dins de la funció printCart().
El modal del carret s'obre prement el botó del carret en la part superior dreta de la pantalla:


Nivell 3

- Exercici 11
Ja has arribat al final! per a tenir llista la demo per a ensenyar al client, tens que maquear la web perquè tingui un aspecte professional.
Aquí tens diversos exemples d'inspiració:
- Botiga
Selector inicial de categories:
Checkout:

Ajuda: Pots inventar-te seccions fake per a la demo, com en l'exemple anterior que apareix la imatge de la dona a pantalla completa amb l'eslògan damunt, i una descripció de la botiga.
Ajuda: És bona opció buscar imatge dels productes. En unsplash.com hi ha moltes fotografies d'alta qualitat que pots utilitzar per a enriquir la teva e-commerce.
Ajuda: Si necessites inspiració per als teus projectes, una bona opció és recórrer dribbble.com o behance.net, webs de portfolios de dissenyadors, per a trobar algun disseny que encaix amb el teu web i amb el teu estil.


- Exercici 12
No se t'oblidi repassar el responsive. Garanteix que e vegi bé en tots els dispositius: escriptori, tauleta i mòbil.