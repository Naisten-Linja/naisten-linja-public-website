const finnishFeedbackFormUrl =
  'https://link.webropolsurveys.com/Participation/Public/abb56125-ea90-42bb-a623-3fdef155bbcc?displayId=Fin2184615';

export const translations = {
  en: {
    'openLetterForm.yourLetter': 'Your letter',
    'openLetterForm.subject': 'Subject',
    'openLetterForm.content': 'Content',
    'openLetterForm.ourResponse': 'Our response',
    'openLetterForm.letterKey': 'Access key',
    'openLetterForm.accessPassword': 'Access password',
    'openLetterForm.letterSent': 'Your message was sent to us!',
    'openLetterForm.recordCredentialsReminder':
      'Please make sure you have written these credentials down in order to read your letter later.',
    'openLetterForm.date': 'Date',
    'openLetterForm.noResponse': 'There is no response to your message yet.',

    'openLetterForm.button.writeANewLetter': 'Write a new letter',
    'openLetterForm.button.readResponse': 'Read our response',
    'openLetterForm.button.cancel': 'Cancel',
    'openLetterForm.button.send': 'Send',
    'openLetterForm.button.closeLetter': 'Close letter',
    // TODO: translate me!
    'openLetterForm.button.credentialsRecorded':
      'I have recorded the credentials, clear them now.',

    'openLetterForm.error.subjectMissing':
      "Please provide the letter's subject",
    'openLetterForm.error.contentMissing': 'Your letter content is missing',
    'openLetterForm.error.failedToFetchLetter': `There was an error while fetching your message. Please report this issue through <a href="${finnishFeedbackFormUrl}">our feedback form</a>.`,
    'openLetterForm.error.sendingFailed': `There was an issue with sending your leter. Please refresh this page and try again, or contact let us know about the issue through <a href="${finnishFeedbackFormUrl}">the feedback form</a>.`,
    'openLetterForm.error.letterKeyMissing': 'Please provide the access key',
    'openLetterForm.error.accessPasswordMissing':
      'Please provide the access password',
    'openLetterForm.error.wrongCredentials':
      'Looks like you have entered the wrong access key or password. Please try again.',
  },
  fi: {
    'openLetterForm.yourLetter': 'Kirjeesi',
    'openLetterForm.subject': 'Viestin otsikko',
    'openLetterForm.content': 'Viesti',
    'openLetterForm.ourResponse': 'Vastauksemme',
    'openLetterForm.letterKey': 'Käyttäjätunnuksesi',
    'openLetterForm.accessPassword': 'Salasanasi',
    // TODO: translate me!
    'openLetterForm.letterSent': 'Your message was sent to us!',
    'openLetterForm.recordCredentialsReminder':
      'Kirjoitathan ylös automaattisesti luodun käyttäjätunnuksesi ja salasanasi. Tarvitset ne vastauksen noutamiseen.',
    'openLetterForm.date': 'Päivämäärä',
    // TODO: translate me!
    'openLetterForm.noResponse': 'There is no response to your message yet.',

    'openLetterForm.button.writeANewLetter': 'Kirjoita uusi kirje',
    'openLetterForm.button.readResponse': 'Nouda vastaus',
    'openLetterForm.button.cancel': 'Peruuta',
    'openLetterForm.button.send': 'Lähetä',
    'openLetterForm.button.closeLetter': 'Sulje kirje',
    // TODO: translate me!
    'openLetterForm.button.credentialsRecorded':
      'I have recorded the credentials, clear them now.',

    // TODO: translate me!
    'openLetterForm.error.subjectMissing':
      "Please provide the letter's subject",
    // TODO: translate me!
    'openLetterForm.error.contentMissing': 'Your letter content is missing',
    'openLetterForm.error.failedToFetchLetter': `Vastauksen noutamisessa tapahtui virhe. Yritä uudelleen (mieluiten toisella selaimella) tai ota yhteyttä <a href="${finnishFeedbackFormUrl}">palautelomakkeella</a>.`,
    'openLetterForm.error.sendingFailed': `Vastauksen lähettämisessä tapahtui virhe. Kopioi kirje talteen itsellesi esimerkiksi tekstinkäsittelyohjelmaan tai muistioon. Tämän jälkeen päivitä sivu tai avaa uusi selain, ja yritä lähettää uusi viesti. Jos tarvitset apua, voit olla yhteydessä <a href="${finnishFeedbackFormUrl}">palautelomakkeella</a>`,
    // TODO: translate me!
    'openLetterForm.error.letterKeyMissing': 'Please provide the access key',
    // TODO: translate me!
    'openLetterForm.error.accessPasswordMissing':
      'Please provide the access password',
    'openLetterForm.error.wrongCredentials':
      'Käyttäjätunnus tai salasana on väärä. Tarkista, että olet kirjoittanut ne oikein, ja yritä uudelleen.',
  },
  sv: {
    'openLetterForm.yourLetter': 'Ditt brev',
    'openLetterForm.subject': ' Rubrik',
    'openLetterForm.content': 'Meddelande',
    'openLetterForm.ourResponse': 'Vårt svar',
    'openLetterForm.letterKey': 'Användarnamn',
    'openLetterForm.accessPassword': 'Lösenord',
    // TODO: translate me!
    'openLetterForm.letterSent': 'Your message was sent to us!',
    'openLetterForm.recordCredentialsReminder':
      'Kom ihåg att skriva ner ditt automatiskt tilldelade användarnamn och lösenord. Du behöver dem senare för att kunna läsa vårt svar på brevet.',
    'openLetterForm.date': 'Datum',
    // TODO: translate me!
    'openLetterForm.noResponse': 'There is no response to your message yet.',

    'openLetterForm.button.writeANewLetter': 'Skriv ett nytt brev',
    'openLetterForm.button.readResponse': 'Läs svar',
    'openLetterForm.button.cancel': 'Avbryt',
    // TODO: translate me!
    'openLetterForm.button.send': 'Send',
    'openLetterForm.button.closeLetter': 'Stäng brevet',
    // TODO: translate me!
    'openLetterForm.button.credentialsRecorded':
      'I have recorded the credentials, clear them now.',

    // TODO: translate me!
    'openLetterForm.error.subjectMissing':
      "Please provide the letter's subject",
    // TODO: translate me!
    'openLetterForm.error.contentMissing': 'Your letter content is missing',
    'openLetterForm.error.failedToFetchLetter': `Ett fel uppstod och ditt svar gick inte att hämta. Vänligen försök på nytt (gärna i en annan webbläsare) eller kontakta oss för hjälp via vårt <a href="${finnishFeedbackFormUrl}">responsformulär</a>.`,
    'openLetterForm.error.sendingFailed': `Ett fel uppstod och det gick inte att skicka ditt brev. Kopiera brevet och spara det tillfälligt på din dator, till exempel i ett textediteringsprogram. Efter att du sparat brevet kan du pröva att uppdatera sidan eller försöka på nytt i en annan webbläsare. Om du behöver hjälp kan du vara i kontakt med oss via vårt  <a href="${finnishFeedbackFormUrl}">responsformulär</a>`,
    // TODO: translate me!
    'openLetterForm.error.letterKeyMissing': 'Please provide the access key',
    // TODO: translate me!
    'openLetterForm.error.accessPasswordMissing':
      'Please provide the access password',
    'openLetterForm.error.wrongCredentials':
      'Du har angivit ett felaktigt användarnamn eller lösenord. Kontrollera stavningen och försök på nytt.',
  },
};
