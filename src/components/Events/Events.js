import data from "./EventsData";
import Event from "./Event";

const colors = ["red", "green", "blue", "yellow"];
let index = 0;
function nextColor() {
  if (index === 4) {
    index = 0;
  }
  index++;
  return colors[index - 1];
}

const events = data;
let Past = [],
  Upcoming = [],
  Recent = [];
let now = new Date();

now = Date.parse(
  `${now.getMonth() + 1}/${now.getDate()}/${now.toDateString().split(" ")[3]}`
);

for (const e of events) {
  if (e.date !== undefined) {
    let d = e.date.split("/");
    d = `${d[1]}/${d[0]}/${d[2]}`;
    const parsedDate = Date.parse(d);
    const date = new Date(Date.parse(d)).toString().split(" ");
    if (e.desc.length > 125) {
      e.desc = e.desc.slice(0, 125) + "...";
    }
    const eventCard = (
      <Event
        title={e.name}
        description={e.desc}
        color={nextColor()}
        time={`${date[2]} ${date[1].toUpperCase()}`}
        image={e.image}
        link={e.link}
        key={e.name}
      />
    );

    Recent.push(eventCard);
    if (now <= parsedDate) {
      Upcoming.push(eventCard);
    } else {
      Past.push(eventCard);
    }
  } else {
    const futureEventCard = (
      <Event
        key={e.name}
        title={e.name}
        description={e.desc}
        color={nextColor()}
        time={`Coming Soon`}
        image={e.image}
        link={e.link}
      />
    );
    Upcoming.push(futureEventCard);
    Recent.push(futureEventCard);
  }
}
Recent = Recent.slice(-3);

export { Recent, Upcoming, Past };
