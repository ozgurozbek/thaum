"use client";

import { Card, Col, Divider, Row, Typography } from "antd";
import Faction from "@/components/factions/Factions";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";

const { Title } = Typography;

interface DataType {
  factionType: string;
  factionName: string;
  factionAliases: string[];
  factionDeity: string;
  factionEnemies: string[];
  factionAllies: string[];
  factionDetail: string[];
  factionHQ: string;
  factionKey: number;
}

enum FactionTypes {
  Adventuring = "Adventuring",
  Assassins = "Assassins",
  Bandits = "Bandits",
  Bardic = "Bardic",
  Berserker = "Berserker",
  Charitable = "Charitable",
  Criminal = "Criminal",
  Crusader = "Crusader",
  Enforcement = "Enforcement",
  Fleet = "Fleet",
  House = "House",
  Mercenary = "Mercenary",
  Merchant = "Merchant",
  Monastic = "Monastic",
  Peacekeeping = "Peacekeeping",
  Political = "Political",
  Professional = "Professional",
  Psionic = "Psionic",
  Rebel = "Rebel",
  Religious = "Religious",
  Secret = "Secret",
  Slaving = "Slaving",
  Tribe = "Tribe",
  Weave = "Weave",
} 

const factionsData: DataType[] = [
  {
  "factionType": FactionTypes.Adventuring,
  "factionName": "Adventurer's Guild",
  "factionAliases": ["Adventurer's League"],
  "factionDeity": "Radu",
  "factionEnemies": ["Broken Aces"],
  "factionAllies": [],
  "factionDetail": [
    "Once the starting point for countless adventurers, the guild has long since lost its reputation. The notice board that was once overflowing with tasks and quests from taverns, inns, and castles now stands mostly bare. Quests, if any appear at all, are still marked by their old star system from none to three, but the rewards are meager and the guild still insists on taking its cut. With few adventurers left to answer the call, the once-bustling hall now echoes with silence.","Operates the Gladiator arena as well. Square ring, pink-green-red flowers and they are covered in blood. Installed a water fountain with a dark red liquid in. People use it to beat their opponents as an environmental tool. Rich folk use this for betting, usually located in the 4 pillars. Is surrounded by theater-like seating. People usually like this interaction."
  ],
  "factionHQ": "",
  "factionKey": 1
},
{
  "factionType": FactionTypes.Peacekeeping,
  "factionName": "Ancientry Preservation Union",
  "factionAliases": [],
  "factionDeity": "Ayrugcumoak",
  "factionEnemies": [],
  "factionAllies": ["Black Scripture","Artificer's Union"],
  "factionDetail": [
    "They try to protect artifacts, buildings and such related to Ancients of Thaum. It's a rumour that people actually gamble within the guild...","They'd entertain the idea of an ancient curse on the land, but it is a quest to explore and research, which nobody fully commits to."
  ],
  "factionHQ": "",
  "factionKey": 2
},{
  "factionType": FactionTypes.Professional,
  "factionName": "Artisan's Guild",
  "factionAliases": [],
  "factionDeity": "Tsahnrad",
  "factionEnemies": ["Thieve's Guild"],
  "factionAllies": ["Farmer's Guild"],
  "factionDetail": [
    "A guild of artisans and craftsmen."
  ],
  "factionHQ": "",
  "factionKey": 3
},{
  "factionType": FactionTypes.Peacekeeping,
  "factionName": "Auriel Corps",
  "factionAliases": [],
  "factionDeity": "Catequil",
  "factionEnemies": [],
  "factionAllies": ["All of them, what did you expect?"],
  "factionDetail": [
    "Distributes Thauman Tokens and provides safe passage out of Thaum. Encourages gambling."
  ],
  "factionHQ": "Mendes, Akuzar",
  "factionKey": 4
},{
  "factionType": FactionTypes.Adventuring,
  "factionName": "Black Scripture",
  "factionAliases": [],
  "factionDeity": "Pwazo",
  "factionEnemies": ["Sapphire Sanctum"],
  "factionAllies": [],
  "factionDetail": [
    "Once keepers of antique magical relics, the group is now thoroughly corrupted, their collection steeped in curses and forbidden power. A single leader has risen to command them, twisting the remnants of their order into a dangerous force. Their members, no longer scattered or absent, now actively hunt Auriel Corps trade routes, preying on shipments and bleeding the guild of its lifeblood."
  ],
  "factionHQ": "",
  "factionKey": 5
},{
  "factionType": FactionTypes.Rebel,
  "factionName": "Broken Aces",
  "factionAliases": ["Thieve's Guild"],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    "In an old theater by the docks, this guild serves as a home for cheats, tricksters, and con artists. Loaded dice, marked cards, and gaslighting are their craft, and only the most persistent ever gain entry."
  ],
  "factionHQ": "Akuzar",
  "factionKey": 6
},{
  "factionType": FactionTypes.Secret,
  "factionName": "Guild of Afternoon Tea",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": ["Guild of Dark Blood Witchers"],
  "factionDetail": [
    "ʞᎸʏɿƚᎸǫƚʜʏ! To apply, summon Ꮈɿʏᴎꙅƚʏꞁ."
  ],
  "factionHQ": "The Abyss",
  "factionKey": 7
},{
  "factionType": FactionTypes.Weave,
  "factionName": "Mage's Guild",
  "factionAliases": [],
  "factionDeity": "Wusor",
  "factionEnemies": ["Pearl Plunderers"],
  "factionAllies": [],
  "factionDetail": [
    "Mages work alone in the city, most of them Elves. After the plane’s enslavement, they pledged to world leaders and serve cities through binding contracts, though some wander upside-down streets or talk to shadows instead of following rules."
  ],
  "factionHQ": "Wahl",
  "factionKey": 8
},{
  "factionType": FactionTypes.Political,
  "factionName": "Opal Observatory",
  "factionAliases": [],
  "factionDeity": "Jenelius Londste",
  "factionEnemies": ["Paladin's Guild"],
  "factionAllies": ["Arcanum Alliance","Sapphire Sanctum"],
  "factionDetail": [
    "A group devoted to carrying diplomatic business. They once aided in defending major strongholds, especially within Elemental Planes. They have magnificent libraries and lawyers.","Now they are zealots of a goddess of determination, driven by obsession and willing to bend reality itself to achieve her will."
  ],
  "factionHQ": "Alax",
  "factionKey": 9
},{
  "factionType": FactionTypes.Crusader,
  "factionName": "Adamantium Concordat",
  "factionAliases": ["Paladin's Guild"],
  "factionDeity": "Yr'snn",
  "factionEnemies": ["Arcanum Alliance"],
  "factionAllies": ["Adventurer's Guild"],
  "factionDetail": [
    "An order of paladins of different oaths and creeds. They hunt werebeasts and ignore the Auriel Corps. Members gain rank by completing trials that test skill and faith. Completing these trials grants Oathbound Boons, temporary or permanent abilities such as enhanced strength, resistance to curses, or sacred shouts that can stun or repel foes."
  ],
  "factionHQ": "Alax",
  "factionKey": 10
},{
  "factionType": FactionTypes.Weave,
  "factionName": "Pearl Plunderers",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": ["Thieve's Guild"],
  "factionAllies": [],
  "factionDetail": [
    "A battle mage army that forms weapons out of pure magical energy, drawing from various planar sources. They haven't been seen in Thaum for over 400 years."
  ],
  "factionHQ": "Plane of Choll",
  "factionKey": 11
},{
  "factionType": FactionTypes.Peacekeeping,
  "factionName": "Sapphire Sanctum",
  "factionAliases": [],
  "factionDeity": "Lcaoc",
  "factionEnemies": [],
  "factionAllies": ["Arcanum Alliance"],
  "factionDetail": [
    "A court for international and extraplanar criminals, especially those whose crimes are magical in nature.",
    "They have enforcers rated as Grandmaster, International Master, National Master, and Master. Members can move from the court to being an enforcer, but not the other way around.",
    "To join, you must complete 3 mundane quests that aren't very real. After completing the quests, you gain a rating and start as a Master."
  ],
  "factionHQ": "",
  "factionKey": 12
},{
  "factionType": FactionTypes.Secret,
  "factionName": "Thieve's Guild",
  "factionAliases": [],
  "factionDeity": "Xua",
  "factionEnemies": ["Sapphire Sanctum","Opal Observatory"],
  "factionAllies": ["Adventurer's Guild"],
  "factionDetail": [
    "A secret organization with branches in nearly all towns, cities, and villages. It is known that they are being run by a 'book'.",
    "Usually, people who are seeking information pay this organization instead of the organization stealing things and selling them."
  ],
  "factionHQ": "Loutra",
  "factionKey": 13
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "Wonderers of Du'Ora",
  "factionAliases": ["Druids","Du'O'RATs"],
  "factionDeity": "Uke",
  "factionEnemies": ["Auriel Corps"],
  "factionAllies": [],
  "factionDetail": [
    "Guild for Druids who belong to a circle and have ventured to Du'Ora at least once. Members must agree with the guild's views on pollution, destruction, and preservation."
  ],
  "factionHQ": "",
  "factionKey": 14
},{
  "factionType": FactionTypes.Merchant,
  "factionName": "Farmer's Guild",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": ["Thieve's Guild"],
  "factionAllies": ["Auriel Corps","Wonderers of Du'Ora"],
  "factionDetail": [
    "A guild of farmers and agrarians that cultivates the land and organizes harvests across the region. Some members hold secret contracts with the Auriel Corps, raising crops on demand for high prices. Competitions are held regularly to select new members for these elite contracts, offering ambitious farmers a chance to gain influence and potentially earn the coveted Vessel title from the Auriel Corps."
  ],
  "factionHQ": "Mendes",
  "factionKey": 15
},{
  "factionType": FactionTypes.Mercenary,
  "factionName": "Gang of Ortos",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    "The Gang of Ortos is a notorious, colorful faction rooted in the streets and alleys of the cities of Thaum. They operate in the shadows, engaging in smuggling, protection rackets, and daring street challenges, all while maintaining a humorous and ironic outlook on life."
  ],
  "factionHQ": "",
  "factionKey": 16
},{
  "factionType": FactionTypes.Psionic,
  "factionName": "High Union",
  "factionAliases": [],
  "factionDeity": "Naahv",
  "factionEnemies": ["Auriel Corps"],
  "factionAllies": [],
  "factionDetail": [
    "A secretive guild of psions and mindwalkers, the High Union opposes the Auriel Corps at every turn. Its members wield mental powers to manipulate, infiltrate, and destabilize, preferring subtle strikes over open conflict. They specialize in destroying Thauman Tokens, a rare currency that traps souls, striking at the Corps' power at its source.","Recruitment favors those with rare psionic talent, and internal advancement is earned through demonstrations of cunning, mastery over the mind, and successful missions."
  ],
  "factionHQ": "Second Moon of Thaum, Selvia",
  "factionKey": 17
},{
  "factionType": FactionTypes.Bandits,
  "factionName": "Karazhan Bandits",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    "The Karazhan Bandits were a powerful bandit group that operated on the north east coasts and are the most successful and notorious bandits of the area. It was named for and led by the brothers Sulam and Draven Karazhan."
  ],
  "factionHQ": "",
  "factionKey": 18
},{
  "factionType": FactionTypes.Fleet,
  "factionName": "Manugans",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    "A ruthless faction from the Manuga Islands. Pirates, mercenaries, and warriors who value strength, loyalty, and spectacle. Their leaders command through fear and charisma, and they strike unpredictably with a mix of skill, supernatural power, and daring raids."
  ],
  "factionHQ": "Manuga",
  "factionKey": 19
},{
  "factionType": FactionTypes.Rebel,
  "factionName": "N'landroshien",
  "factionAliases": [],
  "factionDeity": "Fexyiaf",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    "A northern cult of humans, elves, and dwarves that raided orc settlements. Leaders wore black-and-red robes and led racist chants. Members killed male orcs and displayed their heads on stakes."
  ],
  "factionHQ": "Loutra Forests",
  "factionKey": 20
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "Silver Spine Rangers",
  "factionAliases": [],
  "factionDeity": "Ehx",
  "factionEnemies": ["Wonderers of Du'Ora"],
  "factionAllies": ["Adventurer's Guild"],
  "factionDetail": [
    "Operating beneath a clock tower in the northeast, the Silver Rangers Guild trains scouts, trackers, and survivalists. Members specialize in forest lore, tracking, and setting traps. Admission requires surviving a trial in the city’s sewers, testing resourcefulness and endurance. The guild maintains a chilly rivalry with nearby druids, often clashing over territory and methods, and its members value cunning, patience, and precision above brute strength."
  ],
  "factionHQ": "Akuzar",
  "factionKey": 21
}
];

// Shows all factions in one layout
function AllFactions() {
  const sortedData = [...factionsData].sort((a, b) => a.factionType.localeCompare(b.factionType));

  return (
    <Row gutter={[16, 16]}>
      {sortedData.map((item) => (
        <Col
          key={item.factionKey}
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={8}
          xxl={6}
        >
          <Faction
            imageSrc={`./Factions/${item.factionName}.png`}
            typeImageSrc={`./Icons/FactionTypes/${item.factionType}.png`}
            descriptionProps={item}
          />
        </Col>
      ))}
    </Row>
  );
}

// Page component
export default function FactionsContent() {
  return (
    <section>
      <GetCrumbs path="Thaum,Factions" />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Factions of Thaum",
            text: ["An overview of the various factions in the world of Thaum."],
          }}
        />
        <Divider />
        <Title level={2}>Common Factions</Title>
        <AllFactions />
      </Card>
    </section>
  );
}
