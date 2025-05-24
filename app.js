const express = require('express');
const path = require('path');
const app = express();

// Configurações
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => res.render('home'));
app.get('/create', (req, res) => res.render('create'));
app.get('/manage', (req, res) => res.render('manage'));
app.get('/settings', (req, res) => res.render('settings'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

app.get('/search', (req, res) => {
    const query = req.query.q;
    // Aqui você implementará a lógica de pesquisa depois
    res.render('search', { 
        title: 'Resultados da Pesquisa',
        currentPage: 'search',
        query,
        results: [] // Array vazio por enquanto
    });
});

