# N1AT2_MobileII

App em React Native (Expo) para organizar partidas com amigos.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- O app **Expo Go** no celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779)), ou um emulador Android/iOS configurado

## Como rodar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npx expo start
   ```

3. Um QR code vai aparecer no terminal. Escaneie com o app **Expo Go** (Android: pelo próprio app; iOS: pela câmera) para abrir o projeto no celular.

   Se preferir usar um emulador, com o servidor rodando pressione `a` (Android) ou `i` (iOS) no terminal.

## Scripts úteis

```bash
npx expo start --android   # abre direto no emulador/dispositivo Android
npx expo start --web       # abre no navegador
npx expo lint              # roda o lint
npx tsc --noEmit           # verifica os tipos (se o projeto usar TypeScript)
```
