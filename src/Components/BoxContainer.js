import Box from "./Box";
import "./BoxContainer.css";

function BoxContainer({ address }) {
  const data = [
    { id: 1, title: "IP Address", value: address.ip },
    {
      id: 2,
      title: "Location",
      value: `${address.location.region},
    ${address.location.city}`,
    },
    { id: 3, title: "Timezone", value: `UTC ${address.location.timezone}` },
    { id: 4, title: "ISP", value: address.isp },
  ];
  return (
    <div className="panel">
      {data.map((item) => {
        return <Box key={item.id} title={item.title} value={item.value} />;
      })}
    </div>
  );
}

export default BoxContainer;
