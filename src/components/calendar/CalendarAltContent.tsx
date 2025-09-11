'use client';

import React, { useState } from 'react';
import { Card, Divider, Dropdown, Space, Button, InputNumber, Empty, Table, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import SimpleContent from "@/components/SimpleCon";
import GetCrumbs from "Comp/NavigationCrumb";
import CalendarAltTable from "@/components/calendar/CalendarAltTable";

const calendarData = {
  months: [
    'Buiborn','Ukennir','Pwazorn','Verhildr','Vihildr','Wiobrun',
    'Vesmirr','Fexgrim','Aurskar','Mceejul','Lcaorn','Cyarn',
    'Radrik','Naavok'
  ],
  monthLengths: [34,30,34,33,22,36,31,35,6,4,21,37,30,31],
};

function GetAPICalendar() {
  const data = {
    tableDescription: {
      description:
        "Every day is 24 hours. In total there are 384 days. There is no set concept of weeks, but days are grouped by 12s, so to refer a 4 day spanning time one might say 'thirdling' or to 6, 'halfling', 3 'quarterling' and 12 'a full ling', which makes the word ling treated as a unit of time. The seasons are slightly more hectic compared to Teothe, as Thaum has 4 moons. Windburn is the season of tornados and storms, Scorchphase is the season of boiling seas, Charmfall is the time in which all 4 moons align for a short while and it's seen holy due to its magical amplifications, Mirefall is the time this alignment ends and causes extreme rainfall characterised by the dark colour of the droplets. Floodwane is a season where rivers overflows and coasts disappear, and lastly Frostclamp, the season of permafrost and glaciation.",
      columns: ["month", "name", "season"],
      tabName: "calendar",
    },
    tableData: [
      { season: "Spring", name: "Buiborn", month: "1" },
      { season: "Spring", name: "Ukennir", month: "2" },
      { season: "Windburn", name: "Pwazorn", month: "3" },
      { season: "Summer", name: "Verhildr", month: "4" },
      { season: "Summer", name: "Vihildr", month: "5" },
      { season: "Scorchphase", name: "Wiobrun", month: "6" },
      { season: "Autumn", name: "Vesmirr", month: "7" },
      { season: "Autumn", name: "Fexgrim", month: "8" },
      { season: "Charmfall", name: "Aurskar", month: "9" },
      { season: "Mirefall", name: "Mceejul", month: "10" },
      { season: "Floodwane", name: "Lcaorn", month: "11" },
      { season: "Winter", name: "Cyarn", month: "12" },
      { season: "Winter", name: "Radrik", month: "13" },
      { season: "Frostclamp", name: "Naavok", month: "14" },
    ],
  };

  const columns = data.tableDescription.columns.map((col) => ({
    title: col[0].toUpperCase() + col.slice(1).toLowerCase(),
    dataIndex: col,
    key: col,
  }));

  const dataSource = [...data.tableData].sort((a, b) => parseInt(a.month) - parseInt(b.month));

  return (
    <>
      <SimpleContent
        contentProps={{
          title: "Calendar Information",
          text: [data.tableDescription.description],
        }}
      />
      <Table className="mt-4" dataSource={dataSource} columns={columns} pagination={false} rowKey="month" />
    </>
  );
}

const CalendarPage: React.FC = () => {
  const [monthName, setMonthName] = useState<string>("Buiborn");

  const monthItems: MenuProps["items"] = calendarData.months.map((m) => ({ label: m, key: m }));

  const selectedMonthIndex = calendarData.months.indexOf(monthName);
  const monthLength = selectedMonthIndex >= 0 ? calendarData.monthLengths[selectedMonthIndex] : 0;

  return (
    <section>
      <GetCrumbs path={"Thaum,Calendar"} />
      <Card bordered={false} className="w-full">
        <Space className="mb-4 flex flex-wrap">
          <div>
            Month:{" "}
            <Dropdown menu={{ items: monthItems, onClick: (e) => setMonthName(e.key) }}>
              <Button>
                <Space>{monthName || "Select"}<DownOutlined /></Space>
              </Button>
            </Dropdown>
          </div>
        </Space>

        <Divider />
        {monthName ? (
          <CalendarAltTable
            calendarProps={{
              monthName
            }}
            monthLength={monthLength}
          />
        ) : (
          <Empty />
        )}
        <Divider />
        <GetAPICalendar />
      </Card>
    </section>
  );
};

export default CalendarPage;
