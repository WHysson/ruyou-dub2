import React, { useState } from 'react';
import style from './formComponent.module.css'



function FormComponent() {
    const [file, setState] = useState(require("./../../images/Vector.png"))

    const inputRef = React.createRef()

    const triggerClick = () => {
        inputRef.current.click()
    }

    const imageHandler = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setState(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (


        <div className="formComponent">
            <form className={style.content_form} action="">
                <div>
                    <label htmlFor="Name">Имя</label>
                    <input type="text" placeholder="Имя" />
                </div>
                <div>
                    <label htmlFor="Surname">Фамилия</label>
                    <input type="text" placeholder="Фамилия" />
                </div>
                <div>
                    <label htmlFor="MiddleName">Отчество</label>
                    <input type="text" placeholder="Отчество" />
                </div>
                <div>
                    <label htmlFor="input">Фото</label>
                    <label className={style.input_label} htmlFor="input">
                        <img onClick={triggerClick} src={file} alt="" />
                        <input onChange={imageHandler} ref={inputRef} className={style.content_form_imageUpload} name="image-upload" accept="image/*" type="file" src={file} />
                    </label>
                </div>
                <div>
                    <button className={style.contact_form_button}>Сохранить</button>
                </div>
                <div>
                    <label htmlFor="Response">Response</label>
                    <textarea type="text" />
                </div>
            </form>
        </div>


    );
}

export default FormComponent;
