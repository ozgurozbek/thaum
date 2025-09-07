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
  "factionEnemies": ["Inthizilelgghinn","Obsidian Order"],
  "factionAllies": ["Meadowcrew","Warrior's Guild"],
  "factionDetail": [
    "A common adventurer's go-to place for new beginnings. Full of tasks and adventures, sometimes taking place in bars and inns, sometimes in castles.",
    "Quest difficulty and rewards are categorized by stars, from No star or ⭐ to 🌟🌟🌟.",
    "Rewards include gold, bonuses for timeliness, challenges, and inconvenience. Guild takes a small cut.",
  ],
  "factionHQ": "Arikna",
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
    "They preserve whatever was left regarding Ancients of Thaum, mostly vague information from that time.",
    "Formed after Sivirron Paracix's guide and within the Blue Era."
  ],
  "factionHQ": "",
  "factionKey": 2
},{
  "factionType": FactionTypes.Enforcement,
  "factionName": "Arcanum Alliance",
  "factionAliases": ["Arcanum","Tybalum"],
  "factionDeity": "Wusor",
  "factionEnemies": ["Pearl Plunderers"],
  "factionAllies": ["Sapphire Sanctum"],
  "factionDetail": [
    "The magical body governing the plane by seeking order between all magic and magic casters. Their greatest feat was being on the winning side of the Mages' Uprising, also known as the Mages' Crisis. Consists of two divisions: Arcanum (above ground) and Tybalum (below ground).",
    "Arcanum often interfere with other planes of existence if actions there could affect Thaum.",
    "Owns the world's largest magic academy located on the island of Fei, near Konark.",
  ],
  "factionHQ": "Konark",
  "factionKey": 3
},{
  "factionType": FactionTypes.Professional,
  "factionName": "Artisan's Guild",
  "factionAliases": [],
  "factionDeity": "Tsahnrad",
  "factionEnemies": ["Thieve's Guild"],
  "factionAllies": ["Artificer's Union","Brewer's Guild"],
  "factionDetail": [
    "A guild of artisans and craftsmen, which also has many contacts to vast resources and royalty."
  ],
  "factionHQ": "",
  "factionKey": 4
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
  "factionHQ": "Mendes, Alax",
  "factionKey": 5
},{
  "factionType": FactionTypes.Adventuring,
  "factionName": "Black Scripture",
  "factionAliases": [],
  "factionDeity": "Pwazo",
  "factionEnemies": ["Sapphire Sanctum"],
  "factionAllies": [],
  "factionDetail": [
    "Responsible for old, very antique magical items, most of which are cursed.",
    "They have no leader worthy, and members are often missing. Black Scripture cultists, however, still wander around. Cultists are mostly leeches infusing others' thoughts."
  ],
  "factionHQ": "",
  "factionKey": 6
},{
  "factionType": FactionTypes.Rebel,
  "factionName": "Broken Aces",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    "A guild for that acts like a home for all those that cheat, trick and con. Members specialize in gaslighting and card tricks."
  ],
  "factionHQ": "",
  "factionKey": 7
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
  "factionKey": 10
},{
  "factionType": FactionTypes.Weave,
  "factionName": "Mage's Guild",
  "factionAliases": [],
  "factionDeity": "Wusor",
  "factionEnemies": ["Pearl Plunderers"],
  "factionAllies": [],
  "factionDetail": [
    "Nowhere near its old glory; the reformed Mage's Guild has no HQ. Many mages miss their former demiplane HQ, but none are strong enough to relocate or create another.",
    "After many political issues and the murder of mages, they caused a coup killing many world leaders. Over time, this oppression was stopped."
  ],
  "factionHQ": "",
  "factionKey": 14
},{
  "factionType": FactionTypes.Political,
  "factionName": "Opal Observatory",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": ["Arcanum Alliance","Sapphire Sanctum"],
  "factionDetail": [
    "Group of people who carry diplomatic business to elemental planes, whom helped defend the Major Cities of Feianthe during the Mages' Crisis."
  ],
  "factionHQ": "City of Brass",
  "factionKey": 18
},{
  "factionType": FactionTypes.Crusader,
  "factionName": "Adamantium Concordat",
  "factionAliases": ["Paladin's Guild"],
  "factionDeity": "Yr'snn",
  "factionEnemies": ["Guild of Dark Blood Witchers"],
  "factionAllies": ["Adventurer's Guild","Slayer's Take"],
  "factionDetail": [
    "An order of paladins of different oaths and creeds.",
    "Membership is earned by recounting your deeds rather than entering a physical place. Guild ranks go up to 3 marks; 4 marks are considered extraordinary."
  ],
  "factionHQ": "Fex",
  "factionKey": 19
},{
  "factionType": FactionTypes.Weave,
  "factionName": "Pearl Plunderers",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": ["Arcanum Alliance","Mage's Guild","Thieve's Guild"],
  "factionAllies": [],
  "factionDetail": [
    "A battle mage army that forms weapons out of pure magical energy, drawing from various planar sources. Some believe they were the underlying cause of the Mages' Crisis."
  ],
  "factionHQ": "Plane of Choll",
  "factionKey": 20
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
  "factionKey": 22
},{
  "factionType": FactionTypes.Criminal,
  "factionName": "Thieve's Guild",
  "factionAliases": [],
  "factionDeity": "Xua",
  "factionEnemies": ["Sapphire Sanctum","Pearl Plunderers"],
  "factionAllies": ["Obsidian Order","Inthizilelgghinn"],
  "factionDetail": [
    "A secret organization with branches in nearly all towns, cities, and villages. Led by a female human named Katarina.",
    "Often hired for information rather than for stealing and selling goods."
  ],
  "factionHQ": "Oywego",
  "factionKey": 27
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "Wonderers of Du'Ora",
  "factionAliases": ["N'Tiora Folk","Druids"],
  "factionDeity": "Cyaxo",
  "factionEnemies": ["Crimson Caravan Company"],
  "factionAllies": ["Slayer's Take"],
  "factionDetail": [
    "Guild for Druids who belong to a circle and have ventured to Du'Ora at least once. Members must agree with the guild's views on pollution, destruction, and preservation.",
    "Includes branches such as the Kaio branch."
  ],
  "factionHQ": "N'Tiora Tree",
  "factionKey": 30
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "Farmer's Guild",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    ""
  ],
  "factionHQ": "",
  "factionKey": 30
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "Gang of Ortos",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    ""
  ],
  "factionHQ": "",
  "factionKey": 30
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "High Union",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    ""
  ],
  "factionHQ": "",
  "factionKey": 30
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "Karazhan Bandits",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    ""
  ],
  "factionHQ": "",
  "factionKey": 30
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "Malugans",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    ""
  ],
  "factionHQ": "",
  "factionKey": 30
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "N'landroshien",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    ""
  ],
  "factionHQ": "",
  "factionKey": 30
},{
  "factionType": FactionTypes.Tribe,
  "factionName": "Silver Spine Rangers",
  "factionAliases": [],
  "factionDeity": "",
  "factionEnemies": [],
  "factionAllies": [],
  "factionDetail": [
    ""
  ],
  "factionHQ": "",
  "factionKey": 30
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
