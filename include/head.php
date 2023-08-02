<!-- Base !-->
<?php
$url =  explode('/', $_SERVER['PHP_SELF']);

if ($_SERVER['HTTP_HOST'] == 'localhost') {
    $diretorio = $url[1];
    $nome_arquivo = $url[2];
    $url = explode('.', $nome_arquivo);
    $base = "http://" . $_SERVER['HTTP_HOST'] . "/" . $diretorio . "/";
    $pagina = $url[0];
} else {
    $base = "https://" . $_SERVER['HTTP_HOST']."/cariocaemportovelho/";
    $nome_arquivo = $url[1];
}
?>

<meta name="Keywords" content="IR producoes, IR producoes e eventos, IR, producoes, eventos, stand up, show" />
<link rel="shortcut icon" type="image/x-icon" href="assets/favicon.png">
<meta name="robots" content="follow" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
<meta name="format-detection" content="telephone=no">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="author" content="">
<link href="" rel="publisher" />
<meta name="theme-color" content="#14243d">
<meta name="apple-mobile-web-app-status-bar-style" content="#14243d">
<meta name="msapplication-navbutton-color" content="#14243d">
<!-- Open Graph !-->
<meta property="og:title" content="IR Produções e eventos" />
<meta property="og:url" content="https://irproducoes.com.br/inicio/" />
<meta property="og:type" content="company" />
<meta property="og:image" content="https://irproducoes.com.br/inicio/assets/og-icon.png" />
<meta property="og:image:width" content="200" />
<meta property="og:image:height" content="200" />
<meta property="og:site_name" content="IR Produções e eventos" />
<meta property="og:description" content="Empresa de organização de eventos. Trabalhamos na concepção e gestão de eventos empresariais e sociais. Atuamos com análise de perfil do cliente, planejamento, organização e produção do evento."/>
<!-- Styles !-->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" async>
<link rel="stylesheet" href="css/main.css" async>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" async/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" async/>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.css" async/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.1/lity.min.css" integrity="sha512-UiVP2uTd2EwFRqPM4IzVXuSFAzw+Vo84jxICHVbOA1VZFUyr4a6giD9O3uvGPFIuB2p3iTnfDVLnkdY7D/SJJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- GTM !-->
<?php include('gtm-header.php'); ?>
<!-- Scripts preload -->
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"/>