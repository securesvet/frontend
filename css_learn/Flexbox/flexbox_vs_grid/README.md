Пока что то, что я выучил:
```
.columns > * {
    ...
}
```
Такой синтаксис выбирает всех детей columns.
Далее столкнулся вот с такой штукой:
```
flex: 1;
```
На самом деле это выставляет данные значения следующим свойствам: 
```
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;
```
Воу, с flex-basis какая-то сложная штука. Тяжело воспринимается, потому что даже не совсем понимаю, что это делает.