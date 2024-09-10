import { Flex, Image, Heading, Box, chakra, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      bgSize="10vw 10vw"
      bgImage="linear-gradient(to right, #1c1c1c 1px, transparent 1px), linear-gradient(to bottom, #1c1c1c 1px, transparent 1px)"
      bgColor="#eee"
      w="100%"
    >
      <Flex direction="column" justify="space-between" align="center" pos="relative" minH="100vh" p="8.391vw 6rem">
        <Heading
          pos="absolute"
          top="20vh"
          left="8.391vw"
          color="black.100"
          textTransform="uppercase"
          fontSize="5vw"
          fontStyle="normal"
          fontWeight="800"
          lineHeight="normal"
          bg="white.50"
          w="40%"
          textAlign="left"
          p="3vw"
          zIndex="3"
          border="2px solid black.100"
        >
          Good <chakra.span color="green.100">food</chakra.span>
          <br></br> is a<br></br> good <chakra.span color="green.100">mood</chakra.span>
        </Heading>
        <Image src="src/assets/cuisinier.png" alt="logo" pos="absolute" top="30vh" right="7.7vw" w="auto" h="60vh" objectFit="cover" objectPosition="center" />
      </Flex>
      <Flex
        direction={["column", "column", "row", "row"]}
        width="100vw"
        gap="5vw"
        p="8.391vw 8.391vw 0px 8.391vw"
        justify="space-between"
        align="flex-start"
        bgColor="black.100"
      >
        <Image src="src/assets/map.png" alt="article" w="100%"></Image>
        <Flex direction="column" justify="center" align="flex-start" gap="1vw" w="100%">
          <Heading as="h2" fontSize="3xl" color="white.50" textTransform="uppercase">
            Nous sommes à coté de chez vous
          </Heading>
          <Text fontSize="lg" color="white.50" textAlign="justify">
            Imaginez-vous déguster nos délices culinaires dans les artères animées des 20 plus grandes villes de France. Avec une présence forte et savoureuse
            dans chacune de ces métropoles, nos 150 restaurants Good Food vous offrent une expérience gustative inoubliable, une bouchée à la fois. Mais notre
            passion pour la bonne cuisine ne se limite pas aux frontières françaises. Au contraire, nous avons étendu nos délices au-delà des frontières,
            jusqu'au Luxembourg et en Belgique. Où que vous soyez parmi ces pays, notre engagement envers une cuisine de qualité reste inchangé. Que vous
            déambuliez dans les rues animées de Paris, exploriez la beauté de Bruxelles ou flâniez à Luxembourg-ville, vous trouverez toujours un de nos
            restaurants pour éveiller vos papilles et vous offrir un festin digne des gourmets les plus exigeants. Rejoignez-nous dans l'une de nos nombreuses
            adresses disséminées à travers ces régions et laissez-nous vous transporter dans un monde de saveurs, de plaisirs gustatifs et d'expériences
            culinaires mémorables.
          </Text>
        </Flex>
      </Flex>
      <Flex direction="row-reverse" gap="5vw" width="100vw" p="8.391vw 8.391vw 0px 8.391vw" justify="space-between" align="flex-start" bgColor="black.100">
        <Image src="src/assets/plat-pref.png" alt="article" w="100%"></Image>
        <Flex direction="column" justify="center" align="flex-end" gap="1vw" w="100%">
          <Heading as="h2" fontSize="3xl" color="white.50" textTransform="uppercase">
            a chacun son plat préféré
          </Heading>
          <Text fontSize="lg" color="white.50" textAlign="justify">
            Explorez notre vaste répertoire de saveurs avec notre sélection soigneusement élaborée de 200 recettes, organisées avec amour en six catégories
            uniques. Que vous soyez un amateur de fruits de mer, un adepte des plats carnés, un fervent défenseur du végétarisme ou un explorateur intrépide des
            saveurs véganes, notre diversité culinaire promet de satisfaire tous les palais. Dans notre catégorie dédiée aux trésors de la mer, les plats exquis
            de poissons et fruits de mer frais vous transporteront au bord de l'océan, éveillant vos sens à chaque bouchée. Pour les aficionados de viande, nos
            créations allant des classiques aux plus innovants vous offriront une expérience gustative sans pareille, relevée de saveurs riches et succulentes.
            Nos recettes végétariennes sont une célébration de la variété offerte par le règne végétal, alliant textures et saveurs pour créer des plats aussi
            satisfaisants que nourrissants. Des épices envoûtantes des cuisines du monde aux saveurs familières des plats traditionnels, chaque recette est
            conçue pour émerveiller vos papilles. Que vous recherchiez des plats épicés et stimulants, des options équilibrées ou des innovations culinaires
            audacieuses, notre sélection de 200 recettes est là pour vous offrir un festival de saveurs et de découvertes.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
