"use client";
import { Button, Card, Divider } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { DoubleRightOutlined } from "@ant-design/icons";
/**
 * Uses SimpleContent to generate a page full of text describing the common lore of Thaum.
 * @tutorial
 * @see SimpleContent
 * @returns Card(antd) wrapped by section
 */
export default function CommonLoreContent() {
  return (
    <section>
      <GetCrumbs path={"Thaum,Common Lore"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            image: {
              src: "./wheel.png",
              alt: "Wheel Cosmology",
            },
            title: "Dimensional Cosmology",
            text: [
              "The Wheel Cosmology in Thaum is a conceptual framework that organizes the multiverse into a series of interconnected planes and realms. Yet Thaum is one of the many distant planes where worldtree connection is either severed or inexistent...",
              "For more information, you should see Teothe\'s rendition of the common lore.",
              "These summaries provide a brief overview of each component within the Dimensional Cosmology of Thaum, offering a glimpse into the diverse and interconnected planes that players and characters may explore during their adventures.",
            ],
          }}
        />
        <Button href="https://teothe.com/planes" target="_blank">
          <span>
            See All Planes in Teothe <DoubleRightOutlined />
          </span>
        </Button>
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Ancients in Thaum",
            text: [
              "Ancients all take their power from Mceeju so all are close to gods in power. People of Thaum, the ones who know about ancients, believe all of them to be perished over time.",
              "Ancients of Thaum served a greater cause that was about preservation and exploration of Thaum's body. They shone their lights to the edges of the main island which is now called Thaum, and hidden it from time. In a constant stasis, this place lost all connection to whatever lied behind the light.","They were an ancient civilization that had evolved and found great meaning in both magic and immortality. Nobody knows how they disappeared."
            ],
          }}
        />
        <Divider />
        <SimpleContent
          contentProps={{
            title: "Domains",
            text: [
              "Deities of Thaum are divided into 8 domains. These domains are Nature, Tempest, Trickery, Death, Knowledge, War, Life and Light. Most Deities exist within one to two domains.",
              "Pantheon deities use fundamental domains. Gameplay-wise, other domains like Endless domains (destruction, destiny, despair, desire, delirium, dream), Broad domains (decay, drama, fabrication, fate, time, distance, potential) or ones introduced in XGE (forge, grave), or UA (order) are welcome.",
            ],
          }}
        />
        <Button href="https://teothe.com/deities" target="_blank">
          <span>
            See Deities in Teothe <DoubleRightOutlined />
          </span>
        </Button>
      </Card>
    </section>
  );
}
