import React, {useEffect, useState} from 'react';
import {Template} from "../../Components/Template";
import styled from "styled-components";
import {Slider} from "@mui/material";
import {PrimaryButton} from "../../Components/Buttons/Primary";
import {SecondaryButton} from "../../Components/Buttons/Secondary";
import {ArrowBack} from "../../Components/ArrowBack";

const InfoWrapperSC = styled('div')`
  background: white;
  border-radius: 5px;
  box-shadow: 11px 12px 27px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 45px;
  
  .col {
    width: 33%;
    
    .MuiSlider-rail, .MuiSlider-track {
      height: 10px;
      background: #D9D9D9;
      color: #D9D9D9;
      border-radius: 30px;
    }
    
    .MuiSlider-root {
      color: black;
    }
    
    .upload-button {
      margin-bottom: 10px;
    }

    .col-info {
      padding-right: 45px;
      padding-left: 45px;
    }
    
    h3 {
      margin: 0;
      margin-bottom: 22px;
      padding-left: 45px;
      font-family: 'Commissioner',serif;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 45px;
    }
    
    font-family: 'David Libre',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 45px;
    color: #000000;
    display: block;
  }

  .col:first-child {
    width: 30%;
    
    .col-info {
      border-right: 1px solid black;

      .rounded-info {
        margin-top: 15px;
      }
    } 
  }

  .col:last-child {
    width: 25%;

    .col-info {
      border-left: 1px solid black;
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  }

  .col:nth-child(2) .col-info {
    display: flex;
    align-items: center;
    justify-content: center;
    
    .progress {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 100%;
    }
  }
  
  .rounded-info {
    background: #D9D9D9;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    max-width: fit-content;
    
    span {
      color: #000000;
      font-family: 'David Libre',serif;
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 20px;
    }
    
    &.brightness {
      margin-left: 13px;
    }
  }
  
  .selected-pixel {
    border: 3px solid #000000;
    width: 48.8px;
    height: 48.8px;
  }
`

const ImagesWrapperSC = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
  margin-right: 24px;
  
  .uploaded-image-col {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:first-child {
      margin-right: 70px;
    }
    
    span {
      font-family: 'David Libre',serif;
      font-style: normal;
      font-weight: 700;
      font-size: 35px;
      line-height: 45px;
      margin-bottom: 10px;
    }
    
    canvas {
      height: 500px;
      object-fit: cover;
    }
  }
`

export const BottomInfoSC = styled('div')`
  display: flex;
  align-items: end;
  justify-content: center;
`

export const ColorModels = () => {
    const [brightness, setBrightness] = useState(85);
    const [selectedPixelColor, setSelectedPixelColor] = useState('');
    const [selectedPixelColorRGB, setSelectedPixelColorRGB] = useState('');
    const [selectedPixelColorCMYK, setSelectedPixelColorCMYK] = useState('');
    const [isFileUploaded, setIsFileUploaded] = useState(false);

    function RGBtoCMYK(r: number, g: number, b: number) {
        var c = 1 - (r / 255);
        var m = 1 - (g / 255);
        var y = 1 - (b / 255);
        var k = Math.min(c, Math.min(m, y));

        c = (c - k) / (1 - k);
        m = (m - k) / (1 - k);
        y = (y - k) / (1 - k);

        c = Math.round(c * 10000) / 100;
        m = Math.round(m * 10000) / 100;
        y = Math.round(y * 10000) / 100;
        k = Math.round(k * 10000) / 100;

        c = isNaN(c) ? 0 : c;
        m = isNaN(m) ? 0 : m;
        y = isNaN(y) ? 0 : y;
        k = isNaN(k) ? 0 : k;

        return {
            c: c,
            m: m,
            y: y,
            k: k
        }
    }

    function CMYKtoRGB(c: number, m: number, y: number, k: number) {
        c = (c / 100);
        m = (m / 100);
        y = (y / 100);
        k = (k / 100);

        c = c * (1 - k) + k;
        m = m * (1 - k) + k;
        y = y * (1 - k) + k;

        var r = 1 - c;
        var g = 1 - m;
        var b = 1 - y;

        r = Math.round(255 * r);
        g = Math.round(255 * g);
        b = Math.round(255 * b);

        return {
            r: r,
            g: g,
            b: b
        }
    }



    function handleFile(file: File) {
        const imageType = /image.*/;

        if (file.type.match(imageType)) {
            setIsFileUploaded(true)

            let rgb_canvas: any = document.getElementById("rgb-model"),
                ctx1 = rgb_canvas.getContext("2d");
            let hsl_canvas: any = document.getElementById("hsl-model"),
                ctx2 = hsl_canvas.getContext("2d");

            let reader = new FileReader()
            reader.onloadend = function (event) {
                let tempImageStore = new Image()
                tempImageStore.onload = function (e: any) {
                    rgb_canvas.height = e.target.height;
                    rgb_canvas.width = e.target.width;

                    hsl_canvas.height = e.target.height;
                    hsl_canvas.width = e.target.width;

                    ctx1.drawImage(e.target, 0, 0);
                    ctx2.drawImage(e.target, 0, 0);
                }

                tempImageStore.src = event.target?.result as string;
            }

            reader.readAsDataURL(file);
        }
        else {
            alert("Невірний формат, можливо завантажити тільки фото");
        }
        return true;
    }

    function pixel(canvas: any, event: any) {
        let hsl_canvas: any = document.getElementById("hsl-model"),
            ctx2 = hsl_canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const height = canvas.height;
        const width = canvas.width;
        const imageData = ctx2.getImageData(0, 0, width, height);
        const imgd = imageData.data;

        let pos = 4 * width * Math.round(y) + 4 * Math.round(x);

        let chex = rgbToHex(imgd[pos], imgd[pos + 1], imgd[pos + 2]);
        setSelectedPixelColor(chex);

        let rgb = [imgd[pos], imgd[pos + 1], imgd[pos + 2]];

        let cmyk = RGBtoCMYK(rgb[0], rgb[1], rgb[2]);

        let text_rgb = `RGB (${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        let text_hsl = `CMYK (${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k})`;

        setSelectedPixelColorRGB(text_rgb);
        setSelectedPixelColorCMYK(text_hsl);
    }

    function rgbToHex(r: number, g: number, b: number) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function componentToHex(c: number) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function download_img() {
        let rgb_canvas: any = document.getElementById("rgb-model");

        const image = rgb_canvas.toDataURL("png");
        const link = document.createElement('a');
        link.download = "my-image.png";
        link.href = image;
        link.click();
    };

    const changeBrightness = (brightness: any) => {
        setBrightness(brightness)

        let rgb_canvas: any = document.getElementById("rgb-model"),
            ctx1 = rgb_canvas.getContext("2d");
        let hsl_canvas: any = document.getElementById("hsl-model"),
            ctx2 = hsl_canvas.getContext("2d");

        let imageData = ctx2.getImageData(0, 0, rgb_canvas.width, rgb_canvas.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            let r = imageData.data[i];
            let g = imageData.data[i + 1];
            let b = imageData.data[i + 2];
            if (r > 120 && r < 255 && b < 219 && g > 100 && g < 255) {
                const cmyk = RGBtoCMYK(imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]);
                if (brightness > 50) {
                    let vChangePercent = (brightness - 50) * 10 / 100;
                    cmyk.k = cmyk.k + (cmyk.k * vChangePercent);
                } else if (brightness < 50) {
                    let vChangePercent = (50 - brightness) * 10 / 100;
                    cmyk.k = cmyk.k - (cmyk.k * vChangePercent);
                    /*cmyk.m = 0;
                    cmyk.c = 0;*/
                    //cmyk.k = 0;
                }

                const rgb = CMYKtoRGB(cmyk.c, cmyk.m, cmyk.y, cmyk.k);
                imageData.data[i] = rgb.r;
                imageData.data[i + 1] = rgb.g;
                imageData.data[i + 2] = rgb.b;

            }
        }
        ctx1.putImageData(imageData, 0, 0);
    }

    function handleUploadedFiles(e: any) {
        let file = e.target.files[0];
        handleFile(file);
    }

    useEffect(() => {
        let hsl_canvas: any = document.getElementById("hsl-model");

        hsl_canvas.addEventListener('mousedown', function (e: any) {
            pixel(hsl_canvas, e);
        })
    }, [])

    const hiddenFileInput = React.useRef<any>(null);

    return (
        <Template>
            <InfoWrapperSC>
                <div className="col">
                    <h3>Вибраний піксель</h3>
                    <div className="col-info">
                        <div className="selected-pixel" id="color" style={{background: selectedPixelColor}} />
                        <div className="rounded-info">
                            <span>{selectedPixelColorRGB || 'RGB'}</span>
                        </div>
                        <div className="rounded-info">
                            <span>{selectedPixelColorCMYK || 'CMYK'}</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3>Яскравість</h3>
                    <div className="col-info">
                        <div className={'progress'}>
                            <Slider aria-label="brightness"
                                    id={'saturation-value'}
                                    valueLabelDisplay="auto"
                                    value={brightness}
                                    onChange={(e: any) => changeBrightness(e.target?.value)}
                            />
                            <div className="rounded-info brightness">
                                <span>{brightness}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3>Дії</h3>
                    <div className="col-info">
                        <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={(e) => {
                                handleUploadedFiles(e)
                            }}
                            id={'file-upload'}
                           style={{display: 'none'}}/>
                        <div className="upload-button">
                            <SecondaryButton text={'Завантажити'}
                                             onClick={() => hiddenFileInput.current?.click()} />
                        </div>
                        <PrimaryButton text={'Вивантажити'} onClick={() => download_img()} />
                    </div>
                </div>
            </InfoWrapperSC>
            <BottomInfoSC>
                <ImagesWrapperSC>
                        <div className="uploaded-image-col">
                            {isFileUploaded && <span>RGB</span>}
                        <canvas className="rgb-model" id='rgb-model'></canvas>
                    </div>
                        <div className="uploaded-image-col">
                            {isFileUploaded && <span>CMYK</span>}
                        <canvas className="hsl-model" id='hsl-model'></canvas>
                        </div>
                </ImagesWrapperSC>
                {isFileUploaded && <ArrowBack link={'nav'}/>}
            </BottomInfoSC>
        </Template>
    );
};

