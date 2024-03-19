import FirstCard from "./components/FirstCard";
import IntroCard from "./components/IntroCard";
import TableFeedback from "./components/TableFeedback";
import UploadCard from "./components/UploadCard";

export default function Home() {
  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
      }}>
        <FirstCard />
        <IntroCard /> 
        <UploadCard />
        <TableFeedback />
      </div>
    );
}
