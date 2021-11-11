import NascitaDiVenereImg from "../assets/img/nascita_di_venere.png";
import LUltimaCenaImg from "../assets/img/lultima_cena.png";
import LaCreazioneDiAdamoImg from "../assets/img/la_creazione_di_adamo.png";
import AnatomyLessonImg from "../assets/img/anatomy_lesson.png";

const initialState = [
  {
    id: "fb99a741-1fed-4f7d-940b-cff57fc1db4c",
    title: "«Рождение Венеры» Сандро Боттичелли",
    image: NascitaDiVenereImg,
    initial_price: "2 000 000 $",
    final_price: "1 000 000 $",
    sold: false,
    in_cart: false,
  },
  {
    id: "80374a60-98f1-4787-9cc4-70179e9172bf",
    title: "«Тайная вечеря»  Леонардо да Винчи",
    image: LUltimaCenaImg,
    initial_price: null,
    final_price: "3 000 000 $",
    sold: false,
    in_cart: false,
  },
  {
    id: "2cae1155-d691-4a1b-b155-484cc2fb2568",
    title: "«Сотворение Адама» Микеланджело",
    image: LaCreazioneDiAdamoImg,
    initial_price: "6 000 000 $",
    final_price: "5 000 000 $",
    sold: false,
    in_cart: true,
  },
  {
    id: "f6ba0460-1a98-435a-aa9b-b0d92ce6a29e",
    title: "«Урок анатомии»  Рембрандт",
    image: AnatomyLessonImg,
    initial_price: null,
    final_price: null,
    sold: true,
    in_cart: false,
  },
];

export const initializer = (initialValue = initialState) => {
  return JSON.parse(localStorage.getItem("artworks")) || initialValue;
};

export const artworkReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_IN_CART":
      return state.find((art) => art.id === action.id)
        ? state.map((art) =>
            art.id === action.id
              ? {
                  ...art,
                  in_cart: !art.in_cart,
                }
              : art
          )
        : state;

    default:
      return state;
  }
};
