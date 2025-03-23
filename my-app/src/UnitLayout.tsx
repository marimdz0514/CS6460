import Sidebar from '../src/components/Sidebar';
import '../src/css/Unit.css';

const UnitLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="unit-container">
    <Sidebar />
    <div className="unit-content">{children}</div>
  </div>
);

export default UnitLayout;