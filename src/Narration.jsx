export default function Narration({ text }) {
  const languageMap = {
    en: "en",
    hi: "hi",
    ne: "ne",
  };

  const speak = async (langCode) => {
    const targetLang = languageMap[langCode] || "en";

    try {
      const response = await fetch("http://localhost:5000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: text,
          targetLang: targetLang,
        }),
      });

      const data = await response.json();
      const translatedText = data.translatedText;

      const utterance = new SpeechSynthesisUtterance(translatedText);
      
      const langCodeMap = {
        en: "en-US",
        hi: "hi-IN",
        ne: "ne-NP",
      };
      utterance.lang = langCodeMap[langCode] || "en-US";
      
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error("Translation or speech failed:", error);
      alert("Unable to translate or speak at the moment.");
    }
  };

  return (
    <div className="flex gap-2 mt-3">
      <button
        onClick={() => speak("en")}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        🔊 English
      </button>
      <button
        onClick={() => speak("hi")}
        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        🔊 Hindi
      </button>
      <button
        onClick={() => speak("ne")}
        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        🔊 Nepali
      </button>
    </div>
  );
}
