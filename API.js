async function fetchDataFromAPI(year, month, day) {
  const API_KEY = "u9Im98KEMb0cteBr833XLfHgTMfBqfdUV38HV3hM";
  try {
    const todayspicture = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${year}-${month}-${day}`
    );
    try {
      const jsonparsed = await todayspicture.json();
      useApiData(jsonparsed.url, jsonparsed.explanation, jsonparsed.title);
    } catch (err) {
      opis.innerHTML = "Wystąpił bląd z API";
    }
  } catch (err) {
    opis.innerHTML = "Wystąpił bląd z API";
  }
}
// function useApiData(data, explanation, title) {
//   obrazek.src = data;
//   opis.innerHTML = explanation;
//   tytul.innerHTML = title;
// }
export default fetchDataFromAPI;
