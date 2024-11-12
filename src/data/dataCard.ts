import Managment from "../../assets/time_managment.svg";
import Programing from "../../assets/programming.svg";
import Meditation from "../../assets/meditation.svg";

export interface IData {
  tittle: string;
  content: string;
  image: string;
  bgColor: string;
}

export const data: Array<IData> = [
  {
    tittle: "Dedica muchas horas",
    content:
      "Un mínimo de 30 horas semanales. Si no te alcanza, tendrás que dedicarle más horas. Al principio parece imposible, pero notarás una mejoría rápidamente.",
    image: Managment,
    bgColor: "#4ca2a8",
  },

  {
    tittle: "Programa de proyectos propios",
    content:
      "Más de 10 horas trabajando en proyectos propios, que 10 horas mirando tutoriales. La motivación y la implicación en el proyecto ayudarán a acelerar el aprendizaje.",
    image: Programing,
    bgColor: "#d2d5d9",
  },
  {
    tittle: "Intenta descansar",
    content:
      "Descansar bien y desconectar son vitales. De esta forma reducirás el estrés y la ansiedad. Mejorarás tu concentración y consolidarás tu aprendizaje",
    image: Meditation,
    bgColor: "#ffd167",
  },
];
