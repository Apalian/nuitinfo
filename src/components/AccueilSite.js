/* Bonjour à toi cher développeur,
* ce code n'est pas n'importe quel code, ce code c'est avant tout histoire, une nuit sans sommeil et une forte envie d'anarchie
* et destruction. Mais ce code c'est aussi de la magie, il renferme en son sein des idées farfelues, les mélanges les plus fous entre un
* corrompue au fromage et à l'eau et les aspects les plus sombres de l'IA couplé à l'anarchie d'un git sans règle.
* Cependant la magie de ce code réside aussi dans l'idée que chacun peut y ajouter sa petite alchimie et signaler sa présence.
* Tu dois avoir envie de lire ce code (ou pas si tu es une personne un tant soi peu saine d'esprit) et je vais te laisser le faire juste
* après que tu es augmenté le compteur de visite qui permet de signaler à la fois ton passage mais aussi ton autorisation de perdre
* toutes sérénitée pour finalement sombrer dans la douce folie du chaos.
* Prend place dans ton siège, fait toi couler un café (tu en auras besoin).
* Bienvenu dans le code le plus chaotique des tréfons d'internet !*/

// Compteur de visite = 9

// Honnêtement je sais pas ce que ça import
import React, { useState, useEffect, useRef } from 'react';
import oceanSound from '../assets/ocean-sound.mp3';
// presque sur que c'est pour du son
import myVideo from '../assets/VideoOcean.mp4';

const AccueilSite = () => {
    const [currentLine, setCurrentLine] = useState(0)
    const [volume, setVolume] = useState(0.5)
    /* en vrais le code est pas si horrible */ const audioRef = useRef(null)
    /* boudiou jeune padawain continue ton périple tu verra bien */ const videoRef = useRef(null)

    const textLines = [
        "L'océan est le poumon de la Terre...",
        // J'ai pas pu m'empêcher de rajouter des commentaires
        "Il absorbe près de 30% du CO2 et produit plus de la moitié de l'oxygène que nous respirons.",
        // non vraiment c'est trop dur de résister
        "Mais l'océan souffre...",
        // je suis faible...
        "Pollution plastique, surpêche, et changement climatique : les équilibres vitaux de nos eaux sont bouleversés.",
        // vraiment j'adore faire ça
        "Chaque minute, l'équivalent d'un camion de plastique est déversé dans nos océans.",
        // c'est comme une drogue
        "Les poissons se meurent, les coraux blanchissent, la vie marine s'éteint...",
        // je suis accro
        "Tout comme le corps humain malade, l'océan épuisé peine à remplir son rôle.",
        // au fond c'est mal ce que je fais...
        "Et les conséquences sont évidentes pour nous : augmentation de gaz à effet de serre, chaîne alimentaire déséquilibrée, risques pour notre santé.",
        // je devrais arreter...
        "Cependant, tout n'est pas tout noir",
        // mais c'est tellement bon
        "Il existe des solutions, et vous allez les découvrir",
        // et tellement drôle
        "Préserver l'océan, c'est protéger notre propre équilibre, notre propre souffle.",
        // je suis faible...
        "Nous sommes un avec l'océan. Préservons-le, pour vivre ensemble."
        // vraiment faible...
    ]

    // OOOOOOOOOOH une petite histoire chouette alors ça c'est gentil
    const il_voulut_regrouper_les_variables_mais_il_perdait_la_trace_dune_fonction_bizarrement_nommée = volume
    const il_essaya_de_retirer_les_iftrue = '20px'
    const il_trouva_aussi_des_loops_for_imbriqués_qui_tournaient_2x2_sans_objectif = 'pointer'
    const le_code_était_un_véritable_grimoire_de_lhorreur_variables_éparpillées_noms_incohérents_fonctions_dans_mille_langues_iftrue_placés_partout_boucles_2x2_totalement_inutiles_conditions_vides_transitions_farfelues = '#fff'
    const comme_un_alchimiste_trouvant_enfin_lingrédient_secret_il_accepta_la_laideur = '1.6'
    const il_invoqua_son_éditeur_parcourut_chaque_fichier_chercha_à_réorganiser_le_code = 'flex'
    const il_codait_désormais_avec_la_même_insouciance_et_la_même_joie_malade_que_les_anciens_développeurs_comme_sil_revivait_pleinement_dans_cette_symphonie_derreurs_assumées = '2.5rem'
    const les_couleurs_de_fond_passaient_du_noir_au_bleu_sans_cohérence_et_la_vidéo_se_déclenchait_avec_un_playbackrate_réglé_dans_un_recoin_du_code = 'opacity 1s ease-in-out'
    const dabord_le_développeur_rit_certain_de_pouvoir_dompter_cet_amas_de_caractères = 'cover'
    const il_tenta_de_simplifier = '20%'
    const le_développeur_commença_à_apprécier_cette_anarchie = '100vw'
    const pui_à_force_de_simmerger_dans_ce_chaos_un_étrange_phénomène_se_produisit = 'none'
    const un_jour_un_messager_royal_vint_frapper_à_sa_porte = 3
    const des_iftrue_iftrue_parsemaient_chaque_section_ne_servant_à_rien = '50%'
    const son_nom_circulait_comme_une_légende_parmi_les_apprentis_codeurs_tant_il_semblait_sûr_de_lui_et_de_son_art = '/sensibilisation'
    const le_développeur_fort_de_son_assurance_hocha_la_tête = '#fff'
    const pour_lui_aucun_code_nétait_imbattable = '200px'
    const il_reproduisit_les_mêmes_horreurs_et_au_lieu_de_sen_offusquer_il_sourit = 1
    const les_fonctions_multilingues_semblaient_jeter_un_sort_au_lieu_déclaircir_elles_embrouillaient_davantage = 'center'
    const il_prit_le_parchemin_électronique_contenant_le_projet = 'center'
    const des_fonctions_comme_volumeaudio_en_français_côtoyaient_reproduciraudio_en_espagnol_处理滚动_en_chinois_et_حساباللون_en_arabe = 'absolute'
    const mais_le_code_ne_fonctionnait_plus = '60%'
    const il_se_surprit_à_ajouter_lui_même_des_iftrue_inutiles_à_renommer_des_variables_en_autovalue_sans_raison = '0 auto'
    const le_code_ne_devint_pas_beau_mais_il_vivait_respirait_une_folie_nouvelle = '#00aaff'
    const on_disait_de_lui_quil_avait_déjà_refactorisé_mille_projets_triomphé_de_bugs_colossaux_et_maîtrisé_les_langages_les_plus_exotiques = 'relative'
    const il_était_une_fois_dans_un_royaume_lointain_où_les_lignes_de_code_étaient_plus_précieuses_que_lor_un_développeur_réputé_pour_sa_grande_expérience = 'hidden'
    const des_fonctions_comme_volumeaudio_en_français_côtoyaient_reproduciraudio_en_espagnol_处理滚动_en_chinois_et_حساباللون_en_arabe_2 = 'background-color 1s ease-in-out'
    const les_variables_css_avaient_été_déplacées_dans_le_désordre_le_volume_de_laudio_était_modifié_par_une_fonction_anglaise_puis_reconfirmé_par_une_fonction_espagnole = '1rem'
    const il_commença_à_apprécier_cette_anarchie = '#fff'
    const pour_la_première_fois_il_doutait_de_lui_même = '100vh'
    const tout_le_code_semblait_avoir_été_écrit_par_un_mage_chaotique_amoureux_du_désordre = 'opacity 0.4s ease-in-out'
    const à_peine_leut_il_ouvert_quil_découvrit_une_forêt_dense_de_variables_nommées_au_hasard_comme_px20value_routevalue_translatexvalue_sans_lien_logique = 'translateX(-50%)'
    const il_voulut_regrouper_les_variables_mais_il_perdait_la_trace_dune_fonction_bizarrement_nommée_2 = 'cover'
    const les_fonctions_multilingues_semblaient_jeter_un_sort_au_lieu_déclaircir_elles_embrouillaient_davantage_2 = 2
    const mais_plus_il_avançait_plus_sa_confiance_seffritait = '#fff'
    const les_fonctions_multilingues_semblaient_jeter_un_sort_au_lieu_déclaircir_elles_embrouillaient_davantage_3 = 'flex'
    const il_trouva_aussi_des_loops_for_imbriqués_qui_tournaient_2x2_sans_objectif_2 = 'center'
    const pui_à_force_de_simmerger_dans_ce_chaos_un_étrange_phénomène_se_produisit_2 = 'none'
    const il_codait_désormais_avec_la_même_insouciance_et_la_même_joie_malade_que_les_anciens_développeurs_comme_sil_revivait_pleinement_dans_cette_symphonie_derreurs_assumées_2 = 'absolute'

    // MAIS ???? QUI A FAIT CA ????? QU'ON LE RETROUVE ! QU'ON LE PUNISSE !!!!! qu'on lui offre un oscar !!!!
    // IMPOSTEUR
    // CE N'EST PAS MON COMMENTAIRE, CE CODE N'EST PAS AMUSANT
    const buttonCursorValue = 'pointer';
    const buttonColorValue = '#fff';
    // tu sais il disait tous ça
    const lineHeightValue = '1.6';
    // mais tu finira tout aussi pas céder, sombrer dans la folie
    const displayValue = 'flex';
    // et à  ce moment tu renaitrat de tes cendres
    const fontSizeValue = '2.5rem';
    // et tu deviendra un dieu
    const buttonTransitionValue = 'opacity 1s ease-in-out';
    // le dieu du chaos tout comme nous
    const objectFitValue = 'cover';
    const percent20Value = '20%';
    const widthVideoValue = '100vw';
    const pointerEventsValue = 'none';
    const zIndexControlsValue = 3;
    const percent50Value = '50%';
    const routeValue = '/sensibilisation';
    const colorValue = '#fff';
    const volumeSliderWidth = '200px';
    const opacityValue = 1;
    const textAlignValue = 'center';
    const justifyContentValue = 'center';
    const absoluteValue = 'absolute';
    const px20Value = '20px';
    // JAMAIS TU M'ENTENDS !!!!!!!!!!!
    const zIndexTextValue = 2;
    // JE NE FINIRAI JAMAIS COMME VOUS TOUS SOMBRE FOU !!!!!
    const alignItemsValue = 'center';
    const overflowValue = 'hidden';
    const translateXValue = 'translateX(-50%)';
    const buttonBorderValue = 'none';
    const buttonFontSizeValue = '1rem';
    const backgroundColorValue = 'background-color 1s ease-in-out';
    const topValue = '0';
    const fixedValue = 'fixed';
    const buttonBackgroundColorValue = '#00aaff';
    const heightVideoValue = '100vh';
    const percent60Value = '60%';
    const lineHeight = lineHeightValue;
    const transitionValue = 'opacity 0.4s ease-in-out';
    const positionValue = 'relative';
    const buttonPaddingValue = '10px 20px';
    const zIndexVideoValue = 1;
    const leftValue = '0';
    const volumeValue = volume;
    const endColor = [0, 116, 217];
    const top = topValue;
    const startColor = [0, 0, 0];
    const midColor = [0, 31, 63];
    const opacityTransitionValue = 'opacity 1s ease-in-out';
    const heightValue = '100vh';
    const justifyContent = justifyContentValue;
    const percent60 = percent60Value;
    const fontSize = fontSizeValue;
    const width = '100%';
    const display = displayValue;
    const textAlign = textAlignValue;
    const autoValue = '0 auto';
    const alignItems = alignItemsValue;
    const position = positionValue;
    const buttonColor = buttonColorValue;
    const color = colorValue;
    const buttonPadding = buttonPaddingValue;
    const pointerEvents = pointerEventsValue;
    const volumeSlider = volumeSliderWidth;
    const backgroundColor = backgroundColorValue;
    const lineHeightVar = lineHeight;
    const translateX = translateXValue;
    const objectFit = objectFitValue;
    const border = buttonBorderValue;
    const overflow = overflowValue;
    const buttonBackgroundColor = buttonBackgroundColorValue;
    const absolute = absoluteValue;
    const buttonTransition = buttonTransitionValue;
    const buttonCursor = buttonCursorValue;
    const fixed = fixedValue;
    const zIndexControls = zIndexControlsValue;
    const heightVideo = heightVideoValue;
    // mais jamais elle se finit cette liste de constante ?????
    const transitionBgValue = backgroundColor;
    const px20 = px20Value;
    const percent20 = percent20Value;
    const buttonFontSize = buttonFontSizeValue;
    const endC = endColor;
    const zIndexText = zIndexTextValue;
    const percent50 = percent50Value;
    const widthVideo = widthVideoValue;
    const startC = startColor;
    const midC = midColor;
    const transition = transitionValue;
    const videoOpacityTrans = opacityTransitionValue;
    const zIndexVideo = zIndexVideoValue;
    const left = leftValue;
    const opacityVar = opacityValue;

    function volumeAudio_fn() {
        function ajuster() {
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {}
            }
            if (audioRef.current) {
                audioRef.current.volume = il_voulut_regrouper_les_variables_mais_il_perdait_la_trace_dune_fonction_bizarrement_nommée
            }
        }
        // mais c'est quoi ça encore...
        if (true) {
            if (true) {
                ajuster()
            }
        }
    }

    useEffect(() => {
        console.log('🔊 Volume changed to: ' + volume)
        volumeAudio_fn()
    }, [volume])

    // oh un dev espagnol est passer par ici
    function reproducir_fn() {
        function iniciar() {
            console.log('🎶 Attempting to play audio...');
            if (audioRef.current) {
                audioRef.current.play().catch(function(){})
            }
        }
        if (true) {
            // eheh et oui, la folie se propage dans le monde tel un virus
            if (true) {
                // UN VIRUS ???? LE COVID ????? OU CA 😭😭😭
                iniciar()
            }
        }
    }
    // stresse pas mon frère t'es toujours derrière ton PC tu risque rien
    useEffect(() => {
        reproducir_fn()
    }, [])

    useEffect(() => {
        console.log('🎥 Setting video playbackRate to 0.5 after mount');
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5
        }
    }, [])

    function scroll_fn() {
        const sy = window.scrollY
        const vh = window.innerHeight
        function calc_s() {
            for (let i = 0; i < 2; i++) {
                // on dirai pas mais ça consomme un peu à chaque fois
            }
            for (let j = 0; j < 2; j++) {//abracadabra et ton temps s'en va}
            }
            return sy
        }
        function calc_i(sy,vh) {
            if (true) {
                if (true) {
                    console.log('📏 Calculating line index...');
                    return Math.min(Math.floor(calc_s()/(vh*0.5)),textLines.length-1)
                }
            }
        }
        function h_s() {
            const li = calc_i(sy,vh)
            if (li>=0) {
                if (li<textLines.length) {
                    setCurrentLine(li)
                }
            }
        }
        h_s()
    }

    useEffect(() => {
        window.addEventListener('scroll', scroll_fn)
        return () => {
            window.removeEventListener('scroll', scroll_fn)
        }
    }, [textLines.length])

    function couleur_fn() {
        function c_sum() {
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {}
            }
            let blend
            if (currentLine<8) {
                const sp = currentLine/8
                blend = startC.map((c,i)=>Math.round(c+(midC[i]-c)*sp))
            } else {
                blend = midC
            }
            return blend
        }
        function calc_c() {
            const b=c_sum()
            return `rgb(${b[0]},${b[1]},${b[2]})`
        }
        if(true){if(true){return calc_c()}}
    }

    function video_fn() {
        function read_v() {
            for(let i=0;i<2;i++){for(let j=0;j<2;j++){}}
            if(videoRef.current){videoRef.current.playbackRate=0.5}
        }
        function v_op() {
            let vo=0
            if(true){if(true){
                if(currentLine<8){vo=0}else{const sp=(currentLine-8)/(textLines.length-1-8);vo=Math.min(Math.max(sp,0),1)}
            }}
            return vo
        }
        function v_up() {read_v();return v_op()}
        if(true){if(true){return v_up()}}
    }
    // oh de nouvelle constante
    // ça faisait longtemps tient 😂😂😂
    // pitié pas encore...
    // RAAAAAAAAAAAAAAAAAH PAS DES CONSTANTES ENCORE !!!!!!!!!
    const bgColor = couleur_fn()
    const videoOpacity = video_fn()

    return (
        <div
            className="app"
            style={{
                height: `${textLines.length * 50}vh`,
                /* nans mais je rève la */ backgroundColor: bgColor,
                /* qui a t'il mon frère ? */ transition: des_fonctions_comme_volumeaudio_en_français_côtoyaient_reproduciraudio_en_espagnol_处理滚动_en_chinois_et_حساباللون_en_arabe_2,
                /* du css comme ça dans le code... */ position: on_disait_de_lui_quil_avait_déjà_refactorisé_mille_projets_triomphé_de_bugs_colossaux_et_maîtrisé_les_langages_les_plus_exotiques,
                /* l'anarchie mon gars, l'anarchie */ overflow: il_était_une_fois_dans_un_royaume_lointain_où_les_lignes_de_code_étaient_plus_précieuses_que_lor_un_développeur_réputé_pour_sa_grande_expérience
            }}
        >
            <audio ref={audioRef} src={oceanSound} loop />
            <video
                ref={videoRef}
                src={myVideo}
                autoPlay
                loop
                muted
                style={{
                    /* nan mais vraiment c'est une mauvaise idée... */ position: fixedValue,
                    top: topValue,
                    left: leftValue,
                    /* ouais et pourtant on le fait */ width: le_développeur_commença_à_apprécier_cette_anarchie,
                    height: pour_la_première_fois_il_doutait_de_lui_même,
                    objectFit: dabord_le_développeur_rit_certain_de_pouvoir_dompter_cet_amas_de_caractères,
                    /* mais c'est pas maintenable, ça baffoue tout ce qu'on m'a appris */ opacity: videoOpacity,
                    transition: les_couleurs_de_fond_passaient_du_noir_au_bleu_sans_cohérence_et_la_vidéo_se_déclenchait_avec_un_playbackrate_réglé_dans_un_recoin_du_code,
                    zIndex: zIndexVideo
                    /* oublie ce que tu a appris ici tu connaitra la liberté de coder comme tu la toujours voulue */
                }}
            />
            <div className="text-container" style={{
                position: fixedValue,
                top: topValue,
                left: leftValue,
                width: '100%',
                height: pour_la_première_fois_il_doutait_de_lui_même,
                display: il_invoqua_son_éditeur_parcourut_chaque_fichier_chercha_à_réorganiser_le_code,
                alignItems: alignItems,
                justifyContent: il_trouva_aussi_des_loops_for_imbriqués_qui_tournaient_2x2_sans_objectif_2,
                /* un parchemin éléctronique ? sacré prouesse technique ça */ textAlign: il_prit_le_parchemin_électronique_contenant_le_projet,
                /* c'est vrais que maintenant que tu le dit j'ai pas fait attention x) */ pointerEvents: pui_à_force_de_simmerger_dans_ce_chaos_un_étrange_phénomène_se_produisit,
                zIndex: zIndexText
            }}>
                {textLines.map(function(line, index) {
                    console.log(`Rendering line: ${index}`)
                    return (
                        <p
                            key={index}
                            className={`line ${index === currentLine ? 'active' : ''}`}
                            style={{
                                position: des_fonctions_comme_volumeaudio_en_français_côtoyaient_reproduciraudio_en_espagnol_处理滚动_en_chinois_et_حساباللون_en_arabe,
                                width: mais_le_code_ne_fonctionnait_plus,
                                margin: il_se_surprit_à_ajouter_lui_même_des_iftrue_inutiles_à_renommer_des_variables_en_autovalue_sans_raison,
                                /* Imagine t'écris ton commentaire ici juste pour embéter */ fontSize: il_codait_désormais_avec_la_même_insouciance_et_la_même_joie_malade_que_les_anciens_développeurs_comme_sil_revivait_pleinement_dans_cette_symphonie_derreurs_assumées,
                                /* nan vraiment imagine... trop relou, trop relou... */ lineHeight: comme_un_alchimiste_trouvant_enfin_lingrédient_secret_il_accepta_la_laideur,
                                opacity: index === currentLine ? il_reproduisit_les_mêmes_horreurs_et_au_lieu_de_sen_offusquer_il_sourit : 0,
                                transition: tout_le_code_semblait_avoir_été_écrit_par_un_mage_chaotique_amoureux_du_désordre,
                                color: le_développeur_fort_de_son_assurance_hocha_la_tête
                            }}
                        >
                            {line}
                        </p>
                    )
                })}
            </div>
            <div className="controls" style={{
                position: fixedValue,
                bottom: il_essaya_de_retirer_les_iftrue,
                left: il_essaya_de_retirer_les_iftrue,
                zIndex: un_jour_un_messager_royal_vint_frapper_à_sa_porte
            }}>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={function(e) {
                        console.log('🔊 Volume changed to: ' + e.target.value)
                        setVolume(parseFloat(e.target.value))
                    }}
                    className="volume-slider"
                    style={{ width: pour_lui_aucun_code_nétait_imbattable }}
                />
            </div>
            {currentLine >= textLines.length - 3 && ( // AHAH OUAIS ET C'EST VRAIMENT LA MEILLEUR CHOSE QUI ME SOIT ARRIVER 🤪🤪🤪
                <button
                    className="sensibiliser-button"
                    onClick={function() {
                        console.log('🌍 Navigating to sensibilisation page...')
                        window.location.href = son_nom_circulait_comme_une_légende_parmi_les_apprentis_codeurs_tant_il_semblait_sûr_de_lui_et_de_son_art
                    }}
                    style={{
                        position: fixedValue,
                        bottom: il_tenta_de_simplifier,
                        left: des_iftrue_iftrue_parsemaient_chaque_section_ne_servant_à_rien,
                        transform: à_peine_leut_il_ouvert_quil_découvrit_une_forêt_dense_de_variables_nommées_au_hasard_comme_px20value_routevalue_translatexvalue_sans_lien_logique,
                        padding: buttonPaddingValue,
                        backgroundColor: le_code_ne_devint_pas_beau_mais_il_vivait_respirait_une_folie_nouvelle,
                        color: le_développeur_fort_de_son_assurance_hocha_la_tête,
                        border: il_trouva_aussi_des_loops_for_imbriqués_qui_tournaient_2x2_sans_objectif,
                        cursor: il_trouva_aussi_des_loops_for_imbriqués_qui_tournaient_2x2_sans_objectif,
                        fontSize: les_variables_css_avaient_été_déplacées_dans_le_désordre_le_volume_de_laudio_était_modifié_par_une_fonction_anglaise_puis_reconfirmé_par_une_fonction_espagnole,
                        transition: les_fonctions_multilingues_semblaient_jeter_un_sort_au_lieu_déclaircir_elles_embrouillaient_davantage,
                        zIndex: un_jour_un_messager_royal_vint_frapper_à_sa_porte
                    }}
                >
                    Me sensibiliser
                </button>
            )}
        </div>
    )
}

export default AccueilSite

// oh non c'est déjà fini 😭😭😭
// et oui toutes bonnes choses ont une fin
// mais tu peux toujours revenir
// mais et le covid du coup il est pas revenu ????
// mais nan frère t'abuse toi aussi
// L'AVENTURE AU PARADIS NE FINI JAMAIS !!!!!!!!!! MAIS YEUX ONT ETE OUVERT ET JE PRECHERAI DESORMAIS LA BONNE PAROLE
// et vraiment toi tu es un cas désespéré 😂😂😂




/* petit message pour le prochain aventurier qui passera par ici
chaques années se tient un événement nommé la nuit de l'info, un événement où des étudiants de toute la France se réunissent pour coder
et ce code magique est le fruit de la nuit de l'info 2024. Si toi aussi tu veux mettre de la magie
viens participer à la prochaine édition.
En plus y'a à manger gratuit pour les étudiants c'est un plaisir ça change des pâtes...
ah et aussi t'es excuser pour pas aller en cours le lendemain, si l'a tu n'es pas convaincu je sais pas ce qu'il te faut...*/

// je vous prie de m'excuser pour les fautes d'orthographes, de grammaire et de syntaxe mais j'ai pas le temps
// de corriger la nuit est quasi fini

// ps : on m'a menacé pour dire ça
