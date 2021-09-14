import data from "./EventsData";
import styled from "styled-components";
import Page from "../../elements/Page";
import Event from "../../elements/Event";

const colors = ["red", "green", "blue", "yellow"];
let index = 0;
function nextColor() {
  if (index === 4) {
    index = 0;
  }
  index++;
  return colors[index - 1];
}

const events = data.reverse();
let Past=[],
  Upcoming=[],
  Recent = [];
const now = Date.now();

for (const e of events) {
  if (e.date !== undefined) {
    let d = e.date.split("/");
    d = `${d[1]}/${d[0]}/${d[2]}`;
    console.log(d);

    const date = (new Date(Date.parse(d))).toString().split(" ");
    console.log(date);

    Recent.push(
      <Event
        title={e.name}
        description={e.desc}
        color={nextColor()}
        time={`${date[2]} ${date[1].toUpperCase()}`}
      />
    );
    if (now < Date.parse(d)) {
      Upcoming.push(
        <Event
          title={e.name}
          description={e.desc}
          color={nextColor()}
          time={`${date[2]} ${date[1].toUpperCase()}`}
        />
      );
    } else {
      Past.push(
        <Event
          title={e.name}
          description={e.desc}
          color={nextColor()}
          time={`${date[2]} ${date[1].toUpperCase()}`}
        />
      );
    }
  }
  else {
      Upcoming.push(
        <Event
          title={e.name}
          description={e.desc}
          color={nextColor()}
          time={`Coming Soon`}
        />
      );
    Recent.push(
      <Event
        title={e.name}
        description={e.desc}
        color={nextColor()}
        time={`Coming Soon`}
      />
    );
  }
}
Recent = Recent.slice(0, 3).reverse();

export { Recent, Upcoming, Past };
