<?php

$arquivo = "bancoDeProdutos.json";

$produtos = [];

if (file_exists($arquivo)) {
    $conteudo = file_get_contents($arquivo);
    $produtos = json_decode($conteudo, true);

    if (!is_array($produtos)) {
        $produtos = [];
    }
}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <link rel="stylesheet" href="index.css">

    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
    >

    <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dancing+Script:wght@400..700&family=Fjalla+One&family=Montenegrin+Gothic+One&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
    >

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Produtos</title>

</head>

<body>

    <!-- BARRA DE PESQUISA -->

    <div id="barra-de-pesquisa">

        <input
            id="search"
            type="text"
            placeholder="Pesquisar"
        >

        <button id="bot" type="button">

            <i class="bi bi-search"></i>

        </button>

    </div>


    <!-- MENU LATERAL -->

    <div id="menu-lateral">

        <i id="menu" class="bi bi-list"></i>

        <p id="primeiro">Links</p>

        <i class="bi bi-house"></i>

        <p>Links</p>

        <i class="bi bi-cart"></i>

        <p>Links</p>

        <i class="bi bi-envelope"></i>

        <p>Links</p>

        <i class="bi bi-person-circle"></i>

        <p>Links</p>

    </div>


    <!-- PÁGINA INDIVIDUAL DO PRODUTO -->

    <div
        id="container-de-produtos"
        class="display hide"
    >

        <div id="container2">

            <div id="individual" class="item">

                <div id="imagens">

                    <img
                        src=""
                        class="imagem"
                        id="imagemPrincipal"
                    >

                    <div id="outrasImagens"></div>

                </div>


                <div id="texto">

                    <h1>Titulo do produto</h1>

                    <p>
                        Descrição do produto
                    </p>

                    <h2>Promoção</h2>

                    <button type="button">
                        Comprar
                    </button>

                    <h3>R$25,99</h3>

                </div>

            </div>


            <!-- DESCRIÇÃO -->

            <div id="descricaoProfunda">

                <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                </p>

            </div>


            <!-- OUTROS PRODUTOS -->

            <div id="outrosProdutos"></div>

        </div>

    </div>


    <!-- LISTA DE PRODUTOS -->

    <div id="container">

        <div id="titulo-do-produto">

            <h1>Produto-Pesquisado</h1>

        </div>


        <div id="produtos">

            <?php foreach ($produtos as $produto): ?>

                <div
                    class="item itemclass"
                    data-titulo="<?= htmlspecialchars($produto['titulo']) ?>"
                >

                    <!-- IMAGEM -->

                    <div class="imagem">

                        <img
                            src="<?= htmlspecialchars($produto['imagem']) ?>"
                            alt="<?= htmlspecialchars($produto['titulo']) ?>"
                        >

                    </div>


                    <!-- TEXTO -->

                    <div class="texto">

                        <h2 class="titulo">
                            <?= htmlspecialchars($produto['titulo']) ?>
                        </h2>

                        <p>
                            <?= htmlspecialchars($produto['descricao']) ?>
                        </p>

                        <button
                            type="button"
                            class="comprar"
                        >
                            Comprar
                        </button>

                    </div>

                </div>

            <?php endforeach; ?>

        </div>

    </div>


    <script src="produtosPaginasProdutos.js"></script>

</body>

</html>