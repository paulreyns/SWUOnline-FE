import * as yup from 'yup';

const SELECT_DECK = 'You must select a deck.';
const URL = 'Deck link must be a URL';

export const validationSchema = yup.object().shape(
  {
    deck: yup.string(),
    fabdb: yup.string().url(URL),
    deckTestMode: yup.boolean().required(),
    format: yup.string().required(),
    visibility: yup.string().required(),
    decksToTry: yup.string(),
    favoriteDeck: yup.boolean(),
    favoriteDecks: yup.string().when(['fabdb'], {
      is: (fabdb: string | undefined) => fabdb === '' || fabdb === undefined,
      then: (validationSchema) => validationSchema.required(SELECT_DECK),
      otherwise: (validationSchema) => validationSchema.optional().nullable()
    }),
    gameDescription: yup.string(),
    user: yup.string(),
    deckTestDeck: yup.string() 
  },
  [['favoriteDecks', 'fabdb']]
);

export type validationSchemaType = yup.InferType<typeof validationSchema>;

export default validationSchema;
