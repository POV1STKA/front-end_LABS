import React, { Component } from 'react';
import Image from './Image';
import './style.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstClick: true,
      imageWidth: 600,
      imageVisible: true,
    };
  }

  toggleStyle = (id, color, bgColor) => {
    const element = document.getElementById(id);
    if (element) {
      const { firstClick } = this.state;
      element.style.color = firstClick ? color : '';
      element.style.backgroundColor = firstClick ? bgColor : '';
      this.setState({ firstClick: !firstClick });
    }
  };

  increaseImageSize = () => {
    this.setState((prevState) => ({ imageWidth: prevState.imageWidth * 1.2 }));
  };

  decreaseImageSize = () => {
    this.setState((prevState) => ({ imageWidth: prevState.imageWidth * 0.8 }));
  };

  toggleImage = () => {
    this.setState((prevState) => ({ imageVisible: !prevState.imageVisible }));
  };

  render() {
    const { imageWidth, imageVisible } = this.state;
    return (
      <div>
        <h3>Мої хобі</h3>
        <ul>
          <li id="item7" onClick={() => this.toggleStyle('item7', 'white', 'lightblue')}>
            Програмування
          </li>
          <li>Комп'ютерні ігри</li>
          <li id="item8" onClick={() => this.toggleStyle('item8', 'white', 'lightcoral')}>
            Читання книг
          </li>
        </ul>

        <h3>Улюблені книги</h3>
        <ol>
          <li>"Червоне і чорне" - Стендаль</li>
          <li>"Хатина дядька Тома" - Гаррієт Бічер-Стоу</li>
          <li>"Скотний двір" - Джордж Оруелл</li>
        </ol>

        <h3>Опис мого улюбленого міста</h3>
        <p>
          Моє улюблене місто – Абу-Дабі. Це столиця Об'єднаних Арабських Еміратів та емірату Абу-Дабі. Місто займає
          більшу частину невеликого трикутного острова з однойменною назвою у південній частині Перської затоки
          біля узбережжя Аравійського півострова і з'єднується з материком мостами. Місто було засновано у 1760
          році. 1958 року були відкриті багаті нафтові родовища в еміраті Абу-Дабі, з 1962 року почався
          промисловий видобуток нафти, що зробило революцію в політичному і економічному становищі міста.
        </p>

        <div id="image-controls">
          <button onClick={this.toggleImage}>
            {imageVisible ? 'Видалити зображення' : 'Додати зображення'}
          </button>
          <button onClick={this.increaseImageSize}>Збільшити зображення</button>
          <button onClick={this.decreaseImageSize}>Зменшити зображення</button>
        </div>

        {imageVisible && (
          <div id="imageContainer">
            <a href="https://www.abudhabi.gov.ae">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emirates_Palace.jpg/800px-Emirates_Palace.jpg"
                alt="Абу-Дабі"
                width={imageWidth}
                id="mainImage"
              />
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Content;
