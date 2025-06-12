import { useState, useEffect } from "react";

// Composant d'animation "machine à écrire" qui affiche progressivement le texte reçu en props
const TypewriterText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Effet qui ajoute une lettre du texte à intervalles réguliers définis par speed
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      // Nettoie le timer pour éviter les effets secondaires lors du démontage ou changement de dépendances
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <h1 className="f-28 mt-10 font-bold">{displayedText}</h1>;
};

export default TypewriterText;
