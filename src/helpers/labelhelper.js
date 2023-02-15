import { labels } from '../labels/labels';

export const retrieveLabel = (labelName, language) => {
  const filteredLabelsOnLang = retrieveLabels(language);
  for (const label of filteredLabelsOnLang) {
    if (labelName === label.key) {
      return label.lang; 
    }
  }
  
}

export const retrieveArrayOfLabels = (labelSegment, language) => {
  const filteredLabelsOnLang = retrieveLabels(language);
  let arrayOfLabels = [];
  for (const label of filteredLabelsOnLang) {
    if (label.key.includes(labelSegment)) {
      arrayOfLabels.push(label); 
    }
  }
  return arrayOfLabels;
}

export const retrieveLabels = (language) => {
  return labels.map((label) =>{return {key: label.key, lang: label[language]}});
  
}