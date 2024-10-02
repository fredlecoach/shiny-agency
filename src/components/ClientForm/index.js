import { useParams, useNavigate } from "react-router-dom";

export default function Client() {
  const questionnaire = {
    "question 1": "Quelle est la superficie de la Terre ?",
    "question 2": "Quel est le plus grand océan de la planète ?",
    "question 3": "Qui a peint la Joconde ?",
    "question 4": "Quelle est la capitale de l'Italie ?",
    "question 5": "Quel est le symbole chimique de l'eau ?",
    "question 6": "Combien y a-t-il de continents dans le monde ?",
    "question 7": "Quel est le plus grand désert du monde ?",
    "question 8": "Quelle est la langue la plus parlée dans le monde ?",
    "question 9": "Quel est l’animal terrestre le plus rapide ?",
    "question 10": "Quelle est la distance entre la Terre et la Lune ?"
  };
  

  const { questionNumber } = useParams();  // On récupère le numéro de question à partir de l'URL
  const navigate = useNavigate();
  const currentQuestion = parseInt(questionNumber, 10);  // Convertir en nombre entier

  // Fonction pour gérer le bouton "Précédent"
  const handlePrevious = () => {
    if (currentQuestion > 1) {
      navigate(`/client/${currentQuestion - 1}`);  // Aller à la question précédente
    }
  };

  // Fonction pour gérer le bouton "Suivant"
  const handleNext = () => {
    if (currentQuestion < 10) {
      navigate(`/client/${currentQuestion + 1}`);  // Aller à la question suivante
    } else {
      navigate(`/results`);  // Rediriger vers la page des résultats
    }
  };

  return (
    <div>
      <h1>Questionnaire Client</h1>
      {/* <h2>Question {currentQuestion}</h2> */}
        {/* Afficher la question actuelle */}
        <h2>{questionnaire[`question ${currentQuestion}`]}</h2>
      
      <div>
        {/* Bouton Précédent, désactivé si on est à la question 1 */}
        <button onClick={handlePrevious} disabled={currentQuestion === 1}>
          Précédent
        </button>
      </div>
      
      <div>
        {/* Bouton Suivant */}
        <button onClick={handleNext}>
          {currentQuestion === 10 ? "Voir les résultats" : "Suivant"}
        </button>
      </div>
    </div>
  );
}
