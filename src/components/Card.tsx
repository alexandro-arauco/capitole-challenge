import '../styles/Card.scss';

interface CardProps {
  title: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, actions, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="card-actions">{actions}</div>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};
