"use client";

import React from "react";
import { Button, Card, Divider } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { DoubleRightOutlined } from "@ant-design/icons";

/**
 * Main application component that renders the Thaum Campaign Setting.
 * @returns The application section containing breadcrumbs, a card with simple content, and information about the Thaum world.
 */
export default function DefaultPageContent() {
  return (
    <section>
      <GetCrumbs path="Thaum" />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Thaum is Broken",
            text: [
              "The gods are starving, the planes are severed, and Auriel Corps rules with cold precision. The Corrosion of Rods left reality scarred, the Divine Curtain choking what remains. Hope is ash; save for a single ember: the Thauman Token.",
              "It is salvation. It is ruin. It is the last wager in a world that has forgotten mercy.",
              "What will you make of Thaum? Savior, tyrant, or carrion crow...",
            ],
          }}
        />
        <Button href="https://www.teothe.com">
          <span>
            See Teothe <DoubleRightOutlined />
          </span>
        </Button>
        <Divider type="vertical" style={{ borderColor: "white" }} />
        <Button href="/common-lore">
          <span>
            See Common Lore <DoubleRightOutlined />
          </span>
        </Button>
      </Card>
    </section>
  );
}
