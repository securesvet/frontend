// type CloneInfo = {
//     /**
//      * Пол клона — строка ’male’ или ’female’
//      */
//     sex: string;
//     /**
//      * Идентификатор клона — строка из маленьких и больших
//      * латинских букв и цифр, строго 10 символов
//      */
//     id: string;
//     /**
//      * Имя клона — строка из маленьких и больших
//      * латинских букв и пробелов (от 0 до 26 символов)
//      */
//     name: string;
// }

// переводит символ в ASCII-код
function charToByte(char) {
    return char.charCodeAt(0);
  }
  
  // переводит байт в строку из 0 и 1 (в двоичную систему счисления с незначащими нулями)
  function byteToString(byte) {
    return byte.toString(2).padStart(8, '0');
  }

  let dataString =
  (cloneInfo.sex === 'female' ? '0' : '1') +
  cloneInfo.id.split('').map(charToByte).map(byteToString).join('') +
  cloneInfo.name.padEnd(26, ' ').split('').map(charToByte).map(byteToString).join('');

  // Идентификатор для блока, где будет находиться «контент» баркода.
// В принципе, вёрстку можно целиком строить через DOM API без использования innerHTML, и тогда идентификатор не потребуется.
// Если же реализовывать в лоб, случайный идентификатор защитит нас от того, что два баркода на странице «перемешаются».
// Это было очень частой ошибкой у участников чемпионата — многие не учитывали, что функция отрисовки баркода может вызываться несколько раз.
const contentElId = 'content-' + Math.random();
element.style.display = 'flex';
element.innerHTML = `
  <style>
    .barcode {
      border: 3px solid black;
      box-sizing: border-box;
    }

    .content {
      margin-top: 3px;
      margin-left: 3px;
      width: 136px;
      height: 144px;
      display: flex;
      flex-wrap: wrap;
    }

    .content__bit {
      width: 8px;
      height: 8px;
    }

    .content__bit_one {
      background: black;
    }
  </style>

  <div class="content" id="${contentElId}"></div>
`;

const contentDiv = document.getElementById(contentElId);
element.className += ' barcode';