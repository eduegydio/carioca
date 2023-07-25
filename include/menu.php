<header>
    <div class="menu" id="menuResponsible">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                    <a href="<?= $base ?>"><img src="<?= $base ?>assets/images/logo-ir-producoes.png" alt="IR - Producoes" class="menuLogo"></a>
                </div>

                <div class="col-auto d-none d-lg-block">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <a href="#inicio" class="linksMenu linha-abaixo-hover inicio">Início</a>
                        </div>
                        <div class="col-auto">
                            <a href="#institucional" class="linksMenu linha-abaixo-hover institucional">Institucional</a>
                        </div>
                        <div class="col-auto">
                            <a href="#agenciamento-artistico" class="linksMenu linha-abaixo-hover agenciamento">Agenciamento</a>
                        </div>
                        <div class="col-auto">
                            <a href="#agenda" class="linksMenu linha-abaixo-hover agenda">Agenda</a>
                        </div>
                        <div class="col-auto">
                            <a href="#parceiros" class="linksMenu linha-abaixo-hover parceiros">Parceiros</a>
                        </div>
                        <div class="col-auto">
                            <a href="#contato" class="linksMenu linha-abaixo-hover contato">Contato</a>
                        </div>

                        <div class="col-auto d-flex flex-row gap-2 ps-3">
                            <div class="col-auto">
                                <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5569999429345" target="_blank">
                                    <img src="<?= $base ?>assets/icons/whatsapp-icon.png" alt="Whatsapp" class="icones-menu">
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="https://www.facebook.com/irproducoes/" target="_blank">
                                    <img src="<?= $base ?>assets/icons/facebook-icon.png" alt="Facebook" class="icones-menu">
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="https://www.instagram.com/irproducoes.oficial/" target="_blank">
                                    <img src="<?= $base ?>assets/icons/instagram-icon.png" alt="Instagram" class="icones-menu">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- MENU MOBILE  !-->
                <div class="col-auto position-relative ms-lg-0 order-1 order-lg-3 d-lg-none">
                    <div class="menu-mobile position-relative d-flex justiify-content-center align-items-center mx-auto" style="z-index: 1101;" id="menuHamburguerMenuPrincipal">
                        <div class="menu-hamburguer mx-auto"></div>
                    </div>
                    <div class="menuOpcoes box-shadow" id="menuPrincipal" style="display: none;">
                        <div class="topo-fechar"></div>
                        <ul class="mb-0 ps-0 pb-3">
                            <li class="fundo-alternado"><a href="#inicio" class="linksMenu linha-abaixo-hover inicio">Início</a></li>
                            <li><a href="#institucional" class="linksMenu linha-abaixo-hover institucional">Institucional</a></li>
                            <li class="fundo-alternado"><a href="#agenciamento-artistico" class="linksMenu linha-abaixo-hover agenciamento">Agenciamento</a></li>
                            <li><a href="#agenda" class="linksMenu linha-abaixo-hover agenda">Agenda</a></li>
                            <li class="fundo-alternado"><a href="#parceiros" class="linksMenu linha-abaixo-hover parceiros">Parceiros</a></li>
                            <li><a href="#contato" class="linksMenu linha-abaixo-hover contato">Contato</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="close-drop" style="display: none;"></div>
</header>

<div id="fakeHeader"></div>