jquery-dialekt
==============

Weil das Fahrrad ein Velo und die Strassenbahn ein Tram ist.


Dieses Script erlaubt es, Clientseitig einzelne Buchstaben und Wörter zu ersetzen.

So dass z.B. für schweizer Besucher alle 'ß' durch 'ss' ersetzt werden.

Installation
============

Im <head> des HTML Dokumentes muss das Wörterbuch-Script geladen werden::

    <script type="text/javascript" src="jquery-dialekt/lang-{{ user_country }}.js" charset="utf-8"></script>


Mit den andern Javascripts das Hauptscript::

    <script type="text/javascript" src="jquery-dialekt/dialekt.js"></script>
    <script>
        $(function(){
           $('#wrapper').dialekt();
        });
    </script>

