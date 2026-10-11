const express = require('express');
const tor = require('tor');

const app = express();
const port = 3000;

// Démarrage du serveur Tor
tor.start({ port: 9050 }, (err, torProcess) => {
  if (err) {
    console.error('Erreur lors du démarrage de Tor:', err);
    return;
  }
  console.log('Tor démarré avec succès');

  // Démarrage du serveur Express
  app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
  });
});

// Route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur le Darknet!');
});

// Route pour accéder à un service Darknet
app.get('/darknet', (req, res) => {
  res.send('Accès au service Darknet');
});
