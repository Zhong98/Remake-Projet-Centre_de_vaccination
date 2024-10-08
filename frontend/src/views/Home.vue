<template>
  <div class="container position-relative d-flex flex-sm-column align-lg-center bg-white">
    <h1 class="title position-absolute">Centre de Vaccination Covid</h1>
    <div class="search d-flex flex-sm-row align-lg-center position-relative rounded-xl">
      <input type="text" placeholder="Nom de ville ou code postal">
      <i
        class="iconfont icon-sousuo position-absolute top-0 right-0 bottom-0 d-flex align-lg-center font-weight-bold bg-black cursor-pointer"/>
    </div>
<!--    <CardRow :cards="cardList.slice(0,4)"/>
    <CardRow :cards="cardList.slice(4,8)"/>-->
    <SearchResult />
  </div>
</template>

<script setup lang="ts">
import {Card} from '@/models/Card'
import CardRow from "@/components/home/CardRow.vue";
import SearchResult from '@/components/home/SearchResult.vue';

let cardList: Array<Card> = [
  reactive(new Card('https://www.capital.fr/economie-politique/covid-19-quels-sont-les-symptomes-du-nouveau-variant-xec-1503095',
    'https://www.capital.fr/imgre//fit/~1~cap~2023~05~04~f9a3ac47-0287-4f22-88ae-32adc4c72915.jpeg/896x504/focus-point/50%2C50/background-color/ffffff/quality/70/picture.jpg',
    'Covid-19 : quels sont les symptômes du nouveau variant XEC ?',
    'En ce début d’automne, le Covid-19 marque son retour. Le variant XEC a fait son apparition et risque de se diffuser largement sur le territoire. La campagne de vaccination débutera le 15 octobre prochain. Les symptômes, néanmoins, sont assez similaires à ceux déjà connus chez les autres variants.'
  )),
  reactive(new Card('https://www.bfmtv.com/international/europe/angleterre/tout-cela-etait-insense-boris-johnson-revele-avoir-prepare-un-raid-aquatique-sur-les-pays-bas-pour-s-emparer-de-vaccins-contre-le-covid-19_AN-202409280278.html',
    'https://images.bfmtv.com/gMxjM-OXZ_oljYaJay49TZoQHwo=/0x8:2048x1160/1600x0/images/Boris-Johnson-1590358.jpg',
    '"Tout cela était insensé": Boris Johnson révèle avoir préparé "un raid aquatique" sur les Pays-Bas pour s\'emparer de vaccins contre le Covid-19',
    'Dans ses mémoires à paraître, l\'ex-Premier ministre britannique révèle que son administration a considéré une opération visant à s\'emparer de vaccins contre le Covid-19 aux Pays-Bas, au plus fort de la pandémie.'
  )),
  reactive(
    new Card('https://www.20minutes.fr/sante/4112304-20240926-covid-19-tous-indicateurs-repartent-hausse-alerte-sante-publique-france',
      'https://img.20mn.fr/Hkpge1EwSN2QiqYGMbvm8yk/1444x920_a-file-photo-of-a-woman-receives-her-covid-test-at-a-covid-19-vaccination-centre-in-france-martin-bertrand-eyepress-photo-via-newscom-eyepress112351-epn-newscom-sipa-2202211550',
      'Covid-19 : Tous les indicateurs repartent à la hausse, alerte Santé publique France',
      'Dans son dernier bulletin de surveillance du Covid-19, Santé publique France relève que la circulation du virus s’intensifie dans l’Hexagone ces derniers jours.'
    )),
  reactive(new Card('https://www.bfmtv.com/sante/covid-19-tous-les-indicateurs-en-hausse-les-autorites-appellent-au-retour-des-gestes-barrieres_AD-202409260308.html',
    'https://images.bfmtv.com/9Ssnt_44j2EBnSJWi0bGL-GcLI8=/0x30:2048x1182/1600x0/images/Le-port-du-masque-anti-Covid-obligatoire-illustration-1688163.jpg',
    'Covid-19: tous les indicateurs en hausse, les autorités appellent au retour des gestes barrières',
    'En ce début d’automne, le Covid-19 marque son retour. Le variant XEC a fait son apparition et risque de se diffuser largement sur le territoire. La campagne de vaccination débutera le 15 octobre prochain. Les symptômes, néanmoins, sont assez similaires à ceux déjà connus chez les autres variants.'
  )),
  reactive(new Card('https://www.leparisien.fr/societe/sante/covid-grippe-les-gens-veulent-savoir-avec-larrivee-de-lhiver-le-retour-du-grand-bazar-des-infections-27-09-2024-2CN5W74Q65F3NJ4S376Q5FG3UE.php',
    'https://www.leparisien.fr/resizer/VHPvCZkMPMdQwpAdESp5hd62NXs=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/HBTV3H2HXREHRNIAYSXBBT266Q.jpg',
    '« Covid, grippe... Les gens veulent savoir » : avec l’arrivée de l’automne, le retour du grand bazar des infections',
    'Entre les virus et bactéries qui circulent beaucoup plus qu’avant le Covid depuis plusieurs mois et ceux attendus avec la baisse des températures, médecins et scientifiques ne parviennent pas toujours à remonter à la source des symptômes.'
  )),
  reactive(new Card('https://www.ouest-france.fr/pays-de-la-loire/saumur-49400/sante-face-a-laugmentation-des-cas-de-covid-19-lhopital-de-saumur-appelle-a-la-vigilance-7a2d3868-7cae-11ef-89ff-f6efc6b94492',
    'https://media.ouest-france.fr/v1/pictures/MjAyNDA5NDBiMTIwYWM4NWM0ZWU1MjJiZjY2ZTZjODMyZTI2MTA?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=1645491070798feac48a45df259c543b3ef92252380a61e8e9da96d79389dbf7',
    'Face à l’augmentation des cas de Covid-19, l’hôpital de Saumur appelle à la vigilance',
    'Face à l’augmentation des cas de Covid-19 sur le territoire du Saumurois, le centre hospitalier de Saumur appelle les  visiteurs à une vigilance accrue lors de leur venue à l’hôpital de Saumur, Longué-Jumelles et dans nos Ehpad (Gilles-de-Tyr, Antoine-Cristal, Montreuil-Bellay) .'
  )),
  reactive(new Card('https://www.la-croix.com/covid-la-circulation-du-virus-semble-s-intensifier-en-france-20240925',
    'https://i.la-croix.com/729x0/smart/2024/09/25/1641399-une-intensification-de-la-circulation-du-covid-19-.jpg',
    'Covid: la circulation du virus semble s\'intensifier en France',
    'Une intensification de la circulation du Covid « semble s’amorcer » en France, où l’ensemble des indicateurs progresse, a observé mercredi Santé publique France, pointant une augmentation plus marquée chez les seniors.'
  )),
  reactive(new Card('https://www.midilibre.fr/2024/09/28/le-nombre-de-patients-atteints-du-covid-est-en-augmentation-sante-publique-france-lance-lalerte-12225562.php',
    'https://images.midilibre.fr/api/v1/images/view/66f791ff7e3192687b3b17db/large/image.jpg?v=1',
    'Le nombre de patients atteints du Covid est en augmentation, Santé publique France lance l’alerte',
    'Les chiffres du Covid, selon santé publique France, repartent à la hausse. Les gestes barrières sont donc vivement conseillés ainsi que de participer, pour les personnes les plus fragiles, à la prochaine campagne de vaccination qui débute le 15 octobre.'
  )),
]
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
}

.title {
  margin-top: 60px;
  color: black;
  font-size: 42px;
}

.search {
  margin-top: 160px;
  padding: 10px 20px;
  width: 50%;
  height: 60px;
  background-color: aliceblue;
  font-size: 32px;

  input {
    width: 90%;
    color: black;
  }

  i {
    padding: 0 15px;
    font-size: 32px;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
  }
}
</style>
