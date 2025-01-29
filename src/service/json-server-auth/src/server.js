const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/db.json');
const middlewares = jsonServer.defaults();

// Middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

console.log('Iniciando servidor JSON...');

// Rota de registro
server.post('/register', (req, res) => {
  console.log('Recebida requisição para /register');
  const {name, email, password, profilePicture, saldo, dataDeCadastro} =
    req.body;
  const db = router.db;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'Campos obrigatórios: name, email e password.',
    });
  }

  // Verifica se já existe usuário
  const existingUser = db.get('users').find({email}).value();
  if (existingUser) {
    return res.status(409).json({
      message: 'E-mail já cadastrado.',
    });
  }

  // Cria novo usuário
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    profilePicture: profilePicture || '',
    saldo: saldo ?? 100,
    dataDeCadastro: dataDeCadastro ?? new Date().toISOString(),
  };

  db.get('users').push(newUser).write();

  // Gera token e refresh token simulados
  const token = 'fake_token_' + Math.random().toString(36).substring(2);
  const refreshToken =
    'fake_refresh_token_' + Math.random().toString(36).substring(2);

  return res.status(201).json({
    token,
    refresh_token: refreshToken, // pode chamar de refresh_token ou refreshToken
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      profilePicture: newUser.profilePicture,
      saldo: newUser.saldo,
      dataDeCadastro: newUser.dataDeCadastro,
    },
  });
});

// Rota de login
server.post('/login', (req, res) => {
  console.log('Recebida requisição para /login');
  const {email, password} = req.body;
  const db = router.db;

  const user = db.get('users').find({email, password}).value();

  if (!user) {
    return res.status(401).json({message: 'E-mail ou senha inválidos.'});
  }

  // Gera token e refresh token simulados
  const token = 'fake_token_' + Math.random().toString(36).substring(2);
  const refreshToken =
    'fake_refresh_token_' + Math.random().toString(36).substring(2);

  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    profilePicture: user.profilePicture,
    saldo: user.saldo,
    dataDeCadastro: user.dataDeCadastro,
  };

  return res.status(200).json({
    token,
    refresh_token: refreshToken,
    user: userData,
  });
});

/**
 * (Opcional) Rota para simular refresh de token
 * Exemplo de requisição:
 *   POST /refresh
 *   Body: { "refresh_token": "..." }
 */
server.post('/refresh', (req, res) => {
  console.log('Recebida requisição para /refresh');
  const {refresh_token} = req.body;

  if (!refresh_token) {
    return res.status(400).json({
      message: 'Faltou o refresh_token no corpo da requisição.',
    });
  }

  // Aqui você poderia validar se o refresh_token existe, etc.
  // Por enquanto, vamos apenas gerar um novo token:
  const newToken = 'fake_token_' + Math.random().toString(36).substring(2);

  return res.status(200).json({
    token: newToken,
    refresh_token, // normalmente enviaria o mesmo refreshToken ou geraria outro
  });
});

// Rota customizada de listagem de produtos com paginação
server.get('/Products', (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const perPage = parseInt(req.query.per_page, 10) || 10;
  const db = router.db;

  const allProducts = db.get('Products').get('produtos').value();
  const total = allProducts.length;
  const lastPage = Math.ceil(total / perPage);

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentItems = allProducts.slice(start, end);

  const meta = {
    total,
    per_page: perPage,
    current_page: page,
    last_page: lastPage,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: `/?page=${lastPage}`,
    next_page_url: page < lastPage ? `/?page=${page + 1}` : null,
    previous_page_url: page > 1 ? `/?page=${page - 1}` : null,
  };

  return res.json({
    meta,
    produtos: currentItems,
  });
});

// Registra as rotas padrão do JSON Server
server.use(router);

// Sobe o servidor
server.listen(3333, () => {
  console.log('JSON Server is running on http://localhost:3333');
});
