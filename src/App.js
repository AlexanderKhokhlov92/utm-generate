import React, { useState } from 'react';
import InputForm from './components/InputForm';
import OutputText from './components/OutputText';
import './App.css'; 

const App = () => {
  const [outputElements, setOutputElements] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputText1, setInputText1] = useState('');

  const handleGenerate = () => {
      const elements = [
        <h2 key="header1">Инстаграм</h2>,
        <h3 key="sbbheader1">Шапка</h3>,
        <div key="output-container1" className="output-container">
          <OutputText key="output1" text={`${inputText}?utm_source=instagram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_profile_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_profile_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h3 key="sbbheader2">Сторис</h3>,
        <div key="output-container2" className="output-container">
          <OutputText key="output2" text={`${inputText}?utm_source=instagram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_story_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_story_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h3 key="sbbheader3">Рилс</h3>,
        <div key="output-container3" className="output-container">
          <OutputText key="output3" text={`${inputText}?utm_source=instagram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_reels_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_story_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h3 key="sbbheader4">Пост</h3>,
        <div key="output-container4" className="output-container">
          <OutputText key="output4" text={`${inputText}?utm_source=instagram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h2 key="header2">Инстаграм Краснов</h2>,
        <h3 key="sbbheader5">Шапка</h3>,
        <div key="output-container5" className="output-container">
          <OutputText key="output5" text={`${inputText}?utm_source=instagram-kras&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_profile_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram-kras&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_profile_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h3 key="sbbheader6">Сторис</h3>,
        <div key="output-container6" className="output-container">
          <OutputText key="output6" text={`${inputText}?utm_source=instagram-kras&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_story_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram-kras&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_story_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h3 key="sbbheader7">Рилс</h3>,
        <div key="output-container7" className="output-container">
          <OutputText key="output7" text={`${inputText}?utm_source=instagram-kras&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_reels_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram-kras&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_reels_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h3 key="sbbheader8">Пост</h3>,
        <div key="output-container8" className="output-container">
          <OutputText key="output8" text={`${inputText}?utm_source=instagram-kras&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram-kras&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h2 key="header3">Инстаграм Анонс</h2>,
        <h3 key="sbbheader9">Шапка</h3>,
        <div key="output-container9" className="output-container">
          <OutputText key="output9" text={`${inputText}?utm_source=instagram-anons&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_profile_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram-anons&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_profile_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h3 key="sbbheader10">Сторис</h3>,
        <div key="output-container10" className="output-container">
          <OutputText key="output10" text={`${inputText}?utm_source=instagram-anons&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_story_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram-anons&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_story_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h3 key="sbbheader11">Рилс</h3>,
        <div key="output-container11" className="output-container">
          <OutputText key="output11" text={`${inputText}?utm_source=instagram-anons&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_reels_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram-anons&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_reels_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h3 key="sbbheader12">Пост</h3>,
        <div key="output-container12" className="output-container">
          <OutputText key="output12" text={`${inputText}?utm_source=instagram-anons&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=instagram-anons&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h2 key="header4">ВК</h2>,
        <h3 key="sbbheader13">ВК пост</h3>,
        <div key="output-container13" className="output-container">
          <OutputText key="output13" text={`${inputText}?utm_source=vkontakte&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=vkontakte&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h2 key="header5">Волкович</h2>,
        <h3 key="sbbheader14">ТГ пост</h3>,
        <div key="output-container14" className="output-container">
          <OutputText key="output14" text={`${inputText}?utm_source=telegram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=volkovich`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=telegram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=volkovich`)}></button>
        </div>,
        <h2 key="header6">Вожжова</h2>,
        <h3 key="sbbheader15">ТГ пост</h3>,
        <div key="output-container15" className="output-container">
          <OutputText key="output15" text={`${inputText}?utm_source=telegram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=vojjova`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=telegram&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_post_date-__&utm_content=vojjova`)}></button>
        </div>,
        <h2 key="header7">Рассылка</h2>,
        <h3 key="sbbheader16">ГК мейл</h3>,
        <div key="output-container16" className="output-container">
          <OutputText key="output16" text={`${inputText}?utm_source=getcourse&utm_medium=email&utm_campaign=${inputText1}&utm_term=lp_email_1_date-__&utm_content=likpro`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=getcourse&utm_medium=email&utm_campaign=${inputText1}&utm_term=lp_email_1_date-__&utm_content=likpro`)}></button>
        </div>,
        <h3 key="sbbheader17">ГК телеграм</h3>,
        <div key="output-container17" className="output-container">
          <OutputText key="output17" text={`${inputText}?utm_source=getcourse&utm_medium=email&utm_campaign=${inputText1}&utm_term=lp_telegram_1_date-__&utm_content=likpro`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=getcourse&utm_medium=email&utm_campaign=${inputText1}&utm_term=lp_email_1_date-__&utm_content=likpro`)}></button>
        </div>,
        <h3 key="sbbheader18">Смартбот</h3>,
        <div key="output-container18" className="output-container">
          <OutputText key="output18" text={`${inputText}?utm_source=smartbot&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_telegram_1_date-__&utm_content=likpro`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=smartbot&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_telegram_1_date-__&utm_content=likpro`)}></button>
        </div>,
        <h3 key="sbbheader19">Сейл бот</h3>,
        <div key="output-container19" className="output-container">
          <OutputText key="output19" text={`${inputText}?utm_source=salebot&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_telegram_1_date-__&utm_content=likpro`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=salebot&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_telegram_1_date-__&utm_content=likpro`)}></button>
        </div>,
        <h3 key="sbbheader20">Ботхелп</h3>,
        <div key="output-container20" className="output-container">
          <OutputText key="output20" text={`${inputText}?utm_source=bothelp&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_telegram_1_date-__&utm_content=likpro`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=bothelp&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_telegram_1_date-__&utm_content=likpro`)}></button>
        </div>,
        <h3 key="sbbheader21">Сенлер</h3>,
        <div key="output-container21" className="output-container">
          <OutputText key="output21" text={`${inputText}?utm_source=senler&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_vkontakte_1_date-__&utm_content=likpro`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=senler&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_vkontakte_1_date-__&utm_content=likpro`)}></button>
        </div>,
        <h3 key="sbbheader22">ВК ГК</h3>,
        <div key="output-container22" className="output-container">
          <OutputText key="output22" text={`${inputText}?utm_source=vk-gc&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_vkontakte_1_date-__&utm_content=likpro`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=vk-gc&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_vkontakte_1_date-__&utm_content=likpro`)}></button>
        </div>,
        <h2 key="header8">Ссылка для ОП</h2>,
        <h3 key="sbbheader23">Посадочная</h3>,
        <div key="output-container23" className="output-container">
          <OutputText key="output23" text={`${inputText}?utm_source=getcourse&utm_medium=social&utm_campaign=${inputText1}&utm_term=lp_op_date-__&utm_content=sale-dep`} />
          <button title='Copt text' className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=getcourse&utm_medium=social&utm_campaign=${inputText1}&utm_term=lp_op_date-__&utm_content=sale-dep`)}></button>
        </div>,
        <h3 key="sbbheader24">Вход</h3>,
        <div key="output-container24" className="output-container">
          <OutputText title='Copt text' key="output24" text={`${inputText}?utm_source=getcourse&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_op_date-__&utm_content=sale-dep`} />,
          <button className="copy-button" onClick={() => handleCopy(`${inputText}?utm_source=getcourse&utm_medium=social&utm_campaign=${inputText1}&utm_term=wb_op_date-__&utm_content=sale-dep`)}></button>
        </div>

    ];
    setOutputElements(elements);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInput1Change = (e) => {
    setInputText1(e.target.value);
  };

  const handleCopy = (textToCopy) => {
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (

    <div>
      <h1 className='title'>Generator utm tags for "LIKPRO"</h1>
      <a className='link' href='https://t.me/AlanJourney'>@Designed by Alan Hemsword</a>
      <InputForm 
        onGenerate={handleGenerate} 
        onInputChange={handleInputChange} 
        onInput1Change={handleInput1Change} 
      />
      {outputElements.map((element, index) => (
        <React.Fragment key={index}>
          {element}
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;



