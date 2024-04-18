import React, { Component } from 'react';

class ImageFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      originalImage: null,
      previewImage: null,
      grayscaleValue: 0,
      sepiaValue: 0,
      invertValue: 0,
      blurValue: 0,
      filteredImage: null
    };
  }

  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      this.setState({ selectedFile: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ originalImage: reader.result, previewImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  applyFilter = () => {
    const { originalImage, grayscaleValue, sepiaValue, invertValue, blurValue } = this.state;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.onload = () => {
      const canvasWidth = image.width + 2 * blurValue; 
      const canvasHeight = image.height + 2 * blurValue; 
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      ctx.filter = `grayscale(${grayscaleValue}%) sepia(${sepiaValue}%) blur(${blurValue}px) invert(${invertValue}%)`;
      ctx.drawImage(image, blurValue, blurValue, image.width, image.height); 
      const filteredImage = canvas.toDataURL('image/png');
      this.setState({ filteredImage });
    };
    image.src = originalImage;
  };

  handleSliderChange = (event, filterName) => {
    let value = parseInt(event.target.value, 10);
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    this.setState({ [filterName]: value }, this.applyFilter);
  };

  render() {
    const { previewImage, grayscaleValue, sepiaValue, invertValue, blurValue, filteredImage } = this.state;

    return (
      <div>
        <h1>Форма загрузки фотографии с применением фильтров</h1>
        <input type="file" accept="image/*" onChange={this.handleFileChange} />
        {previewImage && (
          <div style={{ display: "flex" }}>
            <img src={previewImage} alt="Исходное изображение" style={{ maxWidth: "600px", height: "auto", margin: "50px" }} />
            <div>

              <h2>Применить фильтры:</h2>
              <div>
                <h3>Blur</h3>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={blurValue}
                  onChange={(e) => this.handleSliderChange(e, 'blurValue')}
                />
                <span>{blurValue}px</span>
              </div>
              <div>
                <h3>Черно-белый</h3>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={grayscaleValue}
                  onChange={(e) => this.handleSliderChange(e, 'grayscaleValue')}
                />
                <span>{grayscaleValue}%</span>
              </div>
              <div>
                <h3>Сепия</h3>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sepiaValue}
                  onChange={(e) => this.handleSliderChange(e, 'sepiaValue')}
                />
                <span>{sepiaValue}%</span>
              </div>
              <div>
                <h3>Инвертировать</h3>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={invertValue}
                  onChange={(e) => this.handleSliderChange(e, 'invertValue')}
                />
                <span>{invertValue}%</span>
              </div>
            </div>
          </div>
        )}
        {filteredImage && <img src={filteredImage} alt="Результат фильтрации" />}
      </div>
    );
  }
}

export default ImageFilter;
