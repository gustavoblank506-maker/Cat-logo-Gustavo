const produtos = [
    {
        id: 1, 
        nome: "Playstation 1 + Controle Original",
        categoria: "Consoles",
        preco: 500.00,
        desconto: 10,
        conservacao: "Bom",
        descricao: "Playstation 1 em bom estado, acompanha controle original e cabos. Perfeito para colecionadores ou para quem quer reviver os clássicos dos anos 90.",
        imagem: "https://comparegames.com.br/_next/image?url=https%3A%2F%2Fus-east-1-shared-usea1-02.graphassets.com%2FAezywmWICRKCPWoFJCljEz%2Fresize%3Dwidth%3A1920%2Cheight%3A1080%2FkTFkK7MESBSkEuc3QFbn&w=3840&q=85"
    },
    {
        id: 2,
        nome: "Mega Drive 16-bit",
        categoria: "Consoles",
        preco: 400.00,
        desconto: 15,
        conservacao: "Ótimo",
        descricao: "Mega Drive em excelente estado, com jogos clássicos como Sonic, Streets of Rage e Golden Axe. Ideal para fãs de jogos retrô e colecionadores.",
        imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2025/10/02/mega-drive-tectoy-1-vb6csxqwg7du.jpg",
    },
    {
        id: 3,
        nome: "Super Nintendo",
        categoria: "Consoles",
        preco: 450.00,
        desconto: 20,
        conservacao: "Colecionador",
        descricao: "Super Nintendo em ótimo estado, com jogos clássicos como Super Mario World, The Legend of Zelda e Final Fantasy. Perfeito para colecionadores e fãs do sistema.",
        imagem: " https://s2-techtudo.glbimg.com/otVVeuAwFYZWJ23gL3R-3x7hqY0=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/A/V/mmDQgKQiC7sdFK74pqjQ/supernintendo.jpg",
    },
    {
        id: 4,
        nome: "Game Boy Color",
        categoria: "Portáteis",
        preco: 250.00,
        desconto: 5,
        conservacao: "Bom",
        descricao: "Game Boy Color em bom estado, com jogos clássicos como Mario & Luigi e The Legend of Zelda. Ideal para fãs do sistema.",
        imagem:"https://i.pinimg.com/564x/55/b5/b1/55b5b1b5da6867b94aab8a1942d2ad96.jpg",
    },
    {
        id: 5,
        nome:"Sonic The Hedgehog 2 - Cartucho",
        categoria: "Jogos",
        preco: 60.00,
        desconto: 20,
        conservacao: "Novo",
        descricao: "Sonic The Hedgehog 2 - Cartucho em novo estado, ideal para fãs do jogo.",
        imagem:"https://down-br.img.susercontent.com/file/sg-11134201-7qvfa-liaey5t8yj2e91",
    },
    
    {
        id: 6,
        nome: "The Legend of Zelda: Ocarina of Time - Cartucho",
        categoria: "Jogos",
        preco: 80.00,
        desconto: 25,
        conservacao: "Ótimo",
        descricao: "The Legend of Zelda: Ocarina of Time - Cartucho em ótimo estado, ideal para fãs do jogo.",
        imagem:"https://cdn.awsli.com.br/2500x2500/17/17021/produto/32200977/photoroom-20240212_002541_9-w1bkh0xbl8.jpg",
    },

    {
        id: 7,
        nome: "Final Fantasy VII Advent Children Limited Edition Collector's Edition.",
        categoria: "Jogos",
        preco: 950.00,
        desconto: 30,
        conservacao: "Bom",
        descricao: "Final Fantasy VII Advent Children Limited Edition Collector's Edition - Box de edição limitada especial americana.",
        imagem:"https://img.olx.com.br/images/61/614378232905387.jpg",
    },

    {
        id: 8,
        nome: "Xbox 360 E 250GB",
        categoria: "Consoles",
        preco: 600.00,
        desconto: null,
        conservacao: "Seminovo",
        descricao: "Xbox 360 E 250GB em ótimo estado, com jogos clássicos como Halo, Gears of War e Forza Motorsport. Ideal para fãs do sistema.",
        imagem:"https://m.media-amazon.com/images/I/61rJsaHF4KL.jpg",
    },

    {
        id: 9,
        nome: "Cards Pokémon - Booster 1ª Edição",
        categoria: "Jogos",
        preco: 249.90,
        desconto: 10,
        conservacao: "Novo",
        descricao: "Cards Pokémon - Booster 1ª Edição em novo estado, ideal para fãs do jogo.",
        imagem:"https://hikarudistribution.com/cdn/shop/files/ProductUltimate20482048-8_b5af1962-434f-4a3f-a07e-0410684054aa.png?v=1755085294&width=1920",
    },

    {
        id: 10,
        nome: " Yu-Gi-Oh! - Deck de Monstros do Caos",
        categoria: "Jogos",
        preco: 150.00,
        desconto: 20,
        conservacao: "Novo",
        descricao: "Deck de Monstros do Caos - Yu-Gi-Oh! em novo estado, ideal para fãs do jogo.",
        imagem:"https://http2.mlstatic.com/D_NQ_NP_729981-MLA99547950692_122025-O.webp",

    },

    {
    id: 11,
    nome: "Nintendo 64",
    categoria: "Consoles",
    descricao: "Console 64-bit com controle original incluso.",
    preco: 459.90,
    desconto: 10,
    conservacao: "Seminovo",
    imagem: "https://imgs.search.brave.com/GUJwCIyuLVnPzMSZKZvIV-VeYV_Uk8YAftCrf8HvtD8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHVibGljaXRhcmlv/c2NyaWF0aXZvcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMTEvbmludGVu/ZG8tNjQtc2VyYS1s/YW5jYWRvLWVtLW5v/dmEtdmVyc2FvLTRr/LW1pbi5wbmc"
  },
  {
    id: 12,
    nome: "Atari 2600",
    categoria: "Consoles",
    descricao: "O lendário console dos anos 80 em perfeito estado.",
    preco: 529.90,
    desconto: null,
    conservacao: "Colecionador",
    imagem: "https://imgs.search.brave.com/FJYD67mJS70AS91ZH1NyMgwovQRYsNowntMXWcQ0U9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE5/OTYxNDc3OS9waG90/by9hdGFyaS1jb25z/b2xlLTI2MDAtMTk3/Ni13aXRoLXJpdmVy/LXJhaWQtY2FydHJp/ZGdlLTE5ODIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVI4/UkljNUZrUlFGUXdS/Q2RyZDBPYlgzSllL/UzFjRlRXcGRGUWlK/NHZTRUk9"
  },
  {
    id: 13,
    nome: "Mortal Kombat — Cartucho SNES",
    categoria: "Jogos",
    descricao: "Cartucho original do clássico de luta.",
    preco: 134.90,
    desconto: 15,
    conservacao: "Seminovo",
    imagem: "https://imgs.search.brave.com/CRMbAJBqlnW_mBEnAhGbzeb_y9aMBPwQmyoKRjpDKUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL3Ro/dW1icy9pbWFnZXMv/Zy84aThBQU9TdzR5/Sm4zdWMxL3MtbDQw/MC53ZWJw"
  },
  {
    id: 14,
    nome: "The Legend of Zelda — N64",
    categoria: "Jogos",
    descricao: "Cartucho original de Ocarina of Time.",
    preco: 219.90,
    desconto: null,
    conservacao: "Colecionador",
    imagem: "https://imgs.search.brave.com/eVmNm8ZxVCQMx_nzjKFwfFKrvIMNxLXhen_LA6G8SQk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL0lXOEFB/T1N3ekt4bEMzMTkv/cy1sOTYwLndlYnA"
  },
  {
    id: 15,
    nome: "Super Mario World — SNES",
    categoria: "Jogos",
    descricao: "Cartucho original do maior clássico do Mario.",
    preco: 159.90,
    desconto: 10,
    conservacao: "Seminovo",
    imagem: "https://imgs.search.brave.com/1aRNIX8ZZCjp-2H08pio-0edB-hnvh4L5dzlcARt0-k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL3ItRUFB/ZVN3a1hWcHlDSzUv/cy1sNDAwLndlYnA"
  },
  {
    id: 16,
    nome: "Controle N64 Original",
    categoria: "Controles",
    descricao: "Controle tridente original da Nintendo.",
    preco: 129.90,
    desconto: null,
    conservacao: "Seminovo",
    imagem: "https://imgs.search.brave.com/dOj1omjorFLil0PMq3So4QSz822E7Zg7HgiYnzq3VAo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk1MTM3NC1NTEI4/Njk2NTE1MTA4MF8w/NzIwMjUtRS53ZWJw"
  },
  {
    id: 17,
    nome: "Controle Mega Drive Original",
    categoria: "Controles",
    descricao: "Controle 3 botões original da Sega.",
    preco: 89.90,
    desconto: 10,
    conservacao: "Seminovo",
    imagem: "https://imgs.search.brave.com/14vGkvKy75X3IuomA8p0VNe7W0FWN9orKo-8dH98FWU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/b2x4LmNvbS5ici90/aHVtYnM3MDB4NTAw/LzI0LzI0MzQwNjMz/MTQ4NjgzOS53ZWJw"
  },
  {
    id: 18,
    nome: "Action Figure — Pikachu 1ª Ed.",
    categoria: "Colecionáveis",
    descricao: "Boneco colecionável da primeira geração Pokémon.",
    preco: 149.90,
    desconto: 5,
    conservacao: "Novo",
    imagem: "https://imgs.search.brave.com/3YzNZWMAtR91prMGhLevB0veqDB2ja4FzRLiYShqhHU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzcyNzIyMC1NTEE5/NjY1OTk1MDY2M18x/MDIwMjUtRS53ZWJw"
  },
  {
    id: 19,
    nome: "Cards Yu-Gi-Oh! — Booster LOB",
    categoria: "Cards",
    descricao: "Pacote Legend of Blue Eyes White Dragon.",
    preco: 199.90,
    desconto: null,
    conservacao: "Novo",
    imagem: "https://imgs.search.brave.com/ubBKcu9DWxnLXNm8pfmZrioey3nYy3lRIEUjtIKzWyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL0ROTUFB/ZVN3NExCcE1rbUMv/cy1sNDAwLndlYnA"
  },
  {
    id: 20,
    nome: "Memory Card PS1 Original",
    categoria: "Acessórios",
    descricao: "Memory card original Sony para PlayStation 1.",
    preco: 69.90,
    desconto: 20,
    conservacao: "Seminovo",
    imagem: "https://imgs.search.brave.com/RSdsLHTVFnW4ixuBBuOIudBjsPP660-DbC2_J9V-o6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL29DTUFB/ZVN3Q1pwb2lCTHkv/cy1sOTYwLndlYnA"
  },
]

export default produtos;