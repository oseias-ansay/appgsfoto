export const ROUTES = {
  HOME: 'home',
  GALERIA: 'galeria',
  CONTATO: 'contato',
  CASAMENTO: 'casamento',
  DEBUTANTE: 'debutante'
} as const;

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.GALERIA]: undefined;
  [ROUTES.CONTATO]: undefined;
  [ROUTES.CASAMENTO]: undefined;
  [ROUTES.DEBUTANTE]: undefined;
};

// Extensão para o React Navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}