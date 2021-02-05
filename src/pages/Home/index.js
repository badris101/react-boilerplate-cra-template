import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  console.log("code", process.env.REACT_APP_SECRET_CODE);

  const handleLang = () => {
    i18n.changeLanguage("fr");
  };

  return (
    <div>
      {t("Welcome-to-React")}
      <button onClick={handleLang}>Change lang</button>
    </div>
  );
};

export default Home;
