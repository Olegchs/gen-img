document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('cardCanvas');
    const ctx = canvas.getContext('2d');
    const textArea = document.getElementById('textArea');
    const fontSelect = document.getElementById('fontSelect');
    const fontSizeRange = document.getElementById('fontSizeRange');
    const fontColorInput = document.getElementById('fontColorInput');
    const backgroundColorInput = document.getElementById('backgroundColorInput');
    const backgroundImageInput = document.getElementById('backgroundImageInput');
    const xCoordRange = document.getElementById('xCoordRange');
    const yCoordRange = document.getElementById('yCoordRange');
    const generateButton = document.getElementById('generateButton');
    const canvasSizeRange = document.getElementById('canvasSizeRange');

  // Функция для перерисовки холста
  function redrawCanvas() {
    // Установка размеров холста
    canvas.width = parseInt(canvasSizeRange.value);
    canvas.height = parseInt(canvasSizeRange.value);
    // Перерисовка содержимого холста
    drawCard();
  }

  // Обновляем размер холста при загрузке страницы
  redrawCanvas();

  // Обновляем размер холста при изменении размеров ползунка
  canvasSizeRange.addEventListener('input', redrawCanvas);

  // Функция для отрисовки открытки
  function drawCard() {
    // Очищаем холст
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Добавляем код отрисовки вашей открытки здесь
  }

  
    function drawCard() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Рисуем фон
      ctx.fillStyle = backgroundColorInput.value;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      // Получаем значения из инструментов
      const text = textArea.value;
      const selectedFont = fontSelect.value;
      const fontSize = parseInt(fontSizeRange.value, 10);
      const fontColor = fontColorInput.value;
      const xCoord = parseInt(xCoordRange.value, 10);
      const yCoord = parseInt(yCoordRange.value, 10);
  
      // Разбиваем текст на строки
      const lines = text.split('\n');
      let lineHeight = fontSize + 5; // Высота строки
  
      // Рисуем каждую строку текста
      ctx.fillStyle = fontColor;
      ctx.font = fontSize + 'px ' + selectedFont;
      for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], xCoord, yCoord + i * lineHeight);
      }
  
      // Добавляем изображение в фон
      const backgroundImageUrl = backgroundImageInput.value;
      if (backgroundImageUrl) {
        const bgImage = new Image();
        bgImage.src = backgroundImageInput.value;
        bgImage.onload = function () {
          ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
        };
      }
    }
  
    // Обновляем картинку при изменении инструментов
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => input.addEventListener('input', drawCard));
  
    // Вызываем функцию отрисовки при загрузке страницы
    drawCard();
  
    // Обработчик нажатия кнопки "Создать открытку"
    generateButton.addEventListener('click', drawCard);
  });
  