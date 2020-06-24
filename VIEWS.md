# Dashboard
- `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie
- `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
    - wybór daty i godziny
    - tabela z listą rezerwacji oraz wydarzeń
        - każda kolumna = 1 stolik
        - każdy wiersz = 30min
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
        - po kliknieciu rezerwacji lub eventu, przechodzimy na stronę szczegółów

- `/tables/booking/:id`
    - zawiera wszystkie informacje dotyczące rezerwacji
    - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
    - analogicznie do powyższej, bez początkowych informacji
- `/tables/events/:id`
    - analogicznie do powyższej, dla eventów
- `/tables/events/new`
    - analogicznie do powyższej, dla eventów, bez początkowych rezerwacji

# Widok kelnera

- `/waiter`
    - tabela
        - w wierszach stoliki
        - w kolumnach różne rodzeje informacji (status, czas od ostatniej aktywności)
        - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
    - number stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwotę zamówienia
- `/waiter/order/:id`
    - jak powyższ

# Widok kuchni

- `/kitchen`
    - wiświetlać listę zamówień w kolejności ich złożenia
    - lista musi zawierać 
        - numer stolika (lub zamówienia zdalnego) 
        - pełne informacje dotyczące zamówionych dań
    - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane

